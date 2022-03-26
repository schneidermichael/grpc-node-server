const messages = require('./proto/currency_converter_service_pb');
const services = require('./proto/currency_converter_service_grpc_pb');
const jsdom = require('jsdom');
const fs = require('fs');
const fetch = require('node-fetch');
const grpc = require('@grpc/grpc-js');

const { JSDOM } = jsdom;

// Constants
const HOST = 'localhost';
const PORT = '50051';
const URL = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml'

/**
 * Implements the ListOfCurrencies RPC method.
 */
async function listOfCurrencies(call, callback) {
    let response = new messages.ListOfCurrenciesResponse();

    response.setCurrenciesList(await parseList());

    callback(null, response);
}

/**
 * Implements the CurrencyPerSymbol RPC method.
 */
 async function currencyPerSymbol(call, callback) {

    let response = new messages.CurrencyPerSymbolResponse();

    let currency = await getOneElementFromList(call.request.getSymbol())
    
    response.setCurreny(currency);

    callback(null, response);
}

/**
 * Implements the CalculatingCrossCurrency RPC method.
 */
async function calculatingCrossCurrency(call, callback) {

    let response = new messages.CalculatingCrossCurrencyResponse();

    response.setSymbol(call.request.getSymbolOutput());

    if (call.request.getSymbolInput() == "EUR")
    {
        let output = await getOneElementFromList(call.request.getSymbolOutput());

        response.setResult(output.getRate() * call.request.getAmount());
        callback(null, response);

    }
    else if (call.request.getSymbolOutput() == "EUR")
    {
        let input = await getOneElementFromList(call.request.getSymbolInput());

        response.setResult((1 / input.getRate()) * call.request.getAmount());
        callback(null, response);
    }

    let currencyInput = await getOneElementFromList(call.request.getSymbolInput());

    let currencyOutput = await getOneElementFromList(call.request.getSymbolOutput());

    let result = (currencyOutput.getRate() / currencyInput.getRate()) * call.request.getAmount();

    response.setResult(result);

    callback(null, response);
}

async function getOneElementFromList(symbol){

    let currency = new messages.Currency();

    let list = await parseList();

    for(let item of list){
        if(symbol === item.array[0]){
            currency.setSymbol(item.array[0]);
            currency.setRate(item.array[1]);
        }
    }

    return currency;
}

async function getData(url) {
    const response = await fetch(url);

    return response.text();
}

async function parseList() {

    let source = await getData(URL);

    const dom = new JSDOM(source);

    let cube = dom.window.document.getElementsByTagName('Cube');

    let data = new Array();

    for (let u = 2; u < cube.length; u++) {

        //const subject = data.find(subject => subject.id === 1);

        let currency = new messages.Currency();

        currency.setSymbol(cube[u].attributes[0].value);
        currency.setRate(cube[u].attributes[1].value)

        data.push(currency);
    }

    return data;
}

/**
 * Starts an RPC server that receives requests for the Currency Converter service
 */
function main() {
    let server = new grpc.Server();

    let credentials = grpc.ServerCredentials.createSsl(
        fs.readFileSync('certs/server.pem'), [{
            cert_chain: fs.readFileSync('certs/server.crt'),
            private_key: fs.readFileSync('certs/server.key')
        }], false);

    server.addService(services.CurrencyConverterService, { 
        listOfCurrencies : listOfCurrencies, 
        currencyPerSymbol : currencyPerSymbol, 
        calculatingCrossCurrency : calculatingCrossCurrency
    });

    server.bindAsync(`${HOST}:${PORT}`, credentials, () => {
        server.start();
    });
}

main();
