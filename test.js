function convertToBinary(x) {
    var res = [];
    for (var v = x; v != 0; v = Math.floor(v / 2)) {
        res.push(v & 0x1);
    }
    return res;
}

console.log(convertToBinary(254));