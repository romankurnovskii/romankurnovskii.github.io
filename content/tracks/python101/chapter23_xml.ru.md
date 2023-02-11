---
title: 23. Модуль xml
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
weight: 23
---

Python имеет встроенные возможности разбора XML, доступ к которым можно получить с помощью модуля **xml**. В этой статье мы сосредоточимся на двух подмодулях модуля xml:

-  minidom
-  ElementTree .

Мы начнем с minidom просто потому, что этот метод раньше был де-факто методом разбора XML. Затем мы рассмотрим, как вместо него использовать ElementTree.

## Работа с minidom

Для начала необходимо разобрать XML. Взгляните на следующий короткий пример XML:

```xml
<?xml version="1.0" ?>
<zAppointments reminder="15">
    <appointment>
        <begin>1181251680</begin>
        <uid>040000008200E000</uid>
        <alarmTime>1181572063</alarmTime>
        <state></state>
        <location></location>
        <duration>1800</duration>
        <subject>Bring pizza home</subject>
    </appointment>
</zAppointments>
```

Это довольно типичный XML, и на самом деле он довольно интуитивно понятен для чтения. В будущем вы, скорее всего, столкнетесь с более сложным примером XML, так что в нашем случае мы работаем с очень удобным материалом. В любом случае, сохраните описанный выше код XML под следующим названием:  *appt.xml*

Давайте потратим некоторое время на ознакомление с тем, как разобрать этот файл с помощью модуля Python **minidom**. Это довольно длинный кусок кода, так что приготовьтесь.

```python
import xml.dom.minidom
import urllib.request

class ApptParser(object):

    def __init__(self, url, flag='url'):
        self.list = []
        self.appt_list = []
        self.flag = flag
        self.rem_value = 0
        xml = self.getXml(url)
        self.handleXml(xml)

    def getXml(self, url):
        try:
            print(url)
            f = urllib.request.urlopen(url)
        except:
            f = url

        doc = xml.dom.minidom.parse(f)
        node = doc.documentElement
        if node.nodeType == xml.dom.Node.ELEMENT_NODE:
            print('Element name: %s' % node.nodeName)
            for (name, value) in node.attributes.items():
                print('    Attr -- Name: %s  Value: %s' % (name, value))

        return node

    def handleXml(self, xml):
        rem = xml.getElementsByTagName('zAppointments')
        appointments = xml.getElementsByTagName("appointment")
        self.handleAppts(appointments)

    def getElement(self, element):
        return self.getText(element.childNodes)

    def handleAppts(self, appts):
        for appt in appts:
            self.handleAppt(appt)
            self.list = []

    def handleAppt(self, appt):
        begin     = self.getElement(appt.getElementsByTagName("begin")[0])
        duration  = self.getElement(appt.getElementsByTagName("duration")[0])
        subject   = self.getElement(appt.getElementsByTagName("subject")[0])
        location  = self.getElement(appt.getElementsByTagName("location")[0])
        uid       = self.getElement(appt.getElementsByTagName("uid")[0])

        self.list.append(begin)
        self.list.append(duration)
        self.list.append(subject)
        self.list.append(location)
        self.list.append(uid)
        if self.flag == 'file':

            try:
                state     = self.getElement(appt.getElementsByTagName("state")[0])
                self.list.append(state)
                alarm     = self.getElement(appt.getElementsByTagName("alarmTime")[0])
                self.list.append(alarm)
            except Exception as e:
                print(e)

        self.appt_list.append(self.list)

    def getText(self, nodelist):
        rc = ""
        for node in nodelist:
            if node.nodeType == node.TEXT_NODE:
                rc = rc + node.data
        return rc

if __name__ == "__main__":
    appt = ApptParser("appt.xml")
    print(appt.appt_list)
```

Этот код основан на примере из документации Python, и я должен признать, что моя мутация этого кода кажется мне немного уродливой. Давайте немного разберем этот код. Параметр url, который вы видите в классе **ApptParser**, может быть либо url, либо файлом. В методе **getXml** мы используем обработчик исключений, чтобы попытаться открыть url. Если он выдает ошибку, то мы считаем, что url - это путь к файлу. Далее мы используем метод minidom's **parse** для разбора XML. Затем мы извлекаем узел из XML. Мы проигнорируем условие, поскольку оно не имеет значения для данного обсуждения. Наконец, мы возвращаем объект **node**.

