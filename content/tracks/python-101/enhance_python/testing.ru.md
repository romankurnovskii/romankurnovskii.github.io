---
title: Тестирование
description: Python 101
toc: true
authors:
tags:
categories:
series:
featuredImage:
date: "2022-06-28"
lastmod: "2022-06-28"
draft: false
weight: 305
---

## unittest

Python поставляется со встроенным модулем для тестирования - `unittest`. 

Пример теста:

```python
import unittest

def square(x):
    return x * x

class TestSquare(unittest.TestCase):
    def test_positive(self):
        self.assertEqual(square(2), 4)
        self.assertEqual(square(3), 9)
        self.assertEqual(square(4), 16)

    def test_negative(self):
        self.assertEqual(square(-2), 4)
        self.assertEqual(square(-3), 9)
        self.assertEqual(square(-4), 16)

if __name__ == '__main__':
    unittest.main()
```

В этом примере мы создаем тестовый класс `TestSquare`, который наследуется от `unittest.TestCase`. В этом классе мы определяем два метода: `test_positive` и `test_negative`. Эти методы используют метод `assertEqual` для проверки ожидаемых результатов.

Метод `assertEqual` сравнивает два значения и генерирует исключение, если они не равны. Если тест проходит успешно, то мы не получаем никаких сообщений.

Запуск тестов можно выполнить из командной строки с помощью следующей команды:

```
python test_square.py
```

Да, в модуле `unittest` есть возможность делать моки с помощью встроенного класса `unittest.mock.Mock`. Это позволяет заменить реальный объект на имитацию, чтобы упростить тестирование и избежать внешних зависимостей.

Вот пример, который демонстрирует, как можно использовать моки в `unittest` для тестирования функции, которая зависит от внешнего сервиса:

```python
from unittest import TestCase, mock

def get_external_data():
    # Это внешний сервис, который может вернуть много данных
    # Но для тестирования нас интересует только первый элемент
    return ['data1', 'data2', 'data3']

def process_data():
    data = get_external_data()
    return data[0]

class TestProcessData(TestCase):

    @mock.patch('__main__.get_external_data')
    def test_process_data(self, mock_get_external_data):
        mock_get_external_data.return_value = ['test_data1', 'test_data2', 'test_data3']
        result = process_data()
        self.assertEqual(result, 'test_data1')
```

Здесь мы используем декоратор `@mock.patch` для замены реального `get_external_data` на имитацию. В тесте мы устанавливаем возвращаемое значение имитации и проверяем, что функция `process_data` вернула ожидаемый результат.

**Ресурсы:**

- [Документация по unittest](https://docs.python.org/3/library/unittest.html)
