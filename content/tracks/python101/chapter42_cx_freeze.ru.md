---
title: 42. cx_Freeze
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
weight: 42
---

В этой главе мы познакомимся с **cx_Freeze**, кроссплатформенным набором скриптов, предназначенных для **freeze** скриптов Python в исполняемые файлы, подобно py2exe, PyInstaller и т.д. Мы заморозим один консольный скрипт и один оконный (т.е. GUI) скрипт, используя примеры из предыдущей главы. Инструмент cx_Freeze - **единственный** инструмент создания двоичных файлов, который на данный момент может работать как с Python 2.x, так и с 3.x на различных операционных системах. В этой главе мы будем использовать его с Python 2.7 только потому, что хотим сравнить его с другими инструментами создания двоичных файлов.

Вы можете установить cx_Freeze с помощью одного из их инсталляторов для Windows, через предоставленные ими RPM для Linux, через исходный RPM или непосредственно из исходного кода. Вы также можете использовать **pip** для установки cx_Freeze.

*Примечание: Я тестировал на Windows 7, используя Python 2.7.3, wxPython 2.9.4.0 (classic) и cx_Freeze 4.3.2.*

## Начало работы с cx_Freeze

Как указано на сайте cx_Freeze, существует три способа использования этого скрипта. Первый - просто использовать прилагаемый скрипт cxfreeze; второй - создать установочный скрипт distutils (думаю о py2exe), который вы можете сохранить для дальнейшего использования; и третий - работать с внутренними компонентами cxfreeze. Мы сосредоточимся на первых двух способах использования cx_Freeze. Начнем с консольного скрипта:

```python
# config_1.py
import configobj

def createConfig(configFile):
    """
    Create the configuration file
    """
    config = configobj.ConfigObj()
    inifile = configFile
    config.filename = inifile
    config['server'] = "http://www.google.com"
    config['username'] = "mike"
    config['password'] = "dingbat"
    config['update interval'] = 2
    config.write()

def getConfig(configFile):
    """
    Open the config file and return a configobj
    """
    return configobj.ConfigObj(configFile)

def createConfig2(path):
    """
    Create a config file
    """
    config = configobj.ConfigObj()
    config.filename = path
    config["Sony"] = {}
    config["Sony"]["product"] = "Sony PS3"
    config["Sony"]["accessories"] = ['controller', 'eye', 'memory stick']
    config["Sony"]["retail price"] = "$400"
    config.write()

if __name__ == "__main__":
    createConfig2("sampleConfig2.ini")
```

Все, что делает этот скрипт, это создает действительно простой конфигурационный файл, используя модуль **configobj** Майкла Фоорда. Вы можете настроить его и на чтение конфигурации, но для данного примера мы это пропустим. Давайте узнаем, как собрать бинарник с помощью cx_Freeze! Согласно документации, для этого достаточно ввести в командную строку следующую строку (при условии, что вы находитесь в правильной директории):

```python
cxfreeze config_1.py --target-dir dirName
```

Это предполагает, что в вашем пути есть **C:\PythonXX\Scripts**. Если это не так, вам придется либо исправить это, либо ввести полный путь. В любом случае, если скрипт cxfreeze запущен правильно, у вас должна быть папка со следующим содержимым:

![](../img/cx_config.ru.jpg)

Как вы можете видеть, общий размер файла должен составлять около 5 мегабайт. Это было довольно просто. Он даже подхватил модуль configobj без нашей просьбы. Есть 18 аргументов командной строки, которые вы можете передать cx_Freeze, чтобы управлять его действиями. Они варьируются от того, какие модули включать или исключать, оптимизировать, сжимать, включать zip-файл, манипулировать путями и многое другое.

Теперь давайте попробуем кое-что более продвинутое.

## Продвинутый cx_Freeze - использование файла setup.py

Прежде всего, нам нужен скрипт, который мы будем использовать. Мы будем использовать пример формы wxPython из предыдущих глав.

