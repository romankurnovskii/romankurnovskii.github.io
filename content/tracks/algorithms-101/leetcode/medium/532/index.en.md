```python
class Solution:
    def findPairs(self, nums: List[int], k: int) -> int:
        vis, res = set(), set()
        for v in nums:
            if v - k in vis:
                res.add(v - k)
            if v + k in vis:
                res.add(v)
            vis.add(v)
        return len(res)

```
