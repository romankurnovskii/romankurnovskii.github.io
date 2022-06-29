---
title: 32. Анализ кода Python
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
weight: 32
---

Анализ кода Python может быть тяжелой темой, но он может быть очень полезен для улучшения ваших программ. Существует несколько анализаторов кода Python, которые вы можете использовать для проверки вашего кода на соответствие стандартам. pylint, вероятно, является самым популярным. Он очень конфигурируемый, настраиваемый и подключаемый. Он также проверяет ваш код на соответствие PEP8, официальному руководству по стилю Python Core, и ищет ошибки программирования.

Обратите внимание, что pylint проверяет ваш код на соответствие большинству, но не всем стандартам PEP8. Мы уделим немного времени изучению другого пакета анализа кода, который называется **pyflakes**.

## Начало работы с pylint

Пакет pylint не входит в состав Python, поэтому для его загрузки необходимо обратиться к индексу пакетов Python (PyPI) или на веб-сайт пакета. Вы можете использовать следующую команду, чтобы сделать всю работу за вас:

```sh
pip install pylint
```

Если все идет по плану, у вас должен быть установлен **pylint**, и мы готовы продолжить.

## Анализ вашего кода

После установки pylint вы можете запустить его в командной строке, без каких либо аргументов, что бы увидеть, какие опции он принимает. Если это не сработало, можете прописать полный путь, вот так:

```sh
c:\Python34\Scripts\pylint
```

Теперь нам нужен код для анализа. Вот фрагмент кода, в котором есть четыре ошибки. Сохраните его в файл с именем crummy_code.py:

```python
import sys

class CarClass:
    """"""

    def __init__(self, color, make, model, year):
        """Constructor"""
        self.color = color
        self.make = make
        self.model = model
        self.year = year

        if "Windows" in platform.platform():
            print("You're using Windows!")

        self.weight = self.getWeight(1, 2, 3)

    def getWeight(this):
        """"""
        return "2000 lbs"

```

Можете ли вы обнаружить ошибки без выполнения кода? Давайте посмотрим, сможет ли pylint найти проблемы!

```sh
pylint crummy_code.py
```

При выполнении этой команды на экран будет выведено много данных. Вот неполный пример:

```sh
c:\py101>c:\Python34\Scripts\pylint crummy_code.py
No config file found, using default configuration
************* Module crummy_code
C:  2, 0: Trailing whitespace (trailing-whitespace)
C:  5, 0: Trailing whitespace (trailing-whitespace)
C: 12, 0: Trailing whitespace (trailing-whitespace)
C: 15, 0: Trailing whitespace (trailing-whitespace)
C: 17, 0: Trailing whitespace (trailing-whitespace)
C:  1, 0: Missing module docstring (missing-docstring)
C:  3, 0: Empty class docstring (empty-docstring)
C:  3, 0: Old-style class defined. (old-style-class)
E: 13,24: Undefined variable 'platform' (undefined-variable)
E: 16,36: Too many positional arguments for function call (too-many-function-args)
C: 18, 4: Invalid method name "getWeight" (invalid-name)
C: 18, 4: Empty method docstring (empty-docstring)
E: 18, 4: Method should have "self" as first argument (no-self-argument)
R: 18, 4: Method could be a function (no-self-use)
R:  3, 0: Too few public methods (1/2) (too-few-public-methods)
W:  1, 0: Unused import sys (unused-import)
```

Давайте немного притормозим и разберемся. Сначала нам нужно понять, что означают буквы: С – конвенция (convention), R – рефакторинг (refactor), W – предупреждение (warning), E – ошибка (error). Наш pylint нашел 3 ошибки, 4 проблемы с конвенцией, 2 строки, которые нуждаются в рефакторинге и одно предупреждение. Предупреждение и 3 ошибки – это как раз то, что я искал. Мы попытаемся исправить этот код и устранить ряд проблем. Для начала мы наведем порядок в импортах, и изменить функцию getWeight на get_weight, в связи с тем, что camelCase не используется в названиях методов. Нам также нужно исправить вызов get_weight, чтобы он передавал правильное количество аргументов и исправить его, чтобы “self” выступал в качестве первого аргумента. Взглянем на новый код:

