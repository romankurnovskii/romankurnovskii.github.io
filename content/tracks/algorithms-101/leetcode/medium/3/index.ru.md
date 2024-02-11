```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        ss = set()
        i = res = 0
        for j, c in enumerate(s):
            while c in ss:
                ss.remove(s[i])
                i += 1
            ss.add(c)
            res = max(res, j - i + 1)
        return res
```
