```python
class Solution:
    def maximumOr(self, nums: List[int], k: int) -> int:
        n = len(nums)
        suf = [0] * (n + 1)
        for i in range(n - 1, -1, -1):
            suf[i] = suf[i + 1] | nums[i]
        res = pre = 0
        for i, x in enumerate(nums):
            res = max(res, pre | (x << k) | suf[i + 1])
            pre |= x
        return res

```
