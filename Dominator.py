Find an index of an array such that its value occurs at more than half of indices in the array.
https://app.codility.com/programmers/lessons/8-leader/dominator/
  
import math

def solution(A):
    # write your code in Python 3.6
    candidate = -1
    idx = -1
    count = 0
    
    for i in range(0, len(A)):
        if count == 0:
            candidate = A[i]
            idx = i
            count += 1
        else:
            if A[i] == candidate:
                count += 1
            else:
                count -= 1
    
    if len([j for j in A if j == candidate]) <= len(A)//2:
        return -1
    else:
        return idx

  





