Compute the number of intersections in a sequence of discs.
https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var leftBorder = A.map((currElement, index) => {return index - currElement;});
    var leftBorder = leftBorder.sort((a,b) => {return a-b});
    
    var rightBorder = A.map((currentElement, index) => {return index + currentElement});
    var rightBorder = rightBorder.sort((a,b) => {return a-b});
    
    var counter = 0;
    var j = 0;

    for (var i = 0; i <= rightBorder.length-1; i++){
        while(j <= A.length && leftBorder[j] <= rightBorder[i]){
            counter += j-i;
            j++;
        }

        if (counter >= 10000000){
            return -1
        }
    }
    return counter;

}
