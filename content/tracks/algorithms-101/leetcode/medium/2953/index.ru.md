```python
class Solution:
    def countCompleteSubstrings(self, word: str, k: int) -> int:
        def f(s: str) -> int:
            m = len(s)
            res = 0
            for i in range(1, 27):
                l = i * k
                if l > m:
                    break
                cnt = Counter(s[:l])
                freq = Counter(cnt.values())
                res += freq[k] == i
                for j in range(l, m):
                    freq[cnt[s[j]]] -= 1
                    cnt[s[j]] += 1
                    freq[cnt[s[j]]] += 1

                    freq[cnt[s[j - l]]] -= 1
                    cnt[s[j - l]] -= 1
                    freq[cnt[s[j - l]]] += 1

                    res += freq[k] == i
            return res

        n = len(word)
        res = i = 0
        while i < n:
            j = i + 1
            while j < n and abs(ord(word[j]) - ord(word[j - 1])) <= 2:
                j += 1
            res += f(word[i:j])
            i = j
        return res

```
