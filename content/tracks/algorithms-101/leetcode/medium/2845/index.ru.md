```python
class Solution:
    def countInterestingSubarrays(self, nums: List[int], modulo: int, k: int) -> int:
        arr = [int(x % modulo == k) for x in nums]
        cnt = Counter()
        cnt[0] = 1
        res = s = 0
        for x in arr:
            s += x
            res += cnt[(s - k) % modulo]
            cnt[s % modulo] += 1
        return res

```
