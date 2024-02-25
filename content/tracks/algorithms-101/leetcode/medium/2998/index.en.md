```python
class Solution:
    def minimumOperationsToMakeEqual(self, x: int, y: int) -> int:
        @cache
        def dfs(x: int) -> int:
            if y >= x:
                return y - x
            res = x - y
            res = min(res, x % 5 + 1 + dfs(x // 5))
            res = min(res, 5 - x % 5 + 1 + dfs(x // 5 + 1))
            res = min(res, x % 11 + 1 + dfs(x // 11))
            res = min(res, 11 - x % 11 + 1 + dfs(x // 11 + 1))
            return res

        return dfs(x)

```
