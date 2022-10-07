---
title: 12. Интроспекция
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
weight: 12
---

Независимо от того, новичок ли вы в Python, используете ли вы его уже несколько лет или являетесь экспертом, умение использовать возможности интроспекции Python может помочь вам понять ваш код и тот новый пакет с ужасной документацией, который вы только что скачали. Интроспекция - это модное слово, которое означает наблюдение за собой и размышление о своих мыслях, чувствах и желаниях. В мире Python интроспекция - это нечто похожее. В данном случае интроспекция - это использование Python для изучения Python. В этой главе вы узнаете, как использовать Python, чтобы дать себе подсказку о коде, над которым вы работаете или пытаетесь изучить. Некоторые могут даже назвать это формой отладки.

Вот что мы рассмотрим:

- type
- dir
- help

## Тип Python

Вы можете не знать этого, но Python может быть вашим типом. Да, Python может сказать вам, какого типа у вас переменная или какой тип возвращается из функции. Это очень удобный инструмент. Давайте рассмотрим несколько примеров, чтобы все стало ясно:

```sh
>>> x = "test"
>>> y = 7
>>> z = None
>>> type(x)
<class 'str'>
>>> type(y)
<class 'int'>
>>> type(z)
<class 'NoneType'>
```
Как вы видите, в Python есть ключевое слово **type**, которое позволяет определить, что есть что. В реальной жизни я использовал тип, чтобы понять, что происходит, когда данные моей базы данных повреждены или не соответствуют моим ожиданиям. Я просто добавляю пару строк и вывожу данные каждой строки вместе с ее типом. Это очень помогло мне, когда я был ошарашен каким-то глупым кодом, который я написал.

## Python Dir

Что такое dir? Это что-то, что вы говорите, когда кто-то говорит или делает что-то глупое? Не в этом контексте! Нет, здесь, на планете Python, ключевое слово dir используется для того, чтобы сообщить программисту, какие атрибуты и методы есть в переданном объекте. Если вы забыли передать объект, dir вернет список имен в текущей области видимости. Как обычно, это легче понять на нескольких примерах.

```sh
>>> dir("test")
['__add__', '__class__', '__contains__', '__delattr__',
 '__doc__', '__eq__', '__ge__', '__getattribute__',
 '__getitem__', '__getnewargs__', '__getslice__', '__gt__',
 '__hash__', '__init__', '__le__', '__len__', '__lt__',
 '__mod__', '__mul__', '__ne__', '__new__', '__reduce__',
 '__reduce_ex__', '__repr__', '__rmod__', '__rmul__',
 '__setattr__', '__str__', 'capitalize', 'center',
 'count', 'decode', 'encode', 'endswith', 'expandtabs',
 'find', 'index', 'isalnum', 'isalpha', 'isdigit', 'islower',
 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower',
 'lstrip', 'replace', 'rfind', 'rindex', 'rjust', 'rsplit',
 'rstrip', 'split', 'splitlines', 'startswith', 'strip',
 'swapcase', 'title', 'translate', 'upper', 'zfill']
```
Поскольку в Python все является объектом, мы можем передать строку в dir и узнать, какие методы у него есть. Довольно ловко, да? Теперь давайте попробуем сделать это с импортированным модулем:

```sh
>>> import sys
>>> dir(sys)
['__displayhook__', '__doc__', '__egginsert', '__excepthook__',
 '__name__', '__plen', '__stderr__', '__stdin__', '__stdout__',
 '_getframe', 'api_version', 'argv', 'builtin_module_names',
 'byteorder', 'call_tracing', 'callstats', 'copyright',
 'displayhook', 'dllhandle', 'exc_clear', 'exc_info',
 'exc_traceback', 'exc_type', 'exc_value', 'excepthook',
 'exec_prefix', 'executable', 'exit', 'exitfunc',
 'getcheckinterval', 'getdefaultencoding', 'getfilesystemencoding',
 'getrecursionlimit', 'getrefcount', 'getwindowsversion', 'hexversion',
 'maxint', 'maxunicode', 'meta_path', 'modules', 'path', 'path_hooks',
 'path_importer_cache', 'platform', 'prefix', 'setcheckinterval',
 'setprofile', 'setrecursionlimit', 'settrace', 'stderr', 'stdin',
 'stdout', 'version', 'version_info', 'warnoptions', 'winver'].
```
Вот теперь это удобно! Если вы еще не поняли, функция **dir** очень удобна для тех пакетов сторонних разработчиков, которые вы скачали (или скоро скачаете) и которые практически не имеют документации. Как узнать, какие методы доступны в таких случаях? Ну, **dir** поможет вам разобраться в этом. Конечно, иногда документация находится в самом коде, что приводит нас к встроенной справочной утилите.

## Python Help!

Python поставляется с удобной утилитой помощи. Просто введите "help()" (без кавычек) в оболочке Python, и вы увидите следующие указания (версия Python может отличаться)

```sh
>>> help()

Welcome to Python 3.9's help utility!

If this is your first time using Python, you should definitely check out
the tutorial on the Internet at https://docs.python.org/3.9/tutorial/.

Enter the name of any module, keyword, or topic to get help on writing
Python programs and using Python modules.  To quit this help utility and
return to the interpreter, just type "quit".

To get a list of available modules, keywords, symbols, or topics, type
"modules", "keywords", "symbols", or "topics".  Each module also comes
with a one-line summary of what it does; to list the modules whose name
or summary contain a given string such as "spam", type "modules spam".

help>
```

Обратите внимание, что теперь у вас есть подсказка "help>" вместо ">>>". Когда вы находитесь в режиме справки, вы можете изучить различные модули, ключевые слова и темы, найденные в Python. Также обратите внимание, что при вводе слова "модули" вы увидите задержку, пока Python будет искать список в папке библиотеки. Если у вас установлено много сторонних модулей, это может занять довольно много времени, так что будьте готовы сделать себе мокко, пока ждете. Когда все будет готово, просто следуйте инструкциям и поиграйте с этим, и я думаю, вы поймете суть.

## Подведение итогов

Теперь вы знаете, как взять неизвестный модуль и узнать о нем много нового, просто используя некоторые встроенные функции Python. Вы будете использовать эти команды снова и снова, чтобы помочь себе в изучении Python. Как я уже говорил, эти инструменты будут особенно полезны для модулей сторонних разработчиков, которые не верят в документацию.
