---
title: EMA - Exponential Moving Average
seoTitle: Tutorial - EMA - Exponential Moving Average
description: EMA Trading indicator
toc: true
tags: [Trading, Indicators, EMA]
series: []
categories: [Trading, Indicators]
date: 2023-07-07
lastmod: 2023-06-13
featuredImage: https://picsum.photos/699/241?grayscale
authors:
prerequisites: [SMA]
# weight: 20
---

## About

Unlike the SMA, the EMA gives more weight to recent data, making it quicker to respond to price changes.

## Calculating

### Formula

<mark>EMA = (Close - Previous EMA) * Multiplier + Previous EMA</mark>

Where:

- **Close**: the closing price for a given period (*Price today/now*). *Here close prices is for example*
- **N**: the period of the EMA.
- **Multiplier**: `2 / (N + 1)`
- **Previous EMA** is the EMA of the previous period.

The EMA for the first period is just the **Close price**.

But for subsequent periods, it's calculated as follows:

- `EMA = (Close - Previous EMA) * Multiplier + Previous EMA`
- `EMA[i] = (Close[i] - EMA[i-1]) * 2/(N+1) + EMA[i-1]`

However, the EMA's calculation is slightly more complex for the initial period because there is **no previous EMA**. In this case, we use the SMA as the first EMA:

```sh
EMA(first period) = SMA
```

**Example:**

Let's calculate a <mark>5-minute EMA</mark> at Minute <nark>6</mark> with the following market data:

| Minute | Open  | High  | Low   | Close | EMA       |
| ------ | ----- | ----- | ----- | ----- | --------- |
| 1      | $10.0 | $11.0 | $9.5  | $10.0 | -         |
| 2      | $10.1 | $12.1 | $10.0 | $12.0 | -         |
| 3      | $12.2 | $15.2 | $12.0 | $15.0 | -         |
| 4      | $15.1 | $15.1 | $13.9 | $14.0 | -         |
| 5      | $14.1 | $16.1 | $14.0 | $16.0 | 13.4(SMA) |
| 6      | $16.1 | $16.1 | $14.9 | $15.0 | 15.67     |
| 7      | $15.1 | $17.1 | $15.0 | $17.0 | ...       |
| 8      | $17.1 | $17.1 | $15.9 | $16.0 | ...       |
| 9      | $16.1 | $18.1 | $16.0 | $18.0 | ...       |

*Can be calculated from first price*

Here, `N = 5`, so `Multiplier = 2 / (5 + 1) = 0.33`.

- `SMA(5) = (10.0 + 12.0 + 15.0 + 14.0 + 16.0) / 5 = 13.4`
- This value becomes the first EMA (`EMA[5]`). Now, to calculate the EMA for the **6th** minute, we use the EMA formula:

```sh
EMA[6] = (Close[6] - EMA[5]) * multiplier + EMA[5]
       = (15.0 - 13.4) * 0.33 + 13.4
       = 14.13
```

## Pros and Cons

**Pros:**

- More responsive: By giving more weight to recent prices, the EMA can adapt faster to price changes.
- Combines trend and momentum: The EMA not only captures the overall trend but also shows the asset's momentum.
- Often used for High frequency trading.

**Cons:**

- More prone to false signals: The sensitivity of the EMA can sometimes lead to false signals, especially in volatile markets.
- Complex calculation: Compared to the SMA, the EMA's calculation is slightly more complex, especially for longer periods.

## Example of signals

Like the SMA, traders often use two EMAs: a short-term one and a long-term one. When the **short-term** EMA **crosses above** the long-term EMA, it's a bullish (**buy**) signal, and when it crosses below, it's a bearish (sell) signal.

**True Positive:**

In minute 7, the short EMA crosses above the long EMA, which is a buy signal. The price then goes up, confirming this was a correct signal.

In a stable uptrend, the short-term EMA might cross above the long-term EMA, correctly suggesting that it's a good time to enter a long position.

**False Positive:**

In minute 11, the short EMA dips below the long EMA, suggesting a sell signal. However, the price increases in the next minute, making this a false signal.

In a volatile market, the price might swing up and down sharply, causing the short-term EMA to cross the long-term EMA back and forth, generating multiple buy and sell signals that could be misleading.

## Use in Real Trading

In real trading, EMA can be used in combination with other indicators such as **MACD** (Moving Average Convergence Divergence) or **Bollinger Bands**.

For instance, a trader might look for the short-term EMA to cross above the long-term EMA and the MACD to cross above its signal line as a confirmation for a long position.

## Python Implementation

{{< notebook "jupyter/ema" 1350 >}}
