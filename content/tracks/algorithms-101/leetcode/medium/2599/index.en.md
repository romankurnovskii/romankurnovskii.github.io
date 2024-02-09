```python
class Solution:
    def makePrefSumNonNegative(self, nums: List[int]) -> int:
        h = []
        res = s = 0
        for x in nums:
            s += x
            if x < 0:
                heappush(h, x)
            while s < 0:
                s -= heappop(h)
                res += 1
        return res

```
