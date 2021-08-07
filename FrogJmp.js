Count minimal number of jumps from position X to Y.
https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var countTrue = new Array(X+1).fill(false);
    countTrue[0] = true;
    var steps = X;
    
    for (var i = 0; i <= A.length-1; i++){
        if (countTrue[A[i]] == false){
            countTrue[A[i]] = true;
            steps--;
        }
      
        if (!steps){
            return i;
        }
    }

    return -1;

}
