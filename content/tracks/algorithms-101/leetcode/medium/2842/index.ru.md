```python
class Solution:
    def countKSubsequencesWithMaxBeauty(self, s: str, k: int) -> int:
        f = Counter(s)
        if len(f) < k:
            return 0
        mod = 10**9 + 7
        vs = sorted(f.values(), reverse=True)
        val = vs[k - 1]
        x = vs.count(val)
        res = 1
        for v in vs:
            if v == val:
                break
            k -= 1
            res = res * v % mod
        res = res * comb(x, k) * pow(val, k, mod) % mod
        return res

```
