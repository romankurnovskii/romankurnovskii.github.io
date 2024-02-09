```python
class Solution:
    def distance(self, nums: List[int]) -> List[int]:
        d = defaultdict(list)
        for i, x in enumerate(nums):
            d[x].append(i)
        res = [0] * len(nums)
        for idx in d.values():
            left, right = 0, sum(idx) - len(idx) * idx[0]
            for i in range(len(idx)):
                res[idx[i]] = left + right
                if i + 1 < len(idx):
                    left += (idx[i + 1] - idx[i]) * (i + 1)
                    right -= (idx[i + 1] - idx[i]) * (len(idx) - i - 1)
        return res

```
