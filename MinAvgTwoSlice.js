Find the minimal average of any slice containing at least two elements.
https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/

var pos = 0;
var mini = Number.MAX_SAFE_INTEGER;

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    for (var i = 0; i <= A.length-2; i++){
        findMinAndMinPos((A[i]+A[i+1])/2, i);
        findMinAndMinPos((A[i]+A[i+1]+A[i+2])/3, i);
    }

    return pos;

}

function findMinAndMinPos(val, position){
    if(val < mini){
        mini = val;
        pos = position;
    }
}
