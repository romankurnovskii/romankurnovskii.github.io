```python
class Solution:
    def matrixSumQueries(self, n: int, queries: List[List[int]]) -> int:
        row = set()
        col = set()
        res = 0
        for t, i, v in queries[::-1]:
            if t == 0:
                if i not in row:
                    res += v * (n - len(col))
                    row.add(i)
            else:
                if i not in col:
                    res += v * (n - len(row))
                    col.add(i)
        return res

```