Технически, node - это XML, и мы передаем его методу **handleXml**. Чтобы получить все экземпляры назначений в XML, мы делаем следующее:

```python
xml.getElementsByTagName("appointment").
```

Затем мы передаем эту информацию в метод **handleAppts**. Это большой объем информации. Возможно, было бы неплохо немного отрефакторить этот код, чтобы вместо передачи информации он просто устанавливал переменные класса, а затем вызывал следующий метод без каких-либо аргументов. Я оставлю это в качестве упражнения для читателя. В любом случае, все, что делает метод **handleAppts**, это перебирает каждую встречу и вызывает метод **handleAppt**, чтобы извлечь из нее некоторую дополнительную информацию, добавить данные в список и добавить этот список в другой список. Идея заключалась в том, чтобы в итоге получить список списков, содержащих все необходимые данные о моих встречах.

Вы заметите, что метод handleAppt вызывает метод **getElement**, который вызывает метод **getText**. Технически, вы можете пропустить вызов getElement и просто вызвать getText напрямую. С другой стороны, вам может потребоваться дополнительная обработка getElement для преобразования текста в другой тип перед возвращением его обратно. Например, вы можете захотеть преобразовать числа в целые числа, плавающие или объекты decimal.Decimal.

Давайте попробуем еще один пример с minidom, прежде чем двигаться дальше. Мы будем использовать пример XML с сайта Microsoft MSDN: http://msdn.microsoft.com/en-us/library/ms762271%28VS.85%29.aspx. Сохраните следующий XML как *example.xml*

```xml
<?xml version="1.0"?>
<catalog>
   <book id="bk101">
      <author>Gambardella, Matthew</author>
      <title>XML Developer's Guide</title>
      <genre>Computer</genre>
      <price>44.95</price>
      <publish_date>2000-10-01</publish_date>
      <description>An in-depth look at creating applications
      with XML.</description>
   </book>
   <book id="bk102">
      <author>Ralls, Kim</author>
      <title>Midnight Rain</title>
      <genre>Fantasy</genre>
      <price>5.95</price>
      <publish_date>2000-12-16</publish_date>
      <description>A former architect battles corporate zombies,
      an evil sorceress, and her own childhood to become queen
      of the world.</description>
   </book>
   <book id="bk103">
      <author>Corets, Eva</author>
      <title>Maeve Ascendant</title>
      <genre>Fantasy</genre>
      <price>5.95</price>
      <publish_date>2000-11-17</publish_date>
      <description>After the collapse of a nanotechnology
      society in England, the young survivors lay the
      foundation for a new society.</description>
   </book>
</catalog>
```

В данном примере мы просто разберем XML, извлечем названия книг и выведем их в stdout. Вот код:

```python
import xml.dom.minidom as minidom

def getTitles(xml):
    """
    Print out all titles found in xml
    """
    doc = minidom.parse(xml)
    node = doc.documentElement
    books = doc.getElementsByTagName("book")

    titles = []
    for book in books:
        titleObj = book.getElementsByTagName("title")[0]
        titles.append(titleObj)

    for title in titles:
        nodes = title.childNodes
        for node in nodes:
            if node.nodeType == node.TEXT_NODE:
                print(node.data)

if __name__ == "__main__":
    document = 'example.xml'
    getTitles(document)
```

Этот код - всего лишь одна короткая функция, принимающая один аргумент - XML-файл. Мы импортируем модуль minidom и даем ему такое же имя, чтобы на него было легче ссылаться. Затем мы разбираем XML. Первые две строки в функции практически такие же, как и в предыдущем примере. Мы используем метод **getElementsByTagName** для захвата нужных нам частей XML, затем перебираем результаты и извлекаем из них названия книг. На самом деле извлекаются объекты заголовков, поэтому нам нужно также выполнить итерацию и извлечь обычный текст, для чего мы используем вложенный цикл **for**.

Теперь давайте уделим немного времени на то, чтобы опробовать другой подмодуль модуля xml под названием **ElementTree**.

## Парсинг с помощью ElementTree

В этом разделе вы узнаете, как создать XML-файл, отредактировать XML и разобрать XML с помощью ElementTree. Для сравнения мы будем использовать тот же XML, который мы использовали в предыдущем разделе, чтобы проиллюстрировать различия между использованием minidom и ElementTree. Вот исходный XML:

```xml
<?xml version="1.0" ?>
<zAppointments reminder="15">
    <appointment>
        <begin>1181251680</begin>
        <uid>040000008200E000</uid>
        <alarmTime>1181572063</alarmTime>
        <state></state>
        <location></location>
        <duration>1800</duration>
        <subject>Bring pizza home</subject>
    </appointment>
</zAppointments>
```

Давайте начнем с изучение того, как создать этот фрагмент XML программно с помощью Python!

## Как создать XML с помощью ElementTree

Создать XML с помощью ElementTree очень просто. В этом разделе мы попытаемся создать приведенный выше XML с помощью Python. Вот код:

```python
import xml.etree.ElementTree as xml

def createXML(filename):
    """
    Create an example XML file
    """
    root = xml.Element("zAppointments")
    appt = xml.Element("appointment")
    root.append(appt)

    # add appointment children
    begin = xml.SubElement(appt, "begin")
    begin.text = "1181251680"

    uid = xml.SubElement(appt, "uid")
    uid.text = "040000008200E000"

    alarmTime = xml.SubElement(appt, "alarmTime")
    alarmTime.text = "1181572063"

    state = xml.SubElement(appt, "state")

    location = xml.SubElement(appt, "location")

    duration = xml.SubElement(appt, "duration")
    duration.text = "1800"

    subject = xml.SubElement(appt, "subject")

    tree = xml.ElementTree(root)
    with open(filename, "w") as fh:
        tree.write(fh)

if __name__ == "__main__":
    createXML("appt.xml")
```

Если вы запустите этот код, вы должны получить что-то вроде нижеизложенного (возможно, все в одной строке):

```sh
<zAppointments>
    <appointment>
        <begin>1181251680</begin>
        <uid>040000008200E000</uid>
        <alarmTime>1181572063</alarmTime>
        <state />
        <location />
        <duration>1800</duration>
        <subject />
    </appointment>
</zAppointments>
```

Это довольно близко к оригиналу и, безусловно, является действительным XML. Хотя это не совсем то же самое, но достаточно близко. Давайте уделим немного времени коду и убедимся, что мы его поняли. Сначала мы создаем корневой элемент с помощью функции ElementTree's Element. Затем мы создаем элемент назначения и добавляем его к корню. Затем мы создаем подэлементы, передавая объект элемента назначения (appt) в SubElement вместе с именем, например "begin". Затем для каждого подэлемента мы устанавливаем свойство text, чтобы придать ему значение. В конце сценария мы создаем ElementTree и используем его для записи XML в файл.

Теперь мы готовы узнать, как редактировать этот файл!

## Как редактировать XML с помощью ElementTree

Редактировать XML с помощью ElementTree также просто. Однако, чтобы сделать все немного интереснее, мы добавим в XML еще один блок назначений:

```xml
<?xml version="1.0" ?>
<zAppointments reminder="15">
    <appointment>
        <begin>1181251680</begin>
        <uid>040000008200E000</uid>
        <alarmTime>1181572063</alarmTime>
        <state></state>
        <location></location>
        <duration>1800</duration>
        <subject>Bring pizza home</subject>
    </appointment>
        <appointment>
        <begin>1181253977</begin>
        <uid>sdlkjlkadhdakhdfd</uid>
        <alarmTime>1181588888</alarmTime>
        <state>TX</state>
        <location>Dallas</location>
        <duration>1800</duration>
        <subject>Bring pizza home</subject>
    </appointment>
</zAppointments>
```

Теперь давайте напишем код, чтобы изменить значение каждого из тегов begin с секунд с момента эпохи на что-то более удобочитаемое. Для этого мы воспользуемся модулем **time** Python:

```python
import time
import xml.etree.cElementTree as ET

def editXML(filename):
    """
    Edit an example XML file
    """
    tree = ET.ElementTree(file=filename)
    root = tree.getroot()

    for begin_time in root.iter("begin"):
        begin_time.text = time.ctime(int(begin_time.text))

    tree = ET.ElementTree(root)
    with open("updated.xml", "w") as f:
        tree.write(f)

if __name__ == "__main__":
    editXML("original_appt.xml")
```

Здесь мы создаем объект ElementTree (дерево) и извлекаем из него **root**. Затем мы используем метод **iter()** ElementTree, чтобы найти все теги с меткой "begin". Обратите внимание, что метод iter() был добавлен в Python 2.7. В нашем цикле for мы устанавливаем свойство text каждого элемента в более удобочитаемый для человека формат времени с помощью **time.ctime()**. Обратите внимание, что при передаче строки в ctime нам пришлось преобразовать ее в целое число. Результат должен выглядеть примерно следующим образом:

