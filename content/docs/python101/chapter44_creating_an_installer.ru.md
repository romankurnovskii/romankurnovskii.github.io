---
title: 44. Создание программы установки
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
weight: 44
---

В этой главе мы проведем вас через процесс создания исполняемого файла и его последующей упаковки в программу установки. Для создания исполняемого файла мы будем использовать очень аккуратный пользовательский интерфейс GUI2Exe, написанный Андреа Гаваной. Он основан на wxPython, поэтому для его использования вам потребуется его установить. GUI2Exe поддерживает *py2exe*, *bbfreeze*, *cx_Freeze*, *PyInstaller* и *py2app*. После создания папки **dist** мы используем **Inno Setup** для создания нашего инсталлятора.

Мы снова будем использовать следующий код:

```python
# sampleApp.py

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

Давайте начнем!

## Начало работы с GUI2Exe

Чтобы использовать GUI2Exe, нужно просто зайти на его сайт (http://code.google.com/p/gui2exe/) и скачать релиз. Затем распаковать его и запустить скрипт, который называется GUI2Exe.py. Проект **GUI2Exe** основан на wxPython, поэтому убедитесь, что он у вас тоже установлен. Я успешно запустил свой проект с wxPython 2.9. Вот как его можно вызвать:

```python
python GUI2Exe.py
```

При успешном выполнении вы должны увидеть экран, похожий на этот:

![](../img/gui2exe.jpg)

Теперь перейдите в меню Файл -> Новый проект и дайте проекту имя. В данном случае я назвал проект **wxForm**. Если вы хотите, вы можете добавить вымышленное название компании, авторские права и дать ему название программы. Не забудьте также найти ваш основной Python-скрипт (т.е. **sampleApp.py**). Согласно сайту Андреа, вы должны установить значение **Optimize** на **2, Compressed** на **2** и **Bundled Files** на **1**. В большинстве случаев это работает, но у меня было несколько ошибок, которые, похоже, возникли из-за установки последнего значения на **1**. На самом деле, по словам одного из моих знакомых из списка рассылки py2exe, опция **bundle** должна быть установлена на **3**, чтобы минимизировать ошибки. Приятно, что при установке bundle в "1" получается всего один файл, но поскольку я собираюсь свернуть его с Inno, я собираюсь использовать вариант 3, чтобы убедиться, что моя программа работает хорошо.

После того, как все будет сделано так, как вы хотите, нажмите кнопку **Compile** в правом нижнем углу. Это создаст все файлы, которые вы хотите распространять, в папке **dist**, если вы не изменили название, установив **dist checkbox** и отредактировав последующее текстовое поле. После завершения компиляции GUI2Exe спросит вас, хотите ли вы протестировать ваш исполняемый файл. Нажимайте **"Yes"**. Если вы получите какие-либо ошибки о недостающих модулях, вы можете добавить их в раздел **Python Modules** или **Python Packages** в зависимости от ситуации. В данном примере такой проблемы возникнуть не должно.

Теперь мы готовы к изучению создания программы установки!

## Давайте создадим программу установки!

Теперь, когда у нас есть исполняемый файл и куча зависимостей, как нам сделать программу установки? В этой главе мы будем использовать Inno Setup, но вы также можете использовать NSIS или фирменную программу установки Microsoft. Вам нужно будет перейти на их сайт (http://www.jrsoftware.org/isdl.php), скачать программу и установить ее. Затем запустите программу. Вы должны увидеть главную программу со следующим диалоговым окном поверх нее:

![](../img/inno_welcome.jpg)

Выберите опцию **Create a new script using the Script Wizard** и нажмите кнопку OK. Нажмите кнопку **Next**, и вы должны увидеть что-то вроде этого:

![](../img/inno_setup_1.jpg)

Заполните его, как вам нравится, и нажмите кнопку **Next** (я назвал свой скрипт **wxForm**). На следующем экране вы можете выбрать место установки приложения по умолчанию. По умолчанию это **Program Files*(), что вполне подходит. Нажмите кнопку **Next**. Теперь вы должны увидеть следующее окно:

![](../img/inno_setup_2.jpg)

Перейдите к созданному исполняемому файлу, чтобы добавить его. Затем нажмите кнопку **Add file(s)... **, чтобы добавить остальные. Вы можете выбрать все файлы, кроме exe, и нажать OK. Вот как получилось у меня:

![](../img/inno_setup_3.jpg)

Теперь вы готовы нажать кнопку **Next**. Убедитесь, что папка меню Пуск имеет правильное имя (в данном случае **wxForm**) и продолжайте. Вы можете проигнорировать следующие два экрана или поэкспериментировать с ними, если хотите. Однако я не использую лицензию и не помещаю информационные файлы для отображения пользователю. Последний экран перед завершением работы позволяет выбрать каталог, в который будет помещен вывод. Я оставил это поле пустым, так как по умолчанию оно указывает на место расположения исполняемого файла, что вполне подходит для данного примера. Нажмите кнопку **Next**, **Next** и **Finish**. Будет создан полноценный файл .iss, который Inno Setup использует для превращения вашего приложения в программу установки. Он спросит вас, хотите ли вы продолжить компиляцию скрипта сейчас. Сделайте это. Затем он спросит, хотите ли вы сохранить сценарий в формате **.iss**. Это хорошая идея, поэтому сделайте и это. Надеюсь, вы не получили никаких ошибок и можете опробовать новую программу установки.

Если вам интересно узнать о языке сценариев Inno, не стесняйтесь читать документацию Inno. Вы можете сделать с его помощью довольно много. Если вы случайно внесли изменения в сценарий сборки, вы можете пересобрать программу установки, перейдя в меню **build** и выбрав пункт меню **compile**.

## Подведение итогов

Теперь вы знаете, как создать настоящий, живой инсталлятор, который можно использовать для установки вашего приложения и любых файлов, необходимых для его работы. Это особенно удобно, когда у вас есть множество пользовательских значков для панелей инструментов или база данных по умолчанию, файл конфигурации и т.д., которые нужно распространять вместе с приложением. Вернитесь и попробуйте создать программу установки снова, но выберите другие варианты, чтобы посмотреть, что еще можно сделать. Экспериментирование - отличный способ обучения. Только убедитесь, что у вас всегда есть резервная копия на случай, если что-то пойдет не так!