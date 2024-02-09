```python
class Solution:
    def sumDistance(self, nums: List[int], s: str, d: int) -> int:
        mod = 10**9 + 7
        for i, c in enumerate(s):
            nums[i] += d if c == "R" else -d
        nums.sort()
        res = s = 0
        for i, x in enumerate(nums):
            res += i * x - s
            s += x
        return res % mod

```
