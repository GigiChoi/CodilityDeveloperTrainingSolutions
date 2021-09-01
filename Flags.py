Find the maximum number of flags that can be set on mountain peaks.
https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/flags/

def solution(A):
    # write your code in Python 3.6
    peak = []
    
    for i in range(1, len(A)-1):
        if A[i-1] < A[i] and A[i] > A[i+1]:
            peak.append(i)
        
    number_of_flags = len(peak)
    distance = peak[-1] - peak[0] + 1
    
    while number_of_flags > 0:
        if distance / number_of_flags < number_of_flags:
            number_of_flags -= 1
        else:
            break
    
    return number_of_flags
