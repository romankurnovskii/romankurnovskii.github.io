---
title: 210. Course Schedule II
seoTitle: LeetCode 210. Course Schedule II | Решение на Python
description: LeetCode 210. Узнайте возможный порядок завершения курсов, учитывая их предварительные требования.
toc: true
tags: [Graph, Topological Sort, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-08-28
lastmod: 2023-08-28
featuredImage: https://picsum.photos/700/241?grayscale
weight: 210
---

[LeetCode задача 210](https://leetcode.com/problems/course-schedule-ii/)

## Задача

Вам дано \( n \) курсов для изучения, пронумерованных от \( 0 \) до \( n-1 \), и массив \( prerequisites \), где \( prerequisites[i] = [a, b] \) означает, что для изучения курса \( a \) предварительно необходимо пройти курс \( b \).

Напишите функцию для нахождения порядка, в котором можно пройти курсы. Если это невозможно, верните пустой массив.

## Подсказки

Топологическая сортировка может быть использована для решения этой задачи.

## Подход

1. Создадим граф, представляющий предварительные требования для каждого курса.
2. Применим топологическую сортировку для нахождения порядка курсов.

## Алгоритм

1. Инициализируем граф и массив для хранения входящих степеней всех вершин (курсов).
2. Заполним граф и массив входящих степеней, используя массив \( prerequisites \).
3. Используем алгоритм топологической сортировки для нахождения порядка курсов.

## Решение

```python
from collections import deque, defaultdict

def findOrder(numCourses, prerequisites):
    # Создаем граф и массив для хранения входящих степеней
    graph = defaultdict(list)
    indegree = [0] * numCourses
    
    # Заполняем граф и массив входящих степеней
    for course, prereq in prerequisites:
        graph[prereq].append(course)
        indegree[course] += 1
    
    # Инициализация очереди для вершин с нулевой входящей степенью
    queue = deque([i for i in range(numCourses) if indegree[i] == 0])
    
    # Топологическая сортировка
    order = []
    while queue:
        prereq = queue.popleft()
        order.append(prereq)
        
        for course in graph[prereq]:
            indegree[course] -= 1
            if indegree[course] == 0:
                queue.append(course)
    
    return order if len(order) == numCourses else []
```
