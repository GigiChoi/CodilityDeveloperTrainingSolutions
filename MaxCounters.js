Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.
https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)

    if(A.every(e => e==N+1){
       return new Array(N).fill(0);
    }
    var counter = new Array(N+1).fill(0);
    var maxi = 0;
    
    for (var i = 0; i <= A.length - 1; i++){
        if (A[i] == N+1){
            counter.fill(maxi);
        } else{
            counter[A[i]] = counter[A[i]] + 1;
            maxi = Math.max(counter[A[i]], maxi);
        }
    }

    return counter.slice(1);
    
}
