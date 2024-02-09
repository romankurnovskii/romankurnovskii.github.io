---
title: 178. Rank Scores
seoTitle: LeetCode 178. Rank Scores | Python solution and explanation
description: 178. Rank Scores
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 178
---

[LeetCode problem 178](https://leetcode.com/problems/rank-scores/)

```python
import pandas as pd


def order_scores(scores: pd.DataFrame) -> pd.DataFrame:
    # Use the rank method to assign ranks to the scores in descending order with no gaps
    scores["rank"] = scores["score"].rank(method="dense", ascending=False)

    # Drop id column & Sort the DataFrame by score in descending order
    result_df = scores.drop("id", axis=1).sort_values(by="score", ascending=False)

    return result_df

```
