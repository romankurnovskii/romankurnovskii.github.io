---
title: 31. Парсинг XML с помощью lxml
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
weight: 31
---


В первой части мы рассмотрели некоторые встроенные в Python парсеры XML. В этой главе мы рассмотрим интересный пакет сторонних разработчиков, **lxml** от codespeak. Он использует, помимо прочего, ElementTree API. Пакет lxml имеет поддержку XPath и XSLT, включает API для SAX и API уровня C для совместимости с модулями C/Pyrex. Вот что мы рассмотрим:

-  Как разобрать XML с помощью lxml
-  Пример рефакторинга
-  Как разобрать XML с помощью lxml.objectify
-  Как создать XML с помощью lxml.objectify

В этой статье, мы используем примеры, основанные на примерах парсинга minidom, и посмотрим, как выполнять парсинг при помощи lxml Python. Вот пример XML из программы, которая была написана для отслеживания назначений:

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
        <begin>1234360800</begin>
        <duration>1800</duration>
        <subject>Check MS Office website for updates</subject>
        <location></location>
        <uid>604f4792-eb89-478b-a14f-dd34d3cc6c21-1234360800</uid>
        <state>dismissed</state>
  </appointment>
</zAppointments>
```

Давайте узнаем, как разобрать его с помощью lxml!

## Разбор XML с помощью lxml

Данный пример XML показывает два назначения. Время начинается спустя секунды после эпохи. Наш uid сгенерирован на основе хеша начала времени и ключа. Время сигнала – несколько секунд после эпохи, но не раньше начала времени. Состояние – если назначение было отменено или перенесено, или нет, так или иначе. Остальная часть XML, как мы видим, в пояснении не нуждается. Давайте взглянем на то, как делается парсинг:

```python
from lxml import etree

def parseXML(xmlFile):
    """
    Parse the xml
    """
    with open(xmlFile) as fobj:
        xml = fobj.read()

    root = etree.fromstring(xml)

    for appt in root.getchildren():
        for elem in appt.getchildren():
            if not elem.text:
                text = "None"
            else:
                text = elem.text
            print(elem.tag + " => " + text)

if __name__ == "__main__":
    parseXML("example.xml")
```

Прежде всего, мы импортируем необходимые модули, а именно модуль **etree** из пакета lxml и функцию **StringIO** из встроенного модуля **StringIO**. Наша функция **parseXML** принимает один аргумент: путь к рассматриваемому XML-файлу. Мы открываем файл, читаем его и закрываем. Теперь наступает самая интересная часть! Мы используем функцию etree's parse для разбора XML-кода, возвращаемого модулем StringIO. По не совсем понятным мне причинам, функция parse требует объект, похожий на файл.

В любом случае, далее мы выполняем итерацию по контексту (т.е. объекту **lxml.etree.iterparse**) и извлекаем элементы тегов. Мы добавляем условный оператор if, чтобы заменить пустые поля на слово "None", чтобы сделать вывод немного понятнее. Вот и все.

## Разбор примера с книгой

Что ж, результат этого примера был довольно скучным. В большинстве случаев вы хотите сохранить извлеченные данные и что-то с ними сделать, а не просто вывести их на stdout. Так что в следующем нашем примере мы создадим структуру данных для сбора результатов. В данном примере структура наших данных будет представлять собой список словарей. Мы используем пример книги MSDN. Сохраните следующий код XML под названием example.xml.

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

Теперь давайте разберем этот XML и поместим его в нашу структуру данных!

```python
from lxml import etree

def parseBookXML(xmlFile):

    with open(xmlFile) as fobj:
        xml = fobj.read()

    root = etree.fromstring(xml)

    book_dict = {}
    books = []
    for book in root.getchildren():
        for elem in book.getchildren():
            if not elem.text:
                text = "None"
            else:
                text = elem.text
            print(elem.tag + " => " + text)
            book_dict[elem.tag] = text
        if book.tag == "book":
            books.append(book_dict)
            book_dict = {}
    return books

if __name__ == "__main__":
    parseBookXML("books.xml")
