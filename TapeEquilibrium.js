Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    if (A.length == 2){
        return Math.abs(A[0]-A[1]);
    }
    
    var diffArr = [];
    var sum1 = [];
    sum1[0] = A[0];
    var sum2 = [];
    sum2[A.length-2] = A[A.length-1];
    var cur = Number.MAX_SAFE_INTEGER;
    var min = Number.MAX_SAFE_INTEGER;

    for (var i = 1; i <= A.length - 2; i++){
        sum1[i] = A[i] + sum1[i-1];
        sum2[A.length-i-2] = A[A.length-i-1] + sum2[A.length-i-1];
    }

    for (var j = 0; j <=sum1.length-1; j++){
        cur = Math.abs(sum1[j]-sum2[j]);
        console.log(cur);
        min = Math.min(min, cur);
    }

    return min

}
