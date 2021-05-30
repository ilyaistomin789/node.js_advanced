module.exports = (params) => {
    if (!Array.isArray(params)) {
        throw new Error('An array is expected');
    }
    if (params.length !== 2) {
        throw new Error('Two numbers are expected');
    }
    if (!isFinite(params[0]) || !isFinite(params[1])){
        throw new Error('Expected numbers');
    }
    return params;
}
