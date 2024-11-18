def solution(arr1, arr2):
    if len(arr1) > len(arr2):
        return 1
    elif len(arr1) < len(arr2):
        return -1
    # 길이가 같을 경우 합 비교
    sum1 = sum(arr1)
    sum2 = sum(arr2)
    if sum1 > sum2:
        return 1
    elif sum1 < sum2:
        return -1
    # 길이와 합이 모두 같으면 0 반환
    return 0