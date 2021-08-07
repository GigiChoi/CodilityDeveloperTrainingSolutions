Compute number of distinct values in an array.
https://app.codility.com/programmers/lessons/6-sorting/distinct/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var counter = new Set();

    for (var i = 0; i <= A.length-1; i++){
        counter.add(A[i]);
    }

    return counter.size;

}