```

Данный пример весьма похож на предыдущий, так что мы сосредоточимся только на различиях между ними. Перед началом итерации над контекстом, мы создадим объект пустого словаря и пустой список Python. Далее, в цикле, мы создадим наш словарь вот так:

```python
book_dict[elem.tag] = text
```

Текст - это либо **elem.text**, либо **None**. Наконец, если тегом является **book**, то мы находимся в конце раздела книги и должны добавить dict в наш список, а также сбросить dict для следующей книги. Как вы можете видеть, именно это мы и сделали. Более реалистичным примером было бы поместить извлеченные данные в класс **Book**. Я уже делал это с json-лентами.

Теперь мы готовы узнать, как разобрать XML с помощью **lxml.objectify**!

## Разбор XML с помощью lxml.objectify

Модуль lxml имеет модуль **objectify**, который может превращать XML-документы в объекты Python. Я считаю, что с "объективированными" XML-документами очень легко работать, и надеюсь, что вы тоже. Для его установки вам, возможно, придется проделать несколько шагов, поскольку **pip** не работает с lxml в Windows. Обязательно зайдите в индекс пакетов Python и поищите версию, созданную для вашей версии Python. Также обратите внимание, что последняя предварительная программа установки lxml поддерживает только Python 3.2 (на момент написания статьи), так что если у вас более новая версия Python, у вас могут возникнуть некоторые трудности с установкой lxml для вашей версии.

В любом случае, как только вы его установите, мы сможем снова приступить к изучению этого замечательного куска XML:

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
        <begin>1234360800</begin>
        <duration>1800</duration>
        <subject>Check MS Office website for updates</subject>
        <location></location>
        <uid>604f4792-eb89-478b-a14f-dd34d3cc6c21-1234360800</uid>
        <state>dismissed</state>
  </appointment>
</zAppointments>
```

Теперь нам нужно написать код, который будет разбирать и изменять XML. Давайте посмотрим на эту небольшую демонстрацию, которая показывает ряд возможностей, которые предоставляет objectify.

```python
from lxml import etree, objectify

def parseXML(xmlFile):
    """Parse the XML file"""
    with open(xmlFile) as f:
        xml = f.read()

    root = objectify.fromstring(xml)

    # returns attributes in element node as dict
    attrib = root.attrib

    # how to extract element data
    begin = root.appointment.begin
    uid = root.appointment.uid

    # loop over elements and print their tags and text
    for appt in root.getchildren():
        for e in appt.getchildren():
            print("%s => %s" % (e.tag, e.text))
        print()

    # how to change an element's text
    root.appointment.begin = "something else"
    print(root.appointment.begin)

    # how to add a new element
    root.appointment.new_element = "new data"

    # remove the py:pytype stuff
    objectify.deannotate(root)
    etree.cleanup_namespaces(root)
    obj_xml = etree.tostring(root, pretty_print=True)
    print(obj_xml)

    # save your xml
    with open("new.xml", "w") as f:
        f.write(obj_xml)

if __name__ == "__main__":
    f = r'path\to\sample.xml'
    parseXML(f)
```

Код довольно хорошо прокомментирован, но мы все равно потратим немного времени на его изучение. В начале, мы передали наш пример файла XML и использовали **objectify**. Если вы хотите получить доступ к атрибутам тега, используйте свойство *attrib**. Оно вернет словарь атрибутов тега. Чтобы получить доступ к элементам подтега, достаточно использовать точечную нотацию. Как видите, чтобы получить значение тега **begin**, можно поступить следующим образом:

```python
begin = root.appointment.begin
```

Следует помнить, что если в значении есть ведущие нули, то возвращаемое значение может быть усеченным. Если для вас это важно, то вместо этого используйте следующий синтаксис:

```python
begin = root.appointment.begin.text
```

Если вам нужно перебрать дочерние элементы, вы можете использовать метод iterchildren. Возможно, вам придется использовать вложенную структуру цикла for, чтобы получить все элементы. Изменить значение элемента так же просто, как присвоить ему новое значение.

```python
root.appointment.new_element = "new data"
```

Теперь мы готовы узнать, как создать XML с помощью **lxml.objectify**.

## Создание XML с помощью lxml.objectify

Подпакет lxml.objectify чрезвычайно удобен для разбора и создания XML. В этом разделе мы покажем, как создавать XML с помощью модуля lxml.objectify. Мы начнем с простого XML, а затем попытаемся воспроизвести его. Давайте начнем!

Для примера мы будем использовать следующий XML:

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
        <begin>1234360800</begin>
        <duration>1800</duration>
        <subject>Check MS Office website for updates</subject>
        <location></location>
        <uid>604f4792-eb89-478b-a14f-dd34d3cc6c21-1234360800</uid>
        <state>dismissed</state>
  </appointment>
</zAppointments>
```

Давайте посмотрим, как мы можем использовать lxml.objectify для воссоздания этого XML:

```python
from lxml import etree, objectify

