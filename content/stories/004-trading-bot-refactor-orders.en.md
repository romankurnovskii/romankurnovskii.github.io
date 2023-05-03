---
title: Enhancing Trading Bot with Abstraction and Async Management
seoTitle: Enhancing Trading Bot Framework with Abstraction and Asynchronous Operations
description: In this part of our trading bot series, we dive into the importance of enhancing abstraction in code structure, efficient order handling, and the implementation of asynchronous operations for optimized performance.
toc: true
tags: ["python async", "trading bot", "async operations", "abstraction", "order management"]
series: ["Trading Bot"]
categories: ["Trading Bot"]
date: 2023-05-02
lastmod: 2023-05-02
featuredImage:
authors:
---

## Abstraction

Today worked on refining some abstraction level in framework. The main objective of today's work was to enhance the abstraction in the classes and improve the overall code structure.

The goal was to make the code more adaptable and easier to maintain. 

For example, instead of having `Binance` hardcoded in the `from_binance_order` method, now use the `Exchanges` enum, which makes the code more versatile and ready for additional exchanges in the future.

```python
def from_binance_order(binance_order: BinanceOrder):
    exchange = Exchanges.BINANCE
    ...
```

## Orders

Orders are at the heart of any trading bot, and handling them efficiently is crucial for the bot's performance. In the `Order` class, I added the `side` property to capture whether the order is a buy or sell order, and also refined the Order creation method to accept `side` and `order_type` as arguments.

Implemented a new method, `update`, in the `Order` class. This function checks if the incoming order is an instance of the `Order` class and updates specific fields based on certain conditions.

```python
def update(self, other_order):
    if not isinstance(other_order, Order):
        raise ValueError("The given object is not an instance of Order")

    # update only specific fields
    if other_order.time_to_cancel:
        self.time_to_cancel = other_order.time_to_cancel
    if other_order.status != OrderStatus.NEW:
        self.status = other_order.status
```

## Async

One of the major changes made was to the way I handle **async** operations. In the `Exchange` class, the methods `on_new_order_request` and `on_cancel_order_request` were updated to run in separate tasks. This change helps in improving the overall efficiency of the bot as multiple tasks can run concurrently without blocking the main event loop.

```python
asyncio.create_task(
    self._exchange.on_new_order_request(order_request, **kwargs)
)
```

## Summury

Today's changes focused on enhancing the bot's framework by making it more abstract, improving order handling, and making **async** operations more efficient.
