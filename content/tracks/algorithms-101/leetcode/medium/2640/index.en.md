```python
class Solution:
    def findPrefixScore(self, nums: List[int]) -> List[int]:
        n = len(nums)
        res = [0] * n
        mx = 0
        for i, x in enumerate(nums):
            mx = max(mx, x)
            res[i] = x + mx + (0 if i == 0 else res[i - 1])
        return res

```
