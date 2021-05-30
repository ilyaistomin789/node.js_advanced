module.exports = (arguments) => {
    let isNumber = true;
    if (!Array.isArray(arguments)) {
        throw new Error('An array is expected');
    }
    if (arguments.length < 2) {
        throw new Error('More than two numbers are expected');
    }
    for (const param in arguments) {
        if (!isFinite(param)) {
            isNumber = false;
        }
    }
    if (!isNumber) {
        throw new Error('Expected numbers');
    }
    return arguments;
}
