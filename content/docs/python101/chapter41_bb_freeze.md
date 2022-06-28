# Глава 41 - bbfreeze

Пакет **bbfreeze** также позволяет нам создавать двоичные файлы, но только в Linux и Windows. Когда вы создаете двоичный файл в Linux, результат будет работать только на машинах, имеющих ту же аппаратную архитектуру и версию libc, что ограничивает его полезность в Linux. Также следует отметить, что bbfreeze работает только с Python версий 2.4 - 2.7. Вы можете использовать easy_install или pip для установки пакета bbfreeze в вашу систему. Пакет bbfreeze включает поддержку egg, поэтому он может включать зависимости eggs в ваши двоичные файлы, в отличие от py2exe. Вы также можете замораживать несколько скриптов одновременно, включать интерпретатор Python и многое другое.

## Начало работы с bbfreeze

Вы можете использовать easy_install для загрузки и установки bbfreeze или просто загрузить его исходники или файл egg непосредственно из Python Package Index (PyPI). В этой статье мы попробуем использовать его на простом скрипте генератора конфигурационных файлов, а также опробуем его на программе wxPython из главы py2exe.

*Примечание: Я тестировал на Windows 7, используя Python 2.7.3, wxPython 2.9.4.0 (classic) и bbfreeze 1.1.3.*

```sh
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

В этом скрипте есть несколько функций, которые довольно бессмысленны, но мы оставим их для примера. Согласно документации bbfreeze, мы должны быть в состоянии создать двоичный файл со следующей строкой, введенной в командную строку:

```sh
bb-freeze config_1.py
```

Это предполагает, что в вашем пути есть **C:\Python27\Scripts**. Если у вас его нет, вам придется ввести полный путь (например, **C:\Python27\Scripts\bb-freeze config_1.py**). Если вы запустите его, вы должны увидеть, как создается папка с именем **dist**. Вот как выглядела моя папка после запуска **config_1.exe**:

![](bb_config.jpg)

Вы заметите, что при запуске исполняемого файла он создает файл конфигурации **sampleconfig2.ini**. Вы можете увидеть предупреждение о том, что пакет pywin32 не установлен. Вы можете проигнорировать это предупреждение или загрузить и установить **pywin32**.

Теперь мы готовы двигаться дальше и попытаться создать исполняемый файл из кода, использующего wxPython!

## Продвинутой расширенной конфигурации bbfreeze

На странице PyPI для bbfreeze (которая также является его домашней страницей) очень мало документации. Однако там говорится, что предпочтительный способ использования bbfreeze - это небольшие скрипты. Мы попробуем создать двоичный файл с помощью примера wxPython, упомянутого ранее. Вот код wx:

```sh
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

Теперь давайте создадим простой скрипт freezing!

```sh
# bb_setup.py
from bbfreeze import Freezer

f = Freezer(distdir="bb-binary")
f.addScript("sampleApp.py")
f()
```

Прежде всего, мы импортируем класс **Freezer** из пакета **bbfreeze**. Freezer принимает три аргумента: папку назначения, итерабельную переменную **includes** и итерабельную переменную **excludes** (т.е. кортеж или список). Чтобы посмотреть, насколько хорошо работает bbfreeze с настройками по умолчанию, мы опустим кортежи/списки include и excludes. Как только у вас есть объект Freezer, вы можете добавить свой сценарий(и), вызвав метод addScript имени объекта Freezer. Затем вам нужно просто вызвать объект (например, **f()** ).

**Примечание: Вы можете увидеть предупреждение о том, что bb_freeze не может найти "MSVCP90.dll" или что-то подобное. Если вы увидите такое сообщение, возможно, вам придется включить его явно или добавить в качестве зависимости при создании программы установки. О том, как создать программу установки, мы узнаем в одной из следующих глав.**

Чтобы запустить этот сценарий, нужно сделать примерно следующее:

```sh
python bb_setup.py
```

Когда я запустил этот скрипт, он создал папку с именем **bb-binary**, содержащую 19 файлов размером 17,2 МБ. Когда я запустил файл **sampleApp.exe**, он прекрасно запустился и был правильно оформлен, однако у него также был экран консоли. Нам придется немного отредактировать наш сценарий, чтобы исправить это:

```sh
# bb_setup2.py
from bbfreeze import Freezer

includes = []
excludes = ['_gtkagg', '_tkagg', 'bsddb', 'curses', 'email', 'pywin.debugger',
            'pywin.debugger.dbgcon', 'pywin.dialogs', 'tcl',
            'Tkconstants', 'Tkinter']

bbFreeze_Class = Freezer('dist', includes=includes, excludes=excludes)

bbFreeze_Class.addScript("sampleApp.py", gui_only=True)

bbFreeze_Class.use_compression = 0
bbFreeze_Class.include_py = True
bbFreeze_Class()
```

Если вы запустите его, то в итоге получите папку **dist** с примерно 19 файлами, но немного другого размера - 19,6 МБ. Обратите внимание, что мы добавили второй аргумент в метод addScript: gui_only=True. Благодаря этому раздражающая консоль исчезнет. Мы также установили сжатие на ноль (без сжатия) и включили интерпретатор Python. Включение сжатия только уменьшило результат до 17,2 МБ.

Пакет bbfreeze также работает с "рецептами" и включает несколько примеров, однако они не очень хорошо документированы. Не стесняйтесь изучить их самостоятельно в качестве упражнения.

##Подведение итогов

Теперь вы должны знать основы использования bbfreeze для создания двоичных файлов из ваших программ. Я заметил, что когда я запускал bbfreeze на своей машине, он значительно медленнее создавал исполняемый файл wxPython по сравнению с py2exe. Это одна из тех вещей, с которыми вам придется экспериментировать, когда вы будете определять, какой инструмент использовать для создания двоичных файлов.
