Find the earliest time when a frog can jump to the other side of a river.
https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/

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
