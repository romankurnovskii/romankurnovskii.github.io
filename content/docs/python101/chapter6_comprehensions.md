---
title: 6. Генераторы в Python
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
weight: 6
---

В языке Python есть несколько методов создания списков и словарей, которые известны как генераторы. Существует также третий тип генератора для создания набора в Python. В этой главе мы узнаем, как использовать каждый тип генераторов. Вы увидите, что конструкция генератора основываются на знаниях, полученных из предыдущих глав, поскольку они содержат циклы и условия.

## Генераторы списков

Генераторы списков в Python очень удобны. Но их также бывает трудно понять, когда и зачем их использовать. Генераторы списков, как правило, сложнее для чтения, чем простое использование цикла for. Возможно, вы захотите просмотреть главу о циклах, прежде чем продолжить.

Если вы готовы, то мы потратим немного времени на рассмотрение того, как строить генераторы списков и узнаем, как их можно использовать. Генератор списка - это, по сути, однострочный цикл **for**, который создает структуру данных Python в виде **списка**. Вот простой пример:

```sh
>>> x = [i for i in range(5)]
```

Давайте немного разберемся в этом. В Python есть функция range, которая может возвращать список чисел. По умолчанию она возвращает целые числа, начиная с 0 и заканчивая числом, которое вы ей передали, но не включая его. В данном случае она возвращает список, содержащий целые числа 0-4. Это может быть полезно, если вам нужно быстро создать список. Например, вы разбираете файл и ищете что-то конкретное. Вы можете использовать генератор списка в качестве своеобразного фильтра:

```sh
if [i for i in line if "SOME TERM" in i]:
    # do something
```

Я использовал код, подобный этому, для быстрого просмотра файла, чтобы разобрать определенные строки или разделы файла. Когда вы добавляете функции, вы можете начать делать действительно интересные вещи. Допустим, вы хотите применить функцию к каждому элементу списка, например, вам нужно преобразовать кучу строк в целые числа:

```sh
>>> x = ['1', '2', '3', '4', '5']
>>> y = [int(i) for i in x]
>>> y
[1, 2, 3, 4, 5]
```

Такое встречается чаще, чем вы думаете. Мне также приходилось обращаться к списку строк и вызывать строковый метод, например, strip, потому что в них были всевозможные ведущие или конечные пробелы:

```sh
>>> myStrings = [s.strip() for s in myStringList]
```

Бывают случаи, когда необходимо создать генерацию вложенного списка. Одна из причин для этого - сглаживание нескольких списков в один. Этот пример взят из документации Python:

```sh
>>> vec = [[1,2,3], [4,5,6], [7,8,9]]
>>> [num for elem in vec for num in elem]
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

В документации приведено несколько других интересных примеров для понимания генерации вложенных списков. Я настоятельно рекомендую взглянуть на нее! К этому моменту вы уже должны уметь применять генераторы списков в своем собственном коде и применять их хорошо. Просто используйте свое воображение, и вы начнете видеть много хороших мест, где вы тоже можете их использовать.

Теперь мы готовы перейти к работе со словарями Python!

## Генераторы словарей

Генераторы словарей появились в Python 3.0, но были перенесены в Python 2.7. Первоначально они были предложены в предложении [274 (PEP 274) по усовершенствованию Python](http://www.python.org/dev/peps/pep-0274/) еще в 2001 году. По своей организации они очень похожи на списки.

Лучший способ понять это - просто сделать один!

```sh
>>> print( {i: str(i) for i in range(5)} )
{0: '0', 1: '1', 2: '2', 3: '3', 4: '4'}
```

Это довольно простой генератор. По сути, он создает целочисленный ключ и строковое значение для каждого элемента в диапазоне. Теперь вы можете задаться вопросом, как можно использовать генерацию словаря в реальной жизни. [Марк Пилгрим](http://www.diveintopython3.net/comprehensions.html) упомянул, что вы можете использовать это для замены ключей и значений словаря. Например, вот так:

```sh
>>> my_dict = {1:"dog", 2:"cat", 3:"hamster"}
>>> print( {value:key for key, value in my_dict.items()} )
{'hamster': 3, 'dog': 1, 'cat': 2}
```

Это будет работать только в том случае, если генераторы словаря имеют неизменяемый тип, например, строку. В противном случае вы вызовете исключение.

Я также вижу, что генератор словаря может быть полезен для создания таблицы из переменных класса и их значений. Однако на данный момент мы не рассматривали классы, поэтому я не буду вас в этом запутывать.

## Генератор множеств

Генератор множеств создается примерно так же, как и генератор словарей. Множество Python во многом похоже на математическое множество, поскольку в нем нет повторяющихся элементов. Вы можете создать обычное множество следующим образом:

```sh
>>> my_list = [1, 2, 2, 3, 4, 5, 5, 7, 8]
>>> my_set = set(my_list)
>>> my_set
set([1, 2, 3, 4, 5, 7, 8])
```

Как видно из примера выше, вызов set удалил дубликаты из списка. Теперь давайте перепишем этот код для использования генератора set:

```sh
>>> my_list = [1, 2, 2, 3, 4, 5, 5, 7, 8]
>>> my_set = {x for x in my_list}
>>> my_set
set([1, 2, 3, 4, 5, 7, 8])
```
Вы заметите, что для создания генератора set мы просто заменили квадратные скобки, которые используются в генераторе списка, на фигурные скобки, которые используются в генераторе словаря.

## Подведение итогов

Теперь вы знаете, как использовать различные виды генераторов в Python. Вероятно, поначалу вам покажется, что наиболее полезным и популярным является генератор списка. Если вы начнете использовать свое воображение, я уверен, что вы сможете найти применение всем трем типам генераторов. Теперь мы готовы двигаться дальше и изучать обработку исключений!