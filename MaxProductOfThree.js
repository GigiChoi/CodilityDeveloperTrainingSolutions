Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).
https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var sorted = A.sort(function(a, b){return a-b});
    var maxProduct = Math.max(sorted[0]*sorted[1]*sorted[sorted.length-1], 
                    sorted[sorted.length-3]*sorted[sorted.length-2]*sorted[sorted.length-1]);
    return maxProduct;
}
