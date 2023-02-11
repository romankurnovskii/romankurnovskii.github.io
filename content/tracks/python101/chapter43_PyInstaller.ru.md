---
title: 43. PyInstaller
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
weight: 43
---

PyInstaller - это последний инструмент, который мы рассмотрим для создания двоичных файлов. Он поддерживает Python 2.4 - 2.7. Мы продолжим использовать наши простые консольные и wxPython GUI скрипты для тестирования. PyInstaller должен работать на Windows, Linux, Mac, Solaris и AIX. Поддержка Solaris и AIX является экспериментальной. PyInstaller поддерживает подпись кода (Windows), eggs, скрытый импорт, один исполняемый файл, один каталог и многое другое!


## Начало работы с PyInstaller

Чтобы установить PyInstaller, вы можете скачать исходный код в tarball или zip архиве, распаковать его и запустить его файл **setup.py**:

```sh
python setup.py install
```

Вы также можете установить PyInstaller с помощью pip. Мы начнем с нашего маленького кусочка кода создания конфигурации:

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

Теперь давайте попробуем создать исполняемый файл! Вам должно быть достаточно сделать это, чтобы PyInstaller заработал:

```sh
pyinstaller config_1.py
```

Когда я запустил это, я получил следующую ошибку:

```sh
Error: PyInstaller for Python 2.6+ on Windows needs pywin32.
Please install from http://sourceforge.net/projects/pywin32/
```

Чтобы использовать PyInstaller в Windows, вам нужно сначала установить **PyWin32**! После установки PyWin32 попробуйте повторно запустить эту команду. Вы должны увидеть много вывода на экран, а также две папки рядом с вашим скриптом: **build** и **dist**. Если вы перейдете в папку ***dist**, а затем в ее папку **config_1**, вы должны увидеть что-то вроде этого:

![](../img/pyinstaller.ru.jpg)

Когда я запустил исполняемый файл, он создал файл конфигурации, как и должен был. Вы заметите, что PyInstaller смог захватить **configobj** без вашего указания.

## PyInstaller и wxPython

Теперь давайте попробуем создать двоичный файл из простого скрипта wxPython. Вот код wxPython, который мы использовали в предыдущих главах:

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

Если вы выполните команду **pyinstaller** против этого сценария, вы увидите, что на экран будет выводиться все больше данных. Будет создано 23 файла общим размером 19,4 МБ. Вы также заметите, что когда вы запускаете **sampleApp.exe**, он показывает консольное окно в дополнение к вашему графическому интерфейсу, а это не то, что мы хотим. Самый простой способ исправить это - вызвать PyInstaller с командой **-w**, которая говорит PyInstaller подавить консольное окно:

```sh
pyinstaller -w sampleApp.py
```

Пакет PyInstaller имеет множество опций командной строки, которые вы можете использовать, чтобы изменить способ обработки PyInstaller вашей программы. Каждый раз, когда вы запускаете PyInstaller, он создает файл **spec**, который он использует для обработки вашей программы. Если вы хотите сохранить копию файла спецификации, чтобы лучше понять, что делает PyInstaller, вы можете сделать это с помощью следующей команды:

```sh
pyi-makespec sampleApp.py
```

Вы можете передать pyi-makespec те же команды, что и PyInstaller, который изменит спецификацию соответствующим образом. Вот содержимое спецификации, созданной с помощью предыдущей команды:

```python


# -*- mode: python -*-
a = Analysis(['sampleApp.py'],
             pathex=['c:\\py101\\wxpy'],
             hiddenimports=[],
             hookspath=None,
             runtime_hooks=None)
pyz = PYZ(a.pure)
exe = EXE(pyz,
          a.scripts,
          exclude_binaries=True,
          name='sampleApp.exe',
          debug=False,
          strip=None,
          upx=True,
          console=False )
coll = COLLECT(exe,
               a.binaries,
               a.zipfiles,
               a.datas,
               strip=None,
               upx=True,
               name='sampleApp')


```

В ранних версиях PyInstaller вы должны были создать файл спецификации и редактировать его напрямую. Теперь, если вам не нужно что-то действительно особенное, вы можете сгенерировать нужную спецификацию, просто используя флаги. Обязательно прочитайте документацию для получения полной информации, так как флагов много и их описание выходит за рамки этой главы.

## Подведение итогов

На этом наш краткий экскурс по PyInstaller закончен. Я надеюсь, что вы нашли это полезным в ваших начинаниях по созданию бинарных файлов Python. Проект PyInstaller довольно хорошо задокументирован и стоит того, чтобы потратить на него свое время.
