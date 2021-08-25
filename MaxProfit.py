Given a log of stock prices compute the maximum possible earning.
https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_profit/


def solution(A):
    
    if len(A) == 0 or len(A) == 1:
        return 0
    
    max_price = A[-1]
    max_profit = 0
    
    for i in range(len(A)-2, -1, -1):
        max_profit = max(max_profit, max_price-A[i])
        max_price = max(max_price, A[i])
        
    return max_profit   
