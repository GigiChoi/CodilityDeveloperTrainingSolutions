Find the missing element in a given permutation.
https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var n = A.length;
    var sum = A.reduce((a, b) => a+b);
    return ((n+1) * (n+2))/2 - sum;
}
