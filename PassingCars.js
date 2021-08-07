Count the number of passing cars on the road.
https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var numOfOnes = 0;
    var numOfPairs = 0;

    for(var i = A.length-1; i >= 0; i--){
        if(A[i] == 1){
            numOfOnes += 1;
        }else{
            numOfPairs += numOfOnes;
        }

        if (numOfPairs > 1000000000){
            numOfPairs = -1;
            break;
        }
    }

    return numOfPairs;
    
}
