```python
class Solution:
    def minimumSeconds(self, nums: List[int]) -> int:
        d = defaultdict(list)
        for i, x in enumerate(nums):
            d[x].append(i)
        res = inf
        n = len(nums)
        for idx in d.values():
            t = idx[0] + n - idx[-1]
            for i, j in pairwise(idx):
                t = max(t, j - i)
            res = min(res, t // 2)
        return res

```
