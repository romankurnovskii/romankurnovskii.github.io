```python
class Solution:
    def minimumPushes(self, word: str) -> int:
        n = len(word)
        res, k = 0, 1
        for _ in range(n // 8):
            res += k * 8
            k += 1
        res += k * (n % 8)
        return res

```
