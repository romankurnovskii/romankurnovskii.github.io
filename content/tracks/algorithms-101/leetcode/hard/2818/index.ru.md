```python
def primeFactors(n):
    i = 2
    res = set()
    while i * i <= n:
        while n % i == 0:
            res.add(i)
            n //= i
        i += 1
    if n > 1:
        res.add(n)
    return len(res)


class Solution:
    def maximumScore(self, nums: List[int], k: int) -> int:
        mod = 10**9 + 7
        arr = [(i, primeFactors(x), x) for i, x in enumerate(nums)]
        n = len(nums)

        left = [-1] * n
        right = [n] * n
        stk = []
        for i, f, x in arr:
            while stk and stk[-1][0] < f:
                stk.pop()
            if stk:
                left[i] = stk[-1][1]
            stk.append((f, i))

        stk = []
        for i, f, x in arr[::-1]:
            while stk and stk[-1][0] <= f:
                stk.pop()
            if stk:
                right[i] = stk[-1][1]
            stk.append((f, i))

        arr.sort(key=lambda x: -x[2])
        res = 1
        for i, f, x in arr:
            l, r = left[i], right[i]
            cnt = (i - l) * (r - i)
            if cnt <= k:
                res = res * pow(x, cnt, mod) % mod
                k -= cnt
            else:
                res = res * pow(x, k, mod) % mod
                break
        return res

```
