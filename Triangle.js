Determine whether a triangle can be built from a given set of edges.
https://app.codility.com/programmers/lessons/6-sorting/triangle/


function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length < 3){
        return 0;
    }

    var sorted = A.sort((a,b) => a-b);
    var res = 0;

    for (var i = 0; i <= sorted.length-2; i++){
        if(sorted[i] >= 0 && sorted[i] + sorted[i+1] > sorted[i+2]){
            res = 1;
            break;
        }
    }

    return res;

}
