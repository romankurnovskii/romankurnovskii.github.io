---
title: RSI - Relative Strength Index
seoTitle: Tutorial - Understanding the RSI - Relative Strength Index
description: A comprehensive guide to the Relative Strength Index (RSI) trading indicator.
toc: true
tags: [Trading, Indicators, RSI]
series: []
categories: [Trading]
date: 2023-06-15
lastmod: 2023-06-15
featuredImage: https://picsum.photos/700/242?grayscale
authors: []
prerequisites: [Technical Analysis, Oscillators]
weight: 40
---

## About

The Relative Strength Index (RSI) is a momentum oscillator that measures the speed and change of price movements. Developed by J. Welles Wilder, the RSI is a very popular indicator that is used primarily to identify **overbought** and **oversold** conditions in a market.

## Calculating

The RSI is calculated using the following steps:

1. Calculate the average gain and the average loss over the specified period (usually 14 periods).
1. Compute the relative strength (RS) which is the ratio of average gain to average loss.
1. The RSI is then calculated using the formula: RSI = 100 - (100 / (1 + RS))

### Formula

<mark>RSI = 100 - (100 / (1 + RS))</mark>

Where:

- **RS**: (Relative Strength) = Average Gain / Average Loss

## Pros and Cons

**Pros:**

- RSI is a versatile indicator that can be used in trending or ranging markets.
- It helps identify potential reversals, overbought/oversold conditions, and divergence.

**Cons:**

- During strong trends, the RSI may remain overbought or oversold for extended periods.
- False signals can occur, especially during choppy market conditions.

## Example of signals

| Minute | Open  | High  | Low   | Close |
| ------ | ----- | ----- | ----- | ----- |
| 1      | $10.0 | $11.0 | $9.5  | $10.0 |
| 2      | $10.1 | $12.1 | $10.0 | $12.0 |
| 3      | $12.2 | $15.2 | $12.0 | $15.0 |
| 4      | $15.1 | $15.1 | $13.9 | $14.0 |
| 5      | $14.1 | $16.1 | $14.0 | $16.0 |
| 6      | $16.1 | $16.1 | $14.9 | $15.0 |
| 7      | $15.1 | $17.1 | $15.0 | $17.0 |
| 8      | $17.1 | $17.1 | $15.9 | $16.0 |
| 9      | $16.1 | $18.1 | $16.0 | $18.0 |
| 10     | $18.1 | $18.1 | $16.9 | $17.0 |
| 11     | $17.1 | $19.1 | $17.0 | $19.0 |
| 12     | $19.1 | $19.1 | $17.9 | $18.0 |
| 13     | $18.1 | $20.1 | $18.0 | $20.0 |
| 14     | $20.1 | $21.1 | $20.0 | $21.0 |
| 15     | $21.1 | $21.1 | $19.9 | $20.0 |
| 16     | $20.1 | $22.1 | $20.0 | $21.0 |
| 17     | $21.1 | $23.1 | $21.0 | $22.0 |
| 18     | $22.1 | $24.1 | $22.0 | $23.0 |
| 19     | $23.1 | $25.1 | $23.0 | $24.0 |
| 20     | $24.1 | $26.1 | $24.0 | $25.0 |
| 21     | $25.1 | $27.1 | $25.0 | $26.0 |

For the following examples, let's assume the RSI settings are set to the standard **14 periods**.

**True Positive:**

In the 6th minute, the price drops from $16 to $15. The RSI dips below the 30 level, indicating an oversold condition. In the next minute, the price increases to $17, marking a successful buy signal.

**False Positive:**

In the 21th minute, the price jumps from $25 to $26. The RSI exceeds 70, implying an overbought condition. However, the price continues to increase in the next minutes, rendering this a false sell signal.

## Use in Real Trading

In real trading, RSI is often used in conjunction with other indicators to increase the robustness of the signals.

For instance, traders might look for price action patterns (like support/resistance breaks) or confirmations from other indicators before acting on an RSI signal.

## Python Implementation

```python
# Importing Required Libraries
import pandas as pd
import yfinance as yf
import matplotlib.pyplot as plt

# Define the Ticker Symbol
tickerSymbol = 'MSFT'

# Get the data on this ticker
tickerData = yf.Ticker(tickerSymbol)

# Get the historical prices for the specified period
tickerDf = tickerData.history(period='1d', start='2020-1-1', end='2023-1-25')

# Calculate RSI
delta = tickerDf['Close'].diff(1)
delta = delta.dropna()
up = delta.copy()
down = delta.copy()
up[up < 0] = 0
down[down > 0] = 0
average_gain = up.rolling(window=14).mean()
average_loss = abs(down.rolling(window=14).mean())
rs = average_gain / average_loss
RSI = 100.0 - (100.0 / (1.0 + rs))

# Add RSI to the data frame
tickerDf['RSI'] = RSI

# Plot the chart
plt.figure(figsize=(12.2, 4.5)) #width = 12.2in, height = 4.5
plt.plot(tickerDf.index, tickerDf['RSI'], label='RSI', color = 'red')
plt.axhline(0, linestyle='--', alpha = 0.5, color = 'gray')
plt.axhline(10, linestyle='--', alpha = 0.5, color = 'orange')
plt.axhline(20, linestyle='--', alpha = 0.5, color = 'green')
plt.axhline(30, linestyle='--', alpha = 0.5, color = 'red')
plt.axhline(70, linestyle='--', alpha = 0.5, color = 'red')
plt.axhline(80, linestyle='--', alpha = 0.5, color = 'green')
plt.axhline(90, linestyle='--', alpha = 0.5, color = 'orange')
plt.axhline(100, linestyle='--', alpha = 0.5, color = 'gray')
plt.title('RSI of '+tickerSymbol)
plt.xlabel('Date',fontsize=15)
plt.ylabel('RSI',fontsize=15)
plt.legend(loc='upper left')
plt.show()
```

![rsi.png](../assets/rsi.png)
