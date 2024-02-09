```python
class Solution:
    def findMaximalUncoveredRanges(
        self, n: int, ranges: List[List[int]]
    ) -> List[List[int]]:
        ranges.sort()
        last = -1
        res = []
        for l, r in ranges:
            if last + 1 < l:
                res.append([last + 1, l - 1])
            last = max(last, r)
        if last + 1 < n:
            res.append([last + 1, n - 1])
        return res

```
