Find the maximum number of flags that can be set on mountain peaks.
https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/flags/

import math

def solution(A):
    # write your code in Python 3.6
    peak = []
    
    for i in range(1, len(A)-1):
        if A[i-1] < A[i] and A[i] > A[i+1]:
            peak.append(i)
            
    if len(peak) <= 1:
        return len(peak)
  
    maxflag = math.ceil(math.sqrt(peak[-1] - peak[0])) 
    flagplaced = 2
    
    for i in range(maxflag, 0, -1):
    
        startindex = 0
        endindex = len(peak)-1
        startflag = peak[startindex]
        endflag = peak[endindex]
        
        while startindex < endindex:
            startindex += 1
            endindex -= 1
            if startflag + i <= peak[startindex]:
                if peak[startindex] <= endflag - i:
                    flagplaced += 1
                    startflag = peak[startindex]
                
                    
            if endflag - i >= peak[endindex]:
                if peak[endindex] <= endflag - i:
                    flagplaced += 1
                    endflag = peak[endindex]
                   

            if flagplaced == i:
                return i
            
    return 0
    
