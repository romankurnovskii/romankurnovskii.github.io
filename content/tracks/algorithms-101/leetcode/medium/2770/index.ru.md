```python
class Solution:
    def maximumJumps(self, nums: List[int], target: int) -> int:
        @cache
        def dfs(i: int) -> int:
            if i == n - 1:
                return 0
            res = -inf
            for j in range(i + 1, n):
                if abs(nums[i] - nums[j]) <= target:
                    res = max(res, 1 + dfs(j))
            return res

        n = len(nums)
        res = dfs(0)
        return -1 if res < 0 else res

```
