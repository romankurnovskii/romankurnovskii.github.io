```python
mod = 10**9 + 7
mx = 10**5
fac = [1] * (mx + 1)
for i in range(2, mx + 1):
    fac[i] = fac[i - 1] * i % mod


class Solution:
    def numberOfSequence(self, n: int, sick: List[int]) -> int:
        nums = [b - a - 1 for a, b in pairwise([-1] + sick + [n])]
        res = 1
        s = sum(nums)
        res = fac[s]
        for x in nums:
            if x:
                res = res * pow(fac[x], mod - 2, mod) % mod
        for x in nums[1:-1]:
            if x > 1:
                res = res * pow(2, x - 1, mod) % mod
        return res

```
