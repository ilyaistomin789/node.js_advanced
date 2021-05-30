const JsonRpcServer = require('jsonrpc-server-http-nats');
const ArgumentsValidatorService = require('./services/argumentsValidatorService');
const SumArgumentsService = require('./services/sumArgumentsService');
const MulArgumentsService = require('./services/mulArgumentsService');
const ParamsValidatorService = require('./services/paramsValidatorService');
const DivParamsService = require('./services/divParamsService');
const ProcParamsService = require('./services/procParamsService');

const server = new JsonRpcServer();

server.on('sum', ArgumentsValidatorService, SumArgumentsService);
server.on('mul', ArgumentsValidatorService, MulArgumentsService);
server.on('div', ParamsValidatorService, DivParamsService)
server.on('proc', ParamsValidatorService, ProcParamsService);

server.listenHttp({host: 'localhost', port: 3000});
