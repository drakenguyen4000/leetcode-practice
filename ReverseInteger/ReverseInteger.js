const x = 123;

var reverse = function(x) {
 const revNum = parseInt(Math.abs(x).toString().split("").reverse().join("")) * Math.sign(x);
    //Checks num outside 32bit integer [-2^31, 2^31 - 1]
    if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) return 0;
    return revNum;
}