```python
class Solution:
    def minimumPushes(self, word: str) -> int:
        cnt = Counter(word)
        res = 0
        for i, x in enumerate(sorted(cnt.values(), reverse=True)):
            res += (i // 8 + 1) * x
        return res

```
