```python
class Solution:
    def distributeCandies(self, n: int, limit: int) -> int:
        if n > 3 * limit:
            return 0
        res = comb(n + 2, 2)
        if n > limit:
            res -= 3 * comb(n - limit + 1, 2)
        if n - 2 >= 2 * limit:
            res += 3 * comb(n - 2 * limit, 2)
        return res

```
