---
title: Сниппеты Python
description: Сниппеты Python
toc: true
tags:  ["python"]
series: ['cheatsheet']
categories: [Python]
date: "2022-06-16"
featuredImage:
draft: false
---


### Дата

#### Текущая

```python
import datetime
x = datetime.datetime.now() # 2022-08-04 21:41:24.871910
```

#### Формат `YYYY-MM-DD`

```python
import datetime
x = datetime.datetime.now().strftime("%Y-%m-%d") # 2022-08-04
```

### Создать папку
```python
import os
if not os.path.exists(name):
  os.makedirs(name)
```

### Поиск наиболее часто встречаемого значения в списке

```python
import collections
x = [1, 2, 7, 4, 5, 6, 7, 10]
print(collections.Counter(x).most_common(1)[0][0]) # 7
```

```python
def most_freq(list):
    return max(set(list), key=list.count)

test = [10, 10, 20, 20, 10, 30, 30, 30, 20, 10]
print(most_freq(test)) # 10
```

### Случайное целое число

```python
import random
x = random.randint(1, 10) # 9
```

### Одновременная проверка нескольких флагов в Python

```python
x, y, z = 0, 1, 0

if x == 1 or y == 1 or z == 1:
    print('passed')

if 1 in (x, y, z):
    print('passed')

# These only test for truthiness:
if x or y or z:
    print('passed')

if any((x, y, z)):
    print('passed')
```

## Ссылки

