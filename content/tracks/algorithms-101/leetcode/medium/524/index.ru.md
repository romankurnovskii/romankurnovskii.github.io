```python
class Solution:
    def findLongestWord(self, s: str, dictionary: List[str]) -> str:
        def check(a, b):
            m, n = len(a), len(b)
            i = j = 0
            while i < m and j < n:
                if a[i] == b[j]:
                    j += 1
                i += 1
            return j == n

        res = ''
        for a in dictionary:
            if check(s, a) and (len(res) < len(a) or (len(res) == len(a) and res > a)):
                res = a
        return res

```
