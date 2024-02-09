```python
class Solution:
    def maximumSubarraySum(self, nums: List[int], k: int) -> int:
        res = -inf
        p = {nums[0]: 0}
        s, n = 0, len(nums)
        for i, x in enumerate(nums):
            s += x
            if x - k in p:
                res = max(res, s - p[x - k])
            if x + k in p:
                res = max(res, s - p[x + k])
            if i + 1 < n and (nums[i + 1] not in p or p[nums[i + 1]] > s):
                p[nums[i + 1]] = s
        return 0 if res == -inf else res

```