```python
# crummy_code_fixed.py
import platform

class CarClass:
    """"""

    def __init__(self, color, make, model, year):
        """Constructor"""
        self.color = color
        self.make = make
        self.model = model
        self.year = year

        if "Windows" in platform.platform():
            print("You're using Windows!")

        self.weight = self.get_weight(3)

    def get_weight(self, this):
        """"""
        return "2000 lbs"
```

Давайте запустим этот новый код в pylint и посмотрим, насколько мы улучшили результаты. Для краткости мы снова покажем только первую секцию:

```sh
c:\py101>c:\Python34\Scripts\pylint crummy_code_fixed.py
No config file found, using default configuration
************* Module crummy_code_fixed
C: 1,0: Missing docstring
C: 4,0:CarClass: Empty docstring
C: 21,4:CarClass.get_weight: Empty docstring
W: 21,25:CarClass.get_weight: Unused argument 'this'
R: 21,4:CarClass.get_weight: Method could be a function
R: 4,0:CarClass: Too few public methods (1/2)
```

Это очень помогло! Если бы мы добавили докстринги, мы могли бы вдвое сократить количество проблем. Теперь мы готовы взглянуть на pyflakes!

## Начало работы с pyflakes

Проект **pyflakes** является частью проекта Divmod. Pyflakes не выполняет код, который он проверяет, так же как pylint не выполняет код, который он анализирует. Вы можете установить pyflakes с помощью pip, easy_install или из исходников.

Мы начнем с запуска pyflakes в изначальной версии той же части кода, которую мы использовали для проверки pylint. Вот и он:

```python
import sys

class CarClass:
    """"""

    def __init__(self, color, make, model, year):
        """Constructor"""
        self.color = color
        self.make = make
        self.model = model
        self.year = year

        if "Windows" in platform.platform():
            print("You're using Windows!")

        self.weight = self.getWeight(1, 2, 3)

    def getWeight(this):
        """"""
        return "2000 lbs"

```

Как мы отмечали в предыдущем разделе, в этом поломанном коде четыре ошибки, три из которых препятствуют работе программы. Давайте посмотрим, что же pyflakes может найти. Попытайтесь запустить данную команду и на выходе вы должны получить следующее:

```sh
c:\py101>c:\Python34\Scripts\pyflakes.exe crummy_code.py
crummy_code.py:1: 'sys' imported but unused
crummy_code.py:13: undefined name 'platform'
```
Хотя pyflakes очень быстро вернул этот результат, он не нашел всех ошибок. Вызов метода **getWeight** передает слишком много аргументов, а сам метод **getWeight** определен неверно, поскольку у него нет аргумента **self**. На самом деле, вы можете называть первый аргумент как угодно, но по традиции его обычно называют **self**. Если бы вы исправили свой код в соответствии с тем, что сказал вам pyflakes, ваш код все равно не работал бы.

## Подведение итогов

Следующим шагом будет попытка запустить pylint и pyflakes в вашем собственном коде, либо же в пакете Python, вроде SQLAlchemy, и посмотреть, что вы получите на выходе. С помощью этих инструментов можно многое узнать о собственном коде. pylint интегрирован во многие популярные IDE для Python, такие как Wingware, Editra и PyDev. Некоторые предупреждения от pylint могут показаться вам раздражающими или вообще неприменимыми. Есть способы подавить такие вещи, как предупреждения об устаревании, с помощью опций командной строки. Или вы можете использовать команду **-generate-rcfile** для создания примера конфигурационного файла, который поможет вам контролировать pylint. Обратите внимание, что pylint и pyflakes не импортируют ваш код, поэтому вам не нужно беспокоиться о нежелательных побочных эффектах.
