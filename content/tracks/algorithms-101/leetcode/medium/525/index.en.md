```python
class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        s = res = 0
        mp = {0: -1}
        for i, v in enumerate(nums):
            s += 1 if v == 1 else -1
            if s in mp:
                res = max(res, i - mp[s])
            else:
                mp[s] = i
        return res

```
