```python
class Solution:
    def maximumCoins(
        self, heroes: List[int], monsters: List[int], coins: List[int]
    ) -> List[int]:
        m = len(monsters)
        idx = sorted(range(m), key=lambda i: monsters[i])
        s = list(accumulate((coins[i] for i in idx), initial=0))
        res = []
        for h in heroes:
            i = bisect_right(idx, h, key=lambda i: monsters[i])
            res.append(s[i])
        return res

```
