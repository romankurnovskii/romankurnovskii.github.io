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

[LeetCode задача 3030](https://leetcode.com/problems/find-the-grid-of-region-average/description/)

Дана матрица `m x n`, представляющая изображение в оттенках серого, где `image[i][j]` представляет пиксель с интенсивностью в диапазоне от 0 до 255. Также дано неотрицательное целое число threshold (пороговое значение).

Два пикселя `image[a][b]` и `image[c][d]` считаются соседними, если `|a - c| + |b - d| == 1`.

Регионом считается матрица 3 x 3, где абсолютная разница в интенсивности между любыми двумя соседними пикселями меньше или равна threshold.

Необходимо вычислить матрицу `m x n result`, где `result[i][j]` - это средняя интенсивность региона, к которому принадлежит `image[i][j]`, округленная вниз до ближайшего целого числа. Если `image[i][j]` принадлежит нескольким регионам, `result[i][j]` является средним из округленных средних интенсивностей этих регионов, округленным вниз до ближайшего целого. Если `image[i][j]` не принадлежит ни к одному региону, `result[i][j]` равно `image[i][j]`.

## Подход

Решение этой задачи можно упростить, разбив его на вспомогательные функции.

Определение принадлежности к региону: Напишем функцию, которая будет проверять, удовлетворяет ли `3x3` матрица условиям региона с учетом порога `threshold`.

Расчет среднего значения региона: Создадим функцию для расчета среднего значения интенсивности пикселей в регионе.

Агрегация данных: Интегрируем обе функции в основной алгоритм, который будет перебирать все возможные `3x3` матрицы, проверять их на соответствие критериям региона и, в случае успеха, рассчитывать среднее значение для пикселей этого региона.

```python
class Solution:
    def isRegion(self, image, i, j, threshold):
        # Проверка, удовлетворяет ли матрица условиям региона
        pass

    def calculateRegionAverage(self, image, i, j):
        # Расчет среднего значения интенсивности пикселей в регионе
        pass

    def resultGrid(self, image, threshold):
        n, m = len(image), len(image[0])
        ans = [[0] * m for _ in range(n)]
        # Основной алгоритм обхода и агрегации
        pass

        return ans
```

## Решение

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
