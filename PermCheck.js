Check whether array A is a permutation.
https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var countSet = new Set(A);
    var isPerm = 1;
    for(var i = 1; i <= A.length; i++){
        if(!countSet.has(i)){
            isPerm = 0;
            break;
        }
    }
    return isPerm;
}
