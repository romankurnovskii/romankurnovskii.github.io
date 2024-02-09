```python
class Solution:
    def minLengthAfterRemovals(self, nums: List[int]) -> int:
        cnt = Counter(nums)
        pq = [-x for x in cnt.values()]
        heapify(pq)
        res = len(nums)
        while len(pq) > 1:
            x, y = -heappop(pq), -heappop(pq)
            x -= 1
            y -= 1
            if x > 0:
                heappush(pq, -x)
            if y > 0:
                heappush(pq, -y)
            res -= 2
        return res

```
