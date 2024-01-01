---
title: Average True Range (ATR) - Volatility Indicator
seoTitle: Tutorial - Average True Range (ATR) - Volatility Indicator
description: ATR Trading Indicator
toc: true
tags: [Trading, Indicators, ATR]
series: []
categories: [Trading, Indicators]
date: 2023-07-07
lastMod: 2023-07-07
featuredImage: https://picsum.photos/699/240?grayscale
authors:
prerequisites: []
# weight: 70
---

## About

The Average True Range (ATR) is a technical analysis indicator that measures market volatility by decomposing the entire range of an asset price for that period. It was developed by J. Welles Wilder Jr. and introduced in his book "New Concepts in Technical Trading Systems" in 1978.

## Calculating

### Formula

ATR is calculated based on the true range (TR), which is the maximum of the following:

1. Current High less the current Low
2. Absolute value of (Current High less the previous Close)
3. Absolute value of (Current Low less the previous Close)

The ATR is then the moving average over a given period of the TR.

`ATR = Average(TR, N)`

For the first calculation of the ATR, it's simply the average of the TR over a specified period. But for subsequent calculations, it's the average of the previous ATR value and the current TR.

## Pros and Cons

**Pros:**

- ATR does not provide a directional bias, it purely measures volatility.
- It can be used in all markets such as stocks, forex, commodities etc.
- ATR adapts to changing market conditions, increasing during market turbulence and decreasing in calm markets.

**Cons:**

- ATR does not indicate price direction, only volatility.
- During periods of rapid price changes, ATR may experience sharp increases, reflecting the inherent volatility in the price series.

## Example of signals

ATR does not provide trading signals like other oscillators such as RSI or MACD. It provides a gauge of market volatility which can assist in stop loss placement or determining trade size.

**True Positive:**

In a trending market, ATR can help a trader place their stop loss further away during high volatility periods and closer during low volatility periods, reducing the likelihood of being stopped out prematurely.

**False Positive:**

In a ranging market, a sudden price breakout can cause a sharp increase in ATR, possibly leading to an unnecessarily wide stop loss if the breakout turns out to be a false one.

## Use in Real Trading

In real trading, ATR can be used in conjunction with other indicators for better signal confirmation. For example, ATR can be used with a trend following system to manage stop losses. As ATR increases, your stop loss can be placed further from your entry point allowing for market volatility.

## Python Implementation

{{< notebook "jupyter/atr" 1350 >}}
