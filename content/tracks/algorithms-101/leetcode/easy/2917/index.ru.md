```python
class Solution:
    def findKOr(self, nums: List[int], k: int) -> int:
        res = 0
        for i in range(32):
            cnt = sum(x >> i & 1 for x in nums)
            if cnt >= k:
                res |= 1 << i
        return res

```
