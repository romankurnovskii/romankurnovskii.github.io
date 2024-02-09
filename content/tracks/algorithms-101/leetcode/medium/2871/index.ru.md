```python
class Solution:
    def maxSubarrays(self, nums: List[int]) -> int:
        score, res = -1, 1
        for num in nums:
            score &= num
            if score == 0:
                score = -1
                res += 1
        return 1 if res == 1 else res - 1

```