```xml
<zAppointments reminder="15">
    <appointment>
        <begin>Thu Jun 07 16:28:00 2007</begin>
        <uid>040000008200E000</uid>
        <alarmTime>1181572063</alarmTime>
        <state />
        <location />
        <duration>1800</duration>
        <subject>Bring pizza home</subject>
    </appointment>
    <appointment>
        <begin>Thu Jun 07 17:06:17 2007</begin>
        <uid>sdlkjlkadhdakhdfd</uid>
        <alarmTime>1181588888</alarmTime>
        <state>TX</state>
        <location>Dallas</location>
        <duration>1800</duration>
        <subject>Bring pizza home</subject>
    </appointment>
</zAppointments>

```
Вы также можете использовать методы **find()** или **findall()** ElementTree для поиска определенных тегов в вашем XML. Метод find() просто найдет первый экземпляр, тогда как findall() найдет все теги с указанной меткой. Эти методы полезны для редактирования или для разбора, о чем мы поговорим в следующей теме!

## Как разобрать XML с помощью ElementTree

Теперь мы научимся выполнять базовый разбор с помощью ElementTree. Сначала мы прочитаем код, а затем пройдемся по нему шаг за шагом, чтобы понять его. Обратите внимание, что этот код основан на первоначальном примере, но он должен работать и на втором.


```python
import xml.etree.cElementTree as ET

def parseXML(xml_file):
    """
    Parse XML with ElementTree
    """
    tree = ET.ElementTree(file=xml_file)
    print(tree.getroot())
    root = tree.getroot()
    print("tag=%s, attrib=%s" % (root.tag, root.attrib))

    for child in root:
        print(child.tag, child.attrib)
        if child.tag == "appointment":
            for step_child in child:
                print(step_child.tag)

    # iterate over the entire tree
    print("-" * 40)
    print("Iterating using a tree iterator")
    print("-" * 40)
    iter_ = tree.getiterator()
    for elem in iter_:
        print(elem.tag)

    # get the information via the children!
    print("-" * 40)
    print("Iterating using getchildren()")
    print("-" * 40)
    appointments = root.getchildren()
    for appointment in appointments:
        appt_children = appointment.getchildren()
        for appt_child in appt_children:
            print("%s=%s" % (appt_child.tag, appt_child.text))

if __name__ == "__main__":
    parseXML("appt.xml")

```

Вы уже должны понять, что и как работает, но в этом примере и предыдущем мы импортируем cElementTree вместо обычного ElementTree. Разница между этими двумя в том, что cElementTree основан на С, а не на Python, так что он намного быстрее. В любом случае, мы снова создаем объект ElementTree и извлекаем root из него. Обратите внимание на то, что мы выводим root, его тег и атрибуты. Далее мы покажем несколько способов итерации тегов. Первый цикл просто итерирует XML, дочку за дочкой. Таким образом выведется только дочерний код (назначение) с наивысшим уровнем , так что мы добавили оператор if, чтобы проверить дочерний код и выполнить его итерацию.

Далее мы возьмем итератор из самого объекта дерева и выполним итерацию таким образом. Вы получите ту же информацию, но без лишних шагов в первом примере. Третий метод использует функцию **getchildren()** корня. Здесь снова нужен внутренний цикл, чтобы перебрать все дочерние элементы внутри каждого тега назначения. Последний пример использует метод **iter()** корня, чтобы просто перебрать все теги, которые соответствуют строке "begin".

Как упоминалось в предыдущем разделе, вы также можете использовать **find()** или **findall()**, чтобы помочь вам найти определенные теги или наборы тегов соответственно. Также обратите внимание, что каждый объект Element имеет свойство **tag** и свойство **text**, которые можно использовать для получения точной информации.

## Подведение итогов

Теперь вы знаете, как использовать minidom для разбора XML. Вы также узнали, как использовать ElementTree для создания, редактирования и разбора XML. Существуют и другие библиотеки вне Python, которые предоставляют дополнительные методы работы с XML. Убедитесь в том, что вы пользуетесь понятным вам инструментом, так как данный вопрос может быть очень сложным и непонятным, если пытаться решить его неправильным инструментом.
