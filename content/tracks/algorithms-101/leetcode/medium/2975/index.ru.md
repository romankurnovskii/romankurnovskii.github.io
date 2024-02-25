```python
class Solution:
    def maximizeSquareArea(
        self, m: int, n: int, hFences: List[int], vFences: List[int]
    ) -> int:
        def f(nums: List[int], k: int) -> Set[int]:
            nums.extend([1, k])
            nums.sort()
            return {b - a for a, b in combinations(nums, 2)}

        mod = 10**9 + 7
        hs = f(hFences, m)
        vs = f(vFences, n)
        res = max(hs & vs, default=0)
        return res**2 % mod if res else -1

```
