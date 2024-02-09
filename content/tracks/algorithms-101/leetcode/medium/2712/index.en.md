```python
class Solution:
    def minimumCost(self, s: str) -> int:
        res, n = 0, len(s)
        for i in range(1, n):
            if s[i] != s[i - 1]:
                res += min(i, n - i)
        return res

```
