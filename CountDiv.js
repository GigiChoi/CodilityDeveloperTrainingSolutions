Compute number of integers divisible by k in range [a..b].
https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    return Math.floor(B/K) - Math.floor(A/K) + (A % K == 0 ? 1 : 0);
}
