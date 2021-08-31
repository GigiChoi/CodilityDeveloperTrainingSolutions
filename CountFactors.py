Count factors of given number n.
https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/count_factors/
  
  
def solution(N):
    # write your code in Python 3.6
    candidate = 1
    num_of_factors = 0
    
    while candidate * candidate < N:
        if N % candidate == 0:
            num_of_factors += 2
        candidate += 1
        
    if candidate * candidate == N:
        num_of_factors += 1
        
    return num_of_factors
