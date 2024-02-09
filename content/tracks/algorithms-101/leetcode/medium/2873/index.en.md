```python
class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        res = mx = mx_diff = 0
        for num in nums:
            res = max(res, mx_diff * num)
            mx = max(mx, num)
            mx_diff = max(mx_diff, mx - num)
        return res

```
