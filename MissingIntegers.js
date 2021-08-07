Find the smallest positive integer that does not occur in a given sequence.
https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var countSet = new Set(A);
    var missingMin = 1;
    for (var i = 1; i <= 1000000; i++){
        if (!countSet.has(i)){
            missingMin = i;
            break;
        }
    }

    return missingMin;
    
}
