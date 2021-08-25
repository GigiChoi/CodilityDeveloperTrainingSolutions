Find the index S such that the leaders of the sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N - 1] are the same.
https://app.codility.com/programmers/lessons/8-leader/equi_leader/
  
def solution(A):
    # write your code in Python 3.6
    
    candidate = None
    count = 0
    
    for i in A:
        if count == 0:
            candidate = i
            count += 1
        else:
            if i == candidate:
                count += 1
            else:
                count -= 1

    leader_count = len([j for j in A if j == candidate])             
    if  leader_count <= len(A)//2:
        return 0
    else:
        leader = candidate 
        equileader = 0
        count_so_far = 0
        for i in range(0, len(A)):
            if A[i] == leader:
                count_so_far += 1
            if count_so_far > (i+1)//2 and leader_count-count_so_far > (len(A)-i-1)//2:
                equileader += 1
        return equileader
