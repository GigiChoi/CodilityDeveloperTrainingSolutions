Find the minimal nucleotide from a range of sequence DNA.
https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    var answer = [];
    var tempArr = [];
    var tempMin = 0;

    for(var i = 0; i <= P.length-1; i++){
        tempArr = S.slice(P[i], Q[i]+1);
        if (tempArr.includes('A')){
            answer.push(1);
        }else if(tempArr.includes('C')){
            answer.push(2);
        }else if (tempArr.includes('G')){
            answer.push(3);
        }else{
            answer.push(4);
        }
    }
    
    return answer;

}
