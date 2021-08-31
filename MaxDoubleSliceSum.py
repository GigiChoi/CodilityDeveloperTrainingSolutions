Find the maximal sum of any double slice.
https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_double_slice_sum/
  
import sys

def solution(A):
    # write your code in Python 3.6
    if len(A) <= 3:
        return 0
        
    arr_forward = [0] * len(A)
    arr_backward = [0] * len(A)
    
    for i in range(1, len(A)):
        arr_forward[i] = max(arr_forward[i-1]+A[i], 0)

    for j in range(len(A)-2, -1, -1):
        arr_backward[j] = max(arr_backward[j+1]+A[j], 0)
        
    maxsum = 0
    for k in range(1 , len(A)-1):
        maxsum = max(maxsum, arr_forward[k-1] + arr_backward[k+1])
        
    return maxsum
  
  
