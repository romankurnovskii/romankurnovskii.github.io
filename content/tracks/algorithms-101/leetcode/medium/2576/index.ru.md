```python
class Solution:
    def maxNumOfMarkedIndices(self, nums: List[int]) -> int:
        nums.sort()
        n = len(nums)
        i, j = 0, (n + 1) // 2
        res = 0
        while j < n:
            while j < n and nums[i] * 2 > nums[j]:
                j += 1
            if j < n:
                res += 2
            i, j = i + 1, j + 1
        return res

```
