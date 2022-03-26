// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var currency_converter_service_pb = require('./currency_converter_service_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_currencyconverter_CalculatingCrossCurrencyRequest(arg) {
  if (!(arg instanceof currency_converter_service_pb.CalculatingCrossCurrencyRequest)) {
    throw new Error('Expected argument of type currencyconverter.CalculatingCrossCurrencyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_currencyconverter_CalculatingCrossCurrencyRequest(buffer_arg) {
  return currency_converter_service_pb.CalculatingCrossCurrencyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_currencyconverter_CalculatingCrossCurrencyResponse(arg) {
  if (!(arg instanceof currency_converter_service_pb.CalculatingCrossCurrencyResponse)) {
    throw new Error('Expected argument of type currencyconverter.CalculatingCrossCurrencyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_currencyconverter_CalculatingCrossCurrencyResponse(buffer_arg) {
  return currency_converter_service_pb.CalculatingCrossCurrencyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_currencyconverter_CurrencyPerSymbolRequest(arg) {
  if (!(arg instanceof currency_converter_service_pb.CurrencyPerSymbolRequest)) {
    throw new Error('Expected argument of type currencyconverter.CurrencyPerSymbolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_currencyconverter_CurrencyPerSymbolRequest(buffer_arg) {
  return currency_converter_service_pb.CurrencyPerSymbolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_currencyconverter_CurrencyPerSymbolResponse(arg) {
  if (!(arg instanceof currency_converter_service_pb.CurrencyPerSymbolResponse)) {
    throw new Error('Expected argument of type currencyconverter.CurrencyPerSymbolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_currencyconverter_CurrencyPerSymbolResponse(buffer_arg) {
  return currency_converter_service_pb.CurrencyPerSymbolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_currencyconverter_ListOfCurrenciesResponse(arg) {
  if (!(arg instanceof currency_converter_service_pb.ListOfCurrenciesResponse)) {
    throw new Error('Expected argument of type currencyconverter.ListOfCurrenciesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_currencyconverter_ListOfCurrenciesResponse(buffer_arg) {
  return currency_converter_service_pb.ListOfCurrenciesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Currency Converter service definition
var CurrencyConverterService = exports.CurrencyConverterService = {
  // Get a List of available currencies
listOfCurrencies: {
    path: '/currencyconverter.CurrencyConverter/ListOfCurrencies',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: currency_converter_service_pb.ListOfCurrenciesResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_currencyconverter_ListOfCurrenciesResponse,
    responseDeserialize: deserialize_currencyconverter_ListOfCurrenciesResponse,
  },
  // Get only one specific currency 
currencyPerSymbol: {
    path: '/currencyconverter.CurrencyConverter/CurrencyPerSymbol',
    requestStream: false,
    responseStream: false,
    requestType: currency_converter_service_pb.CurrencyPerSymbolRequest,
    responseType: currency_converter_service_pb.CurrencyPerSymbolResponse,
    requestSerialize: serialize_currencyconverter_CurrencyPerSymbolRequest,
    requestDeserialize: deserialize_currencyconverter_CurrencyPerSymbolRequest,
    responseSerialize: serialize_currencyconverter_CurrencyPerSymbolResponse,
    responseDeserialize: deserialize_currencyconverter_CurrencyPerSymbolResponse,
  },
  // Calculating from currency X to currency Y
calculatingCrossCurrency: {
    path: '/currencyconverter.CurrencyConverter/CalculatingCrossCurrency',
    requestStream: false,
    responseStream: false,
    requestType: currency_converter_service_pb.CalculatingCrossCurrencyRequest,
    responseType: currency_converter_service_pb.CalculatingCrossCurrencyResponse,
    requestSerialize: serialize_currencyconverter_CalculatingCrossCurrencyRequest,
    requestDeserialize: deserialize_currencyconverter_CalculatingCrossCurrencyRequest,
    responseSerialize: serialize_currencyconverter_CalculatingCrossCurrencyResponse,
    responseDeserialize: deserialize_currencyconverter_CalculatingCrossCurrencyResponse,
  },
};

exports.CurrencyConverterClient = grpc.makeGenericClientConstructor(CurrencyConverterService);
