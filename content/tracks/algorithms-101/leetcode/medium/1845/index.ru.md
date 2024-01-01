---
title: 1845. Seat Reservation Manager
seoTitle: LeetCode 1845. Seat Reservation Manager | Python solution and explanation
description: 1845. Seat Reservation Manager
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1845
---

[LeetCode problem 1845](https://leetcode.com/problems/seat-reservation-manager/)

```python
class SeatManager:
    def __init__(self, n: int):
        self.q = list(range(1, n + 1))
        heapify(self.q)

    def reserve(self) -> int:
        return heappop(self.q)

    def unreserve(self, seatNumber: int) -> None:
        heappush(self.q, seatNumber)


# Your SeatManager object will be instantiated and called as such:
# obj = SeatManager(n)
# param_1 = obj.reserve()
# obj.unreserve(seatNumber)

```
