def minOperations(nums, x):
    total = sum(nums)
    target = total - x

    n = len(nums)
    curr_sum = 0
    max_len = -1

    left = 0

    for right in range(n):
        curr_sum += nums[right]

        while curr_sum > target and left < n:
            curr_sum -= nums[left]
            left += 1

        if curr_sum == target:
            max_len = max(max_len, right - left + 1)

    if max_len == -1:
        return -1
    return n - max_len


nums = [1, 1, 4, 2, 3]
x = 5
minOperations(nums, x)
