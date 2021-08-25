Find a maximum sum of a compact subsequence of array elements.
https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/
  
  
import sys

def solution(A):
    # write your code in Python 3.6
    if len(A) == 1:
        return A[0]
        
    arr = []
    arr.append(A[0])
    
    for i in range(1, len(A)):
        arr.append(max(arr[i-1]+A[i], A[i]))
        
    return max(arr)
  
