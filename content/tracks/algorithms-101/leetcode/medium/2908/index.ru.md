```python
class Solution:
    def minimumSum(self, nums: List[int]) -> int:
        n = len(nums)
        right = [inf] * (n + 1)
        for i in range(n - 1, -1, -1):
            right[i] = min(right[i + 1], nums[i])
        res = left = inf
        for i, x in enumerate(nums):
            if left < x and right[i + 1] < x:
                res = min(res, left + x + right[i + 1])
            left = min(left, x)
        return -1 if res == inf else res

```
