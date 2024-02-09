```python
class Solution:
    def maxDivScore(self, nums: List[int], divisors: List[int]) -> int:
        res, mx = divisors[0], 0
        for div in divisors:
            cnt = sum(x % div == 0 for x in nums)
            if mx < cnt:
                mx, res = cnt, div
            elif mx == cnt and res > div:
                res = div
        return res

```
