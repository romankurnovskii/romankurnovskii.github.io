```python
class Solution:
    def minIncrements(self, n: int, cost: List[int]) -> int:
        def dfs(i: int) -> int:
            if (i << 1) > n:
                return cost[i - 1]
            l, r = dfs(i << 1), dfs(i << 1 | 1)
            nonlocal res
            res += max(l, r) - min(l, r)
            return cost[i - 1] + max(l, r)

        res = 0
        dfs(1)
        return res

```
