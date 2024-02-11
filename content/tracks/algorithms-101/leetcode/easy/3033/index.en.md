---
featuredImage: https://picsum.photos/700/190?grayscale
weight: 3033
---


```python
class Solution:
    def modifiedMatrix(self, matrix: List[List[int]]) -> List[List[int]]:
        rows = len(matrix)
        cols = len(matrix[0])
        for j in range(rows):
            max_val = max(matrix[i][j] for i in range(cols))
            for i in range(cols):
                if matrix[i][j] == -1:
                    matrix[i][j] = max_val
        return matrix
```
