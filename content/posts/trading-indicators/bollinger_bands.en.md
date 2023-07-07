---
title: Bollinger Bands - Volatility and Price Level Indicator
seoTitle: Tutorial - Bollinger Bands - Volatility and Price Level Indicator
description: Bollinger Bands Trading Indicator
toc: true
tags: [Trading, Indicators, Bollinger Bands]
series: []
categories: [Trading, Indicators]
date: 2023-07-06
lastmod: 2023-07-06
featuredImage: https://picsum.photos/700/240?grayscale
authors:
prerequisites: [sma]
# weight: 50
---


## About

Bollinger Bands is a technical indicator developed by John Bollinger in the 1980s. It provides a relative definition of high and low prices of a market instrument by creating a <mark>band of two standard deviations from a simple moving average (SMA)</mark>.

## Calculating

### Formula

Bollinger Bands consist of three lines:

1. Middle Line: <mark>20-day simple moving average (SMA)</mark>
1. Upper Band: <mark>20-day SMA + (2 * 20-day standard deviation of price)</mark>
1. Lower Band: <mark>20-day SMA - (2 * 20-day standard deviation of price)</mark>

The standard deviation measures how spread out the prices or returns of an asset are on average. It's the most common way to gauge market volatility.

## Pros and Cons

Pros:

- Bollinger Bands adjust themselves to market conditions.
- They can be used in all markets like stocks, forex, commodities, etc.
- The bands can provide signals for potential overbuying and overselling scenarios.

Cons:

- During a strong trend, the price can remain at the extremes (upper or lower band) for a long time, leading to many false sell or buy signals.
- As a lagging indicator, Bollinger Bands might send a late signal, causing the trader to miss a big part of the trend.

## Example of signals

Bollinger Bands are often used to identify potential buy and sell signals.

**Buy Signal:** A common strategy is to **buy** when the price touches the **lower Bollinger Band** and exit when the price touches the moving average in the center of the bands.

**Sell Signal:** Conversely, a sell signal is present when the price touches the upper Bollinger Band and exit the position when it touches the moving average.

**True Positive:**

In a ranging market, prices tend to bounce between the upper and lower band, correctly indicating good points to buy and sell.

**False Positive:**

In a trending market, the price can touch the upper band (in an uptrend) or the lower band (in a downtrend) for extended periods, leading to potentially poor buy or sell signals.

## Use in Real Trading

Bollinger Bands can be combined with other indicators for better signal confirmation.

For example, using it in conjunction with the RSI could help traders avoid false signals. When the price touches the upper band and the RSI indicates overbought conditions, there might be a good chance the price will decrease, indicating a sell signal.

## Python Implementation

{{< notebook "jupyter/bollinger_bands" 1300 >}}
