# grpc-node-server

## Getting Started

1. `npm install`
2. `npm start`

## Generate stubs
Used static code generation

Generate your Stubs with `grpc_tools_node_protoc --js_out=import_style=commonjs,binary:.  --grpc_out=grpc_js:. currency_converter_service.proto`

## Docker

1. `docker build -t car-rental-converter .`
2. `docker run --name car-rental-converter -d -p 50051:50051 car-rental-converter`

## Postman

works only if you add the certificate to your workspace
