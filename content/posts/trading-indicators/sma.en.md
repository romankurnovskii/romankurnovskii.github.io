---
title: SMA - Simple Moving Average
seoTitle: Tutorial - SMA - Simple Moving Average
description: SMA Trading indicator
toc: true
tags: [Trading, Indicators, SMA]
series: []
categories: [Trading]
date: 2023-06-13
lastmod: 2023-06-13
featuredImage: https://picsum.photos/700/240?grayscale
authors:
prerequisites: []
weight: 10
---


## About

The Simple Moving Average (SMA) is a technical indicator that calculates the **average price** over a specific number of periods, and it moves along as new data is added, making it a "moving average".

## Calculating

### Formula

<mark>SMA = (Sum of price data for the last N periods) / N</mark>

For example, a 5-period SMA would sum up the last 5 closing prices and divide it by 5 to find the average. It is called a 'moving' average because as new prices become available, the oldest prices are dropped and the average recalculates.

| Minute | Open  | High  | Low   | Close | SMA   |
| ------ | ----- | ----- | ----- | ----- | ----- |
| 1      | $10.0 | $11.0 | $9.5  | $10.0 | -     |
| 2      | $10.1 | $12.1 | $10.0 | $12.0 | -     |
| 3      | $12.2 | $15.2 | $12.0 | $15.0 | -     |
| 4      | $15.1 | $15.1 | $13.9 | $14.0 | -     |
| 5      | $14.1 | $16.1 | $14.0 | $16.0 | $13.4 |

Using our given market data and specifically the closing prices, here's how the 5-minute SMA would be calculated after Minute 5:

1. Minute 1-5 close prices: `$10.0, $12.0, $15.0, $14.0, $16.0`
2. SMA = `(10.0 + 12.0 + 15.0 + 14.0 + 16.0) / 5 = $13.4`

The 5-minute SMA after the 5th minute would be $13.4.

## Pros and Cons

Pros:

- The SMA is simple and easy to calculate and understand.
- It smooths out price fluctuations and helps to filter out the "noise" of the market.
- It's useful for identifying trend directions over the specified period.

Cons:

- The SMA is a lagging indicator, meaning it's based on past prices and tends to be slow to respond to recent price changes.
- Because it equally weighs all data points, it might not accurately reflect recent changes in the market.
- It might give false signals in volatile markets because it doesn't adapt to market changes as quickly as some other indicators.

## Example of signals

Traders often use two SMAs: a **short-term** one and a **long-term** one.
When the **short-term** SMA crosses **above** the long-term SMA, it's considered a bullish (**buy**) signal.
When it crosses **below**, it's a bearish (**sell**) signal.

**True Positive:**

In an uptrending market, the short-term SMA might cross above the long-term SMA, correctly indicating a continuing upward trend and a good time to buy.

**False Positive:**

Let's say the market is in a sideways trend (prices fluctuate within a narrow range). A brief price spike could cause the short-term SMA to cross above the long-term SMA, generating a buy signal. However, this could be misleading as the overall trend hasn't changed.

## Use in Real Trading

In real trading, SMA can be paired with other indicators for better results.

For instance, a trader might use SMA in conjunction with the **Relative Strength Index (RSI)**. The RSI could help confirm whether the market is overbought or oversold when the SMAs cross.

## Python Implementation

{{< notebook "jupyter/sma" 1250 >}}