def create_appt(data):
    """
    Create an appointment XML element
    """
    appt = objectify.Element("appointment")
    appt.begin = data["begin"]
    appt.uid = data["uid"]
    appt.alarmTime = data["alarmTime"]
    appt.state = data["state"]
    appt.location = data["location"]
    appt.duration = data["duration"]
    appt.subject = data["subject"]
    return appt

def create_xml():
    """
    Create an XML file
    """

    xml = '''<?xml version="1.0" encoding="UTF-8"?>
    <zAppointments>
    </zAppointments>
    '''

    root = objectify.fromstring(xml)
    root.set("reminder", "15")

    appt = create_appt({"begin":1181251680,
                        "uid":"040000008200E000",
                        "alarmTime":1181572063,
                        "state":"",
                        "location":"",
                        "duration":1800,
                        "subject":"Bring pizza home"}
                       )
    root.append(appt)

    uid = "604f4792-eb89-478b-a14f-dd34d3cc6c21-1234360800"
    appt = create_appt({"begin":1234360800,
                        "uid":uid,
                        "alarmTime":1181572063,
                        "state":"dismissed",
                        "location":"",
                        "duration":1800,
                        "subject":"Check MS Office website for updates"}
                       )
    root.append(appt)

    # remove lxml annotation
    objectify.deannotate(root)
    etree.cleanup_namespaces(root)

    # create the xml string
    obj_xml = etree.tostring(root,
                             pretty_print=True,
                             xml_declaration=True)

    try:
        with open("example.xml", "wb") as xml_writer:
            xml_writer.write(obj_xml)
    except IOError:
        pass

if __name__ == "__main__":
    create_xml()

```

Давайте немного разберемся в этом. Начнем с функции **create_xml**. В ней мы создаем корневой объект XML с помощью функции **fromstring** модуля objectify. Корневой объект будет содержать **zAppointment** в качестве своего тега. Мы устанавливаем атрибут reminder корня, а затем вызываем функцию **create_appt**, используя в качестве аргумента словарь. В функции **create_appt** мы создаем экземпляр элемента (технически, это **ObjectifiedElemen**t), который мы присваиваем нашей переменной **appt**. Здесь мы используем **dot-notatio**n для создания тегов для этого элемента. Наконец, мы возвращаем элемент **appt** обратно и добавляем его к нашему **root** объекту. Мы повторяем процесс для второго экземпляра назначения.

В следующем разделе функции **create_xml** мы удалим аннотацию lxml. Если вы этого не сделаете, ваш XML будет выглядеть следующим образом:

```xml
<?xml version="1.0" ?>
<zAppointments py:pytype="TREE" reminder="15">
    <appointment py:pytype="TREE">
        <begin py:pytype="int">1181251680</begin>
        <uid py:pytype="str">040000008200E000</uid>
        <alarmTime py:pytype="int">1181572063</alarmTime>
        <state py:pytype="str"/>
        <location py:pytype="str"/>
        <duration py:pytype="int">1800</duration>
        <subject py:pytype="str">Bring pizza home</subject>
    </appointment><appointment py:pytype="TREE">
        <begin py:pytype="int">1234360800</begin>
        <uid py:pytype="str">604f4792-eb89-478b-a14f-dd34d3cc6c21-1234360800</uid>
        <alarmTime py:pytype="int">1181572063</alarmTime>
        <state py:pytype="str">dismissed</state>
        <location py:pytype="str"/>
        <duration py:pytype="int">1800</duration>
        <subject py:pytype="str">Check MS Office website for updates</subject>
    </appointment>
</zAppointments>
```

Чтобы удалить всю эту ненужную аннотацию, мы вызываем следующие две функции:

```python
objectify.deannotate(root)
etree.cleanup_namespaces(root)
```

Последняя часть головоломки - заставить lxml генерировать сам XML. Здесь мы используем модуль lxml's etree для выполнения тяжелой работы:

```python
obj_xml = etree.tostring(root,
                         pretty_print=True,
                         xml_declaration=True)
```

Функция tostring вернет красивую строку XML, а если вы установите **pretty_print** в True, она обычно возвращает XML в красивом формате. Аргумент **xml_declaration** указывает модулю etree, включать или нет первую строку декларации (т.е. **<?xml version="1.0" ?>**).

## Подведение итогов

Теперь вы знаете, как использовать модули lxml etree и objectify для разбора XML. Вы также знаете, как использовать objectify для создания XML. Знание того, как использовать несколько модулей для выполнения одной и той же задачи, может быть полезно для того, чтобы увидеть, как подойти к одной и той же проблеме с разных сторон. Это также поможет вам выбрать тот инструмент, с которым вам удобнее всего работать.
