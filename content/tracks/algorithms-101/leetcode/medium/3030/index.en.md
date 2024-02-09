---
title: 3030. Find the Grid of Region Average
description: 3030. Find the Grid of Region Average
authors:
categories: ['programming', 'leetcode']
tags: [Algorithms, Medium, LeetCode, Array, Matrix]
# series: null
# featuredImage: null
toc: false
date: 2024-02-10
lastMod: 2024-02-10
published: true
featuredImage: https://picsum.photos/700/241?grayscale
weight: 3030
---

[LeetCode problem 3030](https://leetcode.com/problems/find-the-grid-of-region-average/description/)

```python
class Solution:
    def isRegion(self, image, x, y, threshold):
        for i in range(x, x + 3):
            for j in range(y, y + 3):
                if i > x and abs(image[i][j] - image[i-1][j]) > threshold: return False
                if j > y and abs(image[i][j] - image[i][j-1]) > threshold: return False
        return True
    
    def calculateRegionAverage(self, image, x, y):
        total = sum(image[i][j] for i in range(x, x + 3) for j in range(y, y + 3))
        return total // 9
    
    def resultGrid(self, image, threshold):
        n, m = len(image), len(image[0])
        result = [[image[i][j] for j in range(m)] for i in range(n)]
        
        for i in range(n - 2):
            for j in range(m - 2):
                if self.isRegion(image, i, j, threshold):
                    avg = self.calculateRegionAverage(image, i, j)
                    for k in range(3):
                        for l in range(3):
                            # Accumulate averages for overlapping regions
                            if 'avg_count' not in locals():
                                avg_count = [[0] * m for _ in range(n)]
                                sums = [[0] * m for _ in range(n)]
                            avg_count[i+k][j+l] += 1
                            sums[i+k][j+l] += avg
        
        # Calculate final averages for each cell
        if 'avg_count' in locals():
            for i in range(n):
                for j in range(m):
                    if avg_count[i][j] > 0:
                        result[i][j] = sums[i][j] // avg_count[i][j]
        
        return result
```
