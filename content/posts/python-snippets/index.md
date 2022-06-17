---
title: Сниппеты Python
description: Сниппеты Python
toc: true
authors:
  - roman-kurnovskii
tags:
  ["python"]
categories: ['шпаргалки']
series: ['шпаргалки']
date: "2022-06-16"
lastmod: "2022-06-07"
featuredImage:
draft: true
---


### Печать текущей даты
```python
import datetime
x = datetime.datetime.now()
print(x)
```

### Печать текущей даты в виде даты в формате `YYYY-MM-DD`
```python
import datetime
x = datetime.datetime.now().strftime("%Y-%m-%d")
print(x)
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
x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(collections.Counter(x).most_common(1)[0][0])
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
x = random.randint(1, 10)
print(x)
```

## Ссылки

