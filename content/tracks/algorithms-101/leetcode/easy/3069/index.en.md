```python
class Solution:
    def resultArray(self, nums: List[int]) -> List[int]:
        ar1 = [nums[0]]
        ar2 = [nums[1]]

        for x in nums[2:]:
            if ar1[-1] > ar2[-1]:
                ar1.append(x)
            else:
                ar2.append(x)
        return ar1 + ar2
```
