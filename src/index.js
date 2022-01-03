module.exports = function reverse(n) {
    n = String(n);
    (n[0] === "-") ? n = n.slice(1): n
    let result = '';
    for (let i = n.length - 1; i >= 0; i--) {
        result += n[i]
    }
    return +result;
}