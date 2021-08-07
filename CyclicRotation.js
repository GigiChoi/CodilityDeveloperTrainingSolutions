Rotate an array to the right by a given number of steps.
https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    var numOfRotation = K % A.length;
    return A.slice(A.length - numOfRotation, A.length).concat(A.slice(0, A.length - numOfRotation));

}
