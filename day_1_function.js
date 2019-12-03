// https://www.hackerrank.com/challenges/js10-function/problem

var fs = {};
function factorial(n){
    if(fs[n]){
        return fs[n];
    }

    if(n<2){
        return 1;
    }

    var r = n*factorial(n-1);
    fs[n]=r;
    return r;
}


// var two = factorial(2);
// console.log(2,two);
// 2 2

// var three=factorial(3);
// console.log(3,three);
// 3 6

// console.log("fs", fs);
// fs { '2': 2, '3': 6 }
