```python
class Solution:
    def countTestedDevices(self, batteryPercentages: List[int]) -> int:
        res = 0
        for x in batteryPercentages:
            x -= res
            res += x > 0
        return res

```
