const reducer = (accumulator, currentValue) => accumulator * currentValue;

module.exports = (params, channel, response) => response(null, params.reduce(reducer));
