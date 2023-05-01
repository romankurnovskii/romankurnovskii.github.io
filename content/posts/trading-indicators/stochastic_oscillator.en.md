---
title: Stochastic Oscillator - Momentum Indicator
seoTitle: Tutorial - Stochastic Oscillator - Momentum Indicator
description: Stochastic Oscillator Trading Indicator
toc: true
tags: [Trading, Indicators, Stochastic Oscillator]
series: []
categories: [Trading,Indicators]
date: 2023-07-07
lastmod: 2023-07-07
featuredImage: https://picsum.photos/690/240?grayscale
authors:
prerequisites: [rsi]
# weight: 60
---

## About

The Stochastic Oscillator is a momentum indicator that shows the location of the close relative to the high-low range over a set number of periods. It was developed by George Lane in the 1950s.

## Calculating

### Formula

The Stochastic Oscillator is calculated using the following formula:

```sh
%K = 100[(C - L14) / (H14 - L14)]
```

where:

- C = the most recent closing price
- L14 = the lowest price traded of the 14 previous trading sessions
- H14 = the highest price traded during the same 14-day period
- %K = the current value of the stochastic indicator

The "%D" line is then a 3-day simple moving average of %K.

## Pros and Cons

Pros:

- The Stochastic Oscillator can provide insights into potential overbought and oversold conditions.
- It can also be used to identify divergences, short-term overbought and oversold conditions, and generate trading signals.

Cons:

- The Stochastic Oscillator can stay in overbought or oversold territory for a long time, leading to many false signals in trending markets.
- As a lagging indicator, it might send a late signal, causing the trader to miss a big part of the trend.

## Example of signals

- **Buy Signal:** A buy signal might be identified when the Stochastic Oscillator crosses above the %D line (bullish divergence).
- **Sell Signal:** Conversely, a sell signal might be identified when the Stochastic Oscillator crosses below the %D line (bearish divergence).

## Use in Real Trading

The Stochastic Oscillator is typically used with other oscillators such as the [Relative Strength Index (RSI)](../rsi) and the Commodity Channel Index (CCI) to confirm trading signals.

## Python Implementation

{{< notebook "jupyter/stochastic_oscillator" 1350 >}}
