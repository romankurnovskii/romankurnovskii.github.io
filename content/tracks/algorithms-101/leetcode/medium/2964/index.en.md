```python
class Solution:
    def divisibleTripletCount(self, nums: List[int], d: int) -> int:
        cnt = defaultdict(int)
        res, n = 0, len(nums)
        for j in range(n):
            for k in range(j + 1, n):
                x = (d - (nums[j] + nums[k]) % d) % d
                res += cnt[x]
            cnt[nums[j] % d] += 1
        return res

```
