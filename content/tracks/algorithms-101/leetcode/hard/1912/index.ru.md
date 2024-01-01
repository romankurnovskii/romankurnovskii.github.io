---
title: 1912. Design Movie Rental System
seoTitle: LeetCode 1912. Design Movie Rental System | Python solution and explanation
description: 1912. Design Movie Rental System
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1912
---

[LeetCode problem 1912](https://leetcode.com/problems/design-movie-rental-system/)

```python
from sortedcontainers import SortedList


class MovieRentingSystem:
    def __init__(self, n: int, entries: List[List[int]]):
        self.unrented = collections.defaultdict(SortedList)  # {movie: (price, shop)}
        self.shopAndMovieToPrice = {}  # {(shop, movie): price}
        self.rented = SortedList()  # (price, shop, movie)
        for shop, movie, price in entries:
            self.unrented[movie].add((price, shop))
            self.shopAndMovieToPrice[(shop, movie)] = price

    def search(self, movie: int) -> List[int]:
        return [shop for _, shop in self.unrented[movie][:5]]

    def rent(self, shop: int, movie: int) -> None:
        price = self.shopAndMovieToPrice[(shop, movie)]
        self.unrented[movie].remove((price, shop))
        self.rented.add((price, shop, movie))

    def drop(self, shop: int, movie: int) -> None:
        price = self.shopAndMovieToPrice[(shop, movie)]
        self.unrented[movie].add((price, shop))
        self.rented.remove((price, shop, movie))

    def report(self) -> List[List[int]]:
        return [[shop, movie] for _, shop, movie in self.rented[:5]]


# Your MovieRentingSystem object will be instantiated and called as such:
# obj = MovieRentingSystem(n, entries)
# param_1 = obj.search(movie)
# obj.rent(shop,movie)
# obj.drop(shop,movie)
# param_4 = obj.report()

```
