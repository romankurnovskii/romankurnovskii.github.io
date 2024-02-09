```python
class Solution:
    def maximumCostSubstring(self, s: str, chars: str, vals: List[int]) -> int:
        d = {c: v for c, v in zip(chars, vals)}
        res = f = 0
        for c in s:
            v = d.get(c, ord(c) - ord('a') + 1)
            f = max(f, 0) + v
            res = max(res, f)
        return res

```