```python
import wx

class DemoPanel(wx.Panel):
    """"""

    def __init__(self, parent):
        """Constructor"""
        wx.Panel.__init__(self, parent)

        labels = ["Name", "Address", "City", "State", "Zip",
                  "Phone", "Email", "Notes"]

        mainSizer = wx.BoxSizer(wx.VERTICAL)
        lbl = wx.StaticText(self, label="Please enter your information here:")
        lbl.SetFont(wx.Font(12, wx.SWISS, wx.NORMAL, wx.BOLD))
        mainSizer.Add(lbl, 0, wx.ALL, 5)
        for lbl in labels:
            sizer = self.buildControls(lbl)
            mainSizer.Add(sizer, 1, wx.EXPAND)
        self.SetSizer(mainSizer)
        mainSizer.Layout()

    def buildControls(self, label):
        """
        Put the widgets together
        """
        sizer = wx.BoxSizer(wx.HORIZONTAL)
        size = (80,40)
        font = wx.Font(12, wx.SWISS, wx.NORMAL, wx.BOLD)

        lbl = wx.StaticText(self, label=label, size=size)
        lbl.SetFont(font)
        sizer.Add(lbl, 0, wx.ALL|wx.CENTER, 5)
        if label != "Notes":
            txt = wx.TextCtrl(self, name=label)
        else:
            txt = wx.TextCtrl(self, style=wx.TE_MULTILINE, name=label)
        sizer.Add(txt, 1, wx.ALL, 5)
        return sizer

class DemoFrame(wx.Frame):
    """
    Frame that holds all other widgets
    """

    def __init__(self):
        """Constructor"""
        wx.Frame.__init__(self, None, wx.ID_ANY,
                          "Py2Exe Tutorial",
                          size=(600,400)
                          )
        panel = DemoPanel(self)
        self.Show()

if __name__ == "__main__":
    app = wx.App(False)
    frame = DemoFrame()
    app.MainLoop()

```

Теперь давайте создадим файл **setup.py** в стиле cx_Freeze:

```python
# setup.py
from cx_Freeze import setup, Executable

setup(
    name = "wxSampleApp",
    version = "0.1",
    description = "An example wxPython script",
    executables = [Executable("sampleApp.py")]
    )
```

Как вы можете видеть, это довольно просто. Мы импортируем пару классов из cx_Freeze и передаем в них некоторые параметры. В данном случае мы даем классу setup имя, версию, описание и класс Executable. Класс Executable также получает один параметр - имя скрипта, который он будет использовать для создания бинарного файла.

В качестве альтернативы вы можете создать простой setup.py с помощью команды quickstart cx_Freeze (если она находится в пути вашей системы) в той же папке, что и ваш код:

cxfreeze-quickstart

Чтобы заставить setup.py собрать двоичный файл, вам нужно сделать следующее в командной строке:

```python
python setup.py build
```

После запуска у вас должны появиться следующие папки: **buildexe.win32-2.7.** Внутри последней папки у меня оказалось 15 файлов общим размером 16,6 МБ. Когда вы запустите файл sampleApp.exe, вы заметите, что мы что-то испортили. В дополнение к нашему графическому интерфейсу загружается окно консоли! Чтобы исправить это, нам нужно немного изменить наш установочный файл. Взгляните на наш новый файл:

```python
from cx_Freeze import setup, Executable

exe = Executable(
    script="sampleApp.py",
    base="Win32GUI",
    )

setup(
    name = "wxSampleApp",
    version = "0.1",
    description = "An example wxPython script",
    executables = [exe]
    )
```

Во-первых, мы отделили класс Executable от класса setup и присвоили класс Executable переменной. Мы также добавили второй параметр к классу Executable, который является ключевым. Этот параметр называется **base**. Установив **base="Win32GUI"**, мы можем подавить консольное окно. В документации на сайте cx_Freeze показано множество других параметров, которые принимает класс Executable.

## Подведение итогов

Теперь вы должны знать, как создавать двоичные файлы с помощью cx_Freeze. Это довольно просто сделать, и в моем тестировании он работал намного быстрее, чем bbfreeze. Если у вас есть необходимость создавать двоичные файлы для Python 2.x и 3.x на всех основных платформах, то этот инструмент для вас!
