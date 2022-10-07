---
title: 30. ConfigObj
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
weight: 30
---


Python поставляется с удобным модулем под названием **ConfigParser**. Он хорошо подходит для создания и чтения конфигурационных файлов (они же INI-файлы). Однако Майкл Форд (автор IronPython in Action) и Никола Лароса решили написать свой собственный модуль конфигурации под названием **ConfigObj**. Во многих отношениях он является улучшением модуля стандартной библиотеки. Например, при чтении файла конфигурации он возвращает объект, похожий на словарь. ConfigObj также может понимать некоторые типы Python. Еще одна интересная особенность заключается в том, что вы можете создать спецификацию конфигурации, которую ConfigObj будет использовать для проверки файла конфигурации.

## Начало работы

Прежде всего, вам нужно получить ConfigObj. Сейчас самое время использовать знания из последней главы об установке пакетов. Вот как можно получить ConfigObj с помощью pip:

```sh
pip install configobj
```

После того как вы установили его, мы можем двигаться дальше. Для начала откройте текстовый редактор и создайте файл с таким содержимым:

```python
product = Sony PS3
accessories = controller, eye, memory stick
# This is a comment that will be ignored
retail_price = $400
```

Сохраните его в любом удобном для вас месте. Я назову свой файл config.ini. Теперь давайте посмотрим, как можно использовать ConfigObj для извлечения этой информации:

```python
>>> from configobj import ConfigObj
>>> config = ConfigObj(r"path to config.ini")
>>> config["product"]
'Sony PS3'
>>> config["accessories"]
['controller', 'eye', 'memory stick']
>>> type(config["accessories"])
<type 'list'>

```

Как вы можете видеть, ConfigObj использует API **dict** Python для доступа к извлеченной информации. Чтобы заставить ConfigObj разобрать файл, достаточно передать ConfigObj путь к файлу. Если бы информация находилась в разделе (например, [Sony]), то вам пришлось бы предварительно поместить все в ["Sony"], например, так: **config["Sony"]["product"]**. Также обратите внимание, что раздел accessories был возвращен в виде списка строк. ConfigObj возьмет любую допустимую строку со списком, разделенным запятыми, и вернет ее в виде списка Python. Вы также можете создавать многострочные строки в конфигурационном файле при условии, что вы заключите их в тройные одинарные или двойные кавычки.

Если вам нужно создать подраздел в файле, то используйте дополнительные квадратные скобки. Например, **[Sony]** - это верхний раздел, **[[Playstation]]** - подраздел, а **[[[PS3]]** - подраздел подраздела. Вы можете создавать подразделы любой глубины. Для получения дополнительной информации о форматировании файла я рекомендую прочитать документацию ConfigObj.

Теперь мы сделаем обратное и создадим конфигурационный файл программно.

```python
import configobj

def createConfig(path):
    config = configobj.ConfigObj()
    config.filename = path
    config["Sony"] = {}
    config["Sony"]["product"] = "Sony PS3"
    config["Sony"]["accessories"] = ['controller', 'eye', 'memory stick']
    config["Sony"]["retail price"] = "$400"
    config.write()

if __name__ == "__main__":
    createConfig("config.ini")
```

Как вы можете видеть, все, что для этого потребовалось, - это 13 строк кода. В приведенном выше коде мы создаем функцию и передаем ей путь к нашему файлу конфигурации. Затем мы создаем объект ConfigObj и устанавливаем его свойство filename. Для создания секции мы создаем пустой dict с именем "Sony". Затем таким же образом добавляем каждую строку содержимого секции. Наконец, мы вызываем метод write нашего объекта config, чтобы записать данные в файл.

## Использование configspec

ConfigObj также предоставляет способ проверки ваших конфигурационных файлов с помощью **configspec**. Когда я упомянул, что собираюсь написать на эту тему, Стивен Спраут (Steven Sproat, создатель Whyteboard) предложил свой код configspec в качестве примера. Я взял его спецификацию и использовал ее для создания конфигурационного файла по умолчанию. В этом примере для проверки мы используем модуль validate от Foord. Я не думаю, что он включен в вашу загрузку ConfigObj, поэтому вам может понадобиться загрузить и его. Теперь давайте посмотрим на код:

```python
import configobj, validate

cfg = """
bmp_select_transparent = boolean(default=False)
canvas_border = integer(min=10, max=35, default=15)
colour1 = list(min=3, max=3, default=list('280', '0', '0'))
colour2 = list(min=3, max=3, default=list('255', '255', '0'))
colour3 = list(min=3, max=3, default=list('0', '255', '0'))
colour4 = list(min=3, max=3, default=list('255', '0', '0'))
colour5 = list(min=3, max=3, default=list('0', '0', '255'))
colour6 = list(min=3, max=3, default=list('160', '32', '240'))
colour7 = list(min=3, max=3, default=list('0', '255', '255'))
colour8 = list(min=3, max=3, default=list('255', '165', '0'))
colour9 = list(min=3, max=3, default=list('211', '211', '211'))
convert_quality = option('highest', 'high', 'normal', default='normal')
default_font = string
default_width = integer(min=1, max=12000, default=640)
default_height = integer(min=1, max=12000, default=480)
imagemagick_path = string
handle_size = integer(min=3, max=15, default=6)
language = option('English', 'English (United Kingdom)', 'Russian',
                  'Hindi', default='English')
print_title = boolean(default=True)
statusbar = boolean(default=True)
toolbar = boolean(default=True)
toolbox = option('icon', 'text', default='icon')
undo_sheets = integer(min=5, max=50, default=10)
"""

def createConfig(path):
    """
    Create a config file using a configspec
    and validate it against a Validator object
    """
    spec = cfg.split("\n")
    config = configobj.ConfigObj(path, configspec=spec)
    validator = validate.Validator()
    config.validate(validator, copy=True)
    config.filename = path
    config.write()

if __name__ == "__main__":
    createConfig("config.ini")
```

configspec дает программисту возможность указать, какие **типы** возвращаются для каждой строки в конфигурационном файле. Он также может быть использован для установки значения по умолчанию, **min** и **max** значений (среди прочего). Если вы выполните приведенный выше код, вы увидите, что в текущем рабочем каталоге будет создан файл config.ini, содержащий только значения по умолчанию. Если программист не указал значение по умолчанию, то эта строка даже не будет добавлена в конфигурацию.

Давайте рассмотрим происходящее подробнее, чтобы убедиться, что вы все поняли. В функции **createConfig** мы создаем экземпляр ConfigObj, передавая путь к файлу и задавая configspec. Обратите внимание, что configspec может быть обычным текстовым файлом или файлом python, а не строкой, как в этом примере. Далее мы создаем объект Validator. Обычное использование - просто вызвать config.validate(validator), но в этом коде я установил аргумент copy в True, чтобы можно было создать файл. В противном случае, все, что бы он сделал, это проверил, что файл, который я передал, соответствует правилам configspec. Наконец, я задаю имя файла конфига и записываю данные.

## Подведение итогов

Теперь вы знаете достаточно, чтобы начать работу с **ConfigObj**. Надеюсь, вы найдете его полезным, как и я. Не забудьте обратиться к документации модуля и прочитать больше о том, что он и validate могут делать.
