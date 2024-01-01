```python
class Solution:
    def findMissingAndRepeatedValues(self, grid: List[List[int]]) -> List[int]:
        n = len(grid)
        cnt = [0] * (n * n + 1)
        for row in grid:
            for v in row:
                cnt[v] += 1
        res = [0] * 2
        for i in range(1, n * n + 1):
            if cnt[i] == 2:
                res[0] = i
            if cnt[i] == 0:
                res[1] = i
        return res

```
