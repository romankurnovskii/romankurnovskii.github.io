---
title: MACD - Moving Average Convergence Divergence
seoTitle: Tutorial - Understanding the MACD - Moving Average Convergence Divergence
description: A comprehensive guide to the Moving Average Convergence Divergence (MACD) trading indicator.
toc: true
tags: [Trading, Indicators, MACD]
series: []
categories: [Trading, Indicators]
date: 2023-06-15
lastmod: 2023-06-15
featuredImage: https://picsum.photos/700/243?grayscale
authors: []
prerequisites: [EMA]
# weight: 30
---


## About

The Moving Average Convergence Divergence (MACD) is a versatile trading indicator used in various forms of trading, including high-frequency trading (HFT).

MACD is a trend-following momentum indicator that shows the <mark>relationship between two moving averages</mark> of a security’s price.

## Calculating

### Formula

The MACD is calculated by subtracting the **26-period** Exponential Moving Average (**EMA**) from the **12-period** **EMA**. A **9-day EMA** of the MACD, called the "signal line", is then plotted on top of the MACD, functioning as a trigger for buy and sell signals.

Here's the <nark>formula</mark> for the MACD:

```sh
MACD = 12-Period EMA − 26-Period EMA
```

To calculate the signal line, you take the 9-period EMA of the MACD.

```sh
Signal Line = 9-Period EMA of MACD
```

**Example:**

Since MACD requires 26 periods to start, we'll calculate from the 26th minute:

| Minute | Open  | High  | Low   | Close | EMA12       | EMA26       | EMA9 (Signal) | MACD        |
| ------ | ----- | ----- | ----- | ----- | ----------- | ----------- | ------------- | ----------- |
| 1      | $10.0 | $11.0 | $9.5  | $10.0 | -           | -           | -             | -           |
| 2      | $10.1 | $12.1 | $10.0 | $12.0 | -           | -           | -             | -           |
| 3      | $12.2 | $15.2 | $12.0 | $15.0 | -           | -           | -             | -           |
| 4      | $15.1 | $15.1 | $13.9 | $14.0 | -           | -           | -             | -           |
| 5      | $14.1 | $16.1 | $14.0 | $16.0 | -           | -           | -             | -           |
| 6      | $16.1 | $16.1 | $14.9 | $15.0 | -           | -           | -             | -           |
| 7      | $15.1 | $17.1 | $15.0 | $17.0 | -           | -           | -             | -           |
| 8      | $17.1 | $17.1 | $15.9 | $16.0 | -           | -           | -             | -           |
| 9      | $16.1 | $18.1 | $16.0 | $18.0 | -           | -           | Starts here   | -           |
| 10     | $18.1 | $18.1 | $16.9 | $17.0 | -           | -           |               | -           |
| 11     | $17.1 | $19.1 | $17.0 | $19.0 | -           | -           |               | -           |
| 12     | $19.1 | $19.1 | $17.9 | $18.0 | Starts here | -           |               | -           |
| 13     | $18.1 | $20.1 | $18.0 | $20.0 |             | -           |               | -           |
| 14     | $20.1 | $21.1 | $20.0 | $21.0 |             | -           |               | -           |
| 15     | $21.1 | $21.1 | $19.9 | $20.0 |             | -           |               | -           |
| 16     | $20.1 | $22.1 | $20.0 | $21.0 |             | -           |               | -           |
| 17     | $21.1 | $23.1 | $21.0 | $22.0 |             | -           |               | -           |
| 18     | $22.1 | $24.1 | $22.0 | $23.0 |             | -           |               | -           |
| 19     | $23.1 | $25.1 | $23.0 | $24.0 |             | -           |               | -           |
| 20     | $24.1 | $26.1 | $24.0 | $25.0 |             | -           |               | -           |
| 21     | $25.1 | $27.1 | $25.0 | $26.0 |             | -           |               | -           |
| 22     | $26.1 | $28.1 | $26.0 | $27.0 |             | -           |               | -           |
| 23     | $27.1 | $29.1 | $27.0 | $28.0 |             | -           |               | -           |
| 24     | $28.1 | $30.1 | $28.0 | $29.0 |             | -           |               | -           |
| 25     | $29.1 | $31.1 | $29.0 | $30.0 |             | -           |               | -           |
| 26     | $30.1 | $32.1 | $30.0 | $31.0 |             | Starts here |               | Starts here |
| 27     | $31.1 | $33.1 | $31.0 | $32.0 |             |             |               |             |
| 28     | $32.1 | $34.1 | $32.0 | $33.0 |             |             |               |             |
| 29     | $33.1 | $35.1 | $33.0 | $34.0 |             |             |               |             |
| 30     | $34.1 | $36.1 | $34.0 | $35.0 |             |             |               |             |

In python it can be calculated in the following way:

```python
import pandas as pd

# Assuming 'df' is your DataFrame and 'Close' is the column with closing prices
df['EMA12'] = df['Close'].ewm(span=12, adjust=False).mean()
df['EMA26'] = df['Close'].ewm(span=26, adjust=False).mean()
df['MACD'] = df['EMA12'] - df['EMA26']
df['Signal'] = df['MACD'].ewm(span=9, adjust=False).mean()
```

## Pros and Cons

**Pros:**

- Trend Identification: MACD can identify the **start of a trend**, providing good entry points.
- Signal Line Crossovers: The MACD's signal line can provide clear buy and sell signals.

**Cons:**

- False Signals: Like any indicator, MACD can produce **false signals**, particularly in **volatile markets**.
- Lag: MACD can sometimes lag behind the market because it’s a trend-following indicator.
- It may not work well in ranging (non-trending) markets, where price movements can be random.

## Example of signals

**True Positive:**

A true positive in MACD is a situation where the MACD line crosses **above the signal line** and the **price goes up**, indicating a strong bullish signal, or the MACD line crosses **below the signal line** and the **price goes down**, indicating a strong bearish signal.

These signals can help traders decide when to enter or exit trades.

**False Positive:**

A false positive in MACD is typically a situation where the MACD line crosses above the signal line (potential buy signal), but the price does not go up, or the MACD line crosses below the signal line (potential sell signal), but the price does not go down. It's important to confirm MACD signals with other indicators or patterns to avoid false positives.

## Use in Real Trading

In a real trading scenario, traders often use MACD in conjunction with other indicators to confirm signals and minimize risks. For example, a trader may use the Relative Strength Index (**RSI**) together with MACD.

If MACD gives a buy signal (MACD line crosses above the signal line), and RSI is below 30 (indicating an oversold condition), the trader may consider this as a strong buy signal.

## Python Implementation

{{< notebook "jupyter/macd" 1400 >}}
