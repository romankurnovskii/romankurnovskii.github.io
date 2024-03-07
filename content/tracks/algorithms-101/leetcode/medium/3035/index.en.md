```python
class Solution:
    def maxPalindromesAfterOperations(self, words: List[str]) -> int:
        s = mask = 0
        for w in words:
            s += len(w)
            for c in w:
                mask ^= 1 << (ord(c) - ord("a"))
        s -= mask.bit_count()
        words.sort(key=len)
        res = 0
        for w in words:
            s -= len(w) // 2 * 2
            if s < 0:
                break
            res += 1
        return res

```
