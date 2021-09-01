Find the minimal perimeter of any rectangle whose area equals N.
https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/min_perimeter_rectangle/

import sys

def solution(N):
    # write your code in Python 3.6
  
    candidate = 1
    minperimeter = sys.maxsize
    
    while candidate * candidate < N:
        if N % candidate == 0:
            factor = N // candidate
            minperimeter = min(minperimeter, (factor+candidate)*2)
            
        candidate += 1
        
    if candidate * candidate == N:
        return candidate * 4
        
    return minperimeter
