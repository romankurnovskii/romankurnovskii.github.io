---
title: SMA - Простая скользящая средняя
seoTitle: SMA
description: SMA
toc: true
tags: []
series: []
categories: []
date: 2023-06-13
lastmod: 2023-06-13
featuredImage:
authors:
prerequisites: []
---

SMA (Simple Moving Average) - Простая скользящая средняя

Вычисляет среднее арифметическое на выбранном отрезке.

Удобно использовать одновременно на короткий и длинный отрезок.

Например короткий период 50 дней, длинный 200 дней.

```python
short_period = 50
long_period = 200
sma(short_period, long_period)
```

Тенденция: Когда 50-дневная SMA находится выше 200-дневной SMA, это может указывать на продолжающийся восходящий тренд. И наоборот, если 50-дневная SMA находится ниже 200-дневной SMA, это может свидетельствовать о нисходящем тренде.

Потенциальная точка входа: Если более короткая SMA пересекается **выше более длинной** SMA, это обычно рассматривается как "бычий" сигнал, и трейдеры могут рассмотреть возможность входа в длинную позицию, покупать.

И наоборот, если более короткая SMA пересекается ниже более длинной SMA, это может быть медвежьим сигналом, и трейдеры могут рассмотреть возможность продажи или входа в короткую позицию.

Используется в связке с RSI и/или MACD.