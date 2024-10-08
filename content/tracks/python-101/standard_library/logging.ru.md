---
title: Модуль logging
description: Python 101
toc: true
authors:
tags:
categories:
series:
featuredImage:
date: "2022-06-28"
lastMod: "2022-06-28"
draft: false
weight: 203
---

Модуль логирования `logging` является одним из стандартных модулей Python и предоставляет возможности для записи логов в приложении. Логирование используется для записи информации о работе приложения, которую можно использовать для отслеживания ошибок и диагностики проблем.

В модуле `logging` определены три основных компонента: логгеры (loggers), обработчики (handlers) и форматировщики (formatters). Логгеры представляют собой объекты, которые используются для записи сообщений лога. Обработчики определяют, куда будут записываться сообщения, а форматировщики определяют, как будут отформатированы эти сообщения.

Пример использования модуля `logging`:

```python
import logging

# Создание логгера
logger = logging.getLogger('example')

# Установка уровня логирования
logger.setLevel(logging.INFO)

# Создание обработчика
handler = logging.FileHandler('example.log')

# Установка уровня логирования для обработчика
handler.setLevel(logging.INFO)

# Создание форматировщика
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')

# Установка форматировщика для обработчика
handler.setFormatter(formatter)

# Добавление обработчика к логгеру
logger.addHandler(handler)

# Запись сообщений лога
logger.debug('Debug message')
logger.info('Info message')
logger.warning('Warning message')
logger.error('Error message')
logger.critical('Critical message')
```

Этот пример создает логгер `example`, который записывает сообщения в файл `example.log`. Уровень логирования установлен на уровень INFO, что означает, что будут записаны сообщения с уровнем INFO и выше. Созданный обработчик определяет, что сообщения будут записываться в файл, а форматировщик определяет, как будут отформатированы сообщения.

Методы `debug`, `info`, `warning`, `error` и `critical` используются для записи сообщений лога разного уровня. В этом примере мы записываем сообщения всех уровней, поэтому в лог-файле будут отображены все эти сообщения.

Это только базовый пример использования модуля `logging`. В реальном приложении вы можете создать несколько логгеров с разными уровнями логирования и разными обработчиками для каждого из них, в зависимости от вашей конкретной задачи.
