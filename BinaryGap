Find longest sequence of zeros in binary representation of an integer.
https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

function solution(N) {

    // write your code in JavaScript (Node.js 8.9.4)

    var maxGap = 0;
    var currentGap = 0;
    var binString = N.toString(2);
    var lastIndex = binString.length()-1;
    var indexOfOne = [];
    var index = 0;

    for (var i = lastIndex; i >= 0; i--){
        if(binString.toChar(i) == "1"){
            indexOfOne[index] = i;
            index++;
        }
    }

    for (var j = 0; j <= indexOfOne.length() - 2; j++){
        currentGap = Math.abs(indexOfOne[j] - indexOfOne[j+1]) - 1;
        maxGap = Math.max(maxGap, currentGap);
    }

    return maxGap;

}
