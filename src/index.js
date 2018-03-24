function sum (a, b) {
    if (Array.isArray(a)) {
        return a.reduce(function (prev, curr) {
            return prev + curr;   
        });
    }

    return a + b;
}

function sub (a, b) {
    return a - b;
}

function mult (a, b) {
    return a * b;
}

function div (a, b) {
    return a / b;
}

exports.sum = sum;
exports.sub = sub;
exports.mult = mult;
exports.div = div;
