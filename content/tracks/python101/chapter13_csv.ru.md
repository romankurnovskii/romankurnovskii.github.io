---
title: 13. Модуль csv
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
weight: 13
---

Модуль csv дает программисту Python возможность анализировать файлы CSV (Comma Separated Values – переменные, разделенные запятыми). CSV-файл - это текстовый файл, в котором каждая строка содержит несколько полей, разделенных запятыми или каким-либо другим разделителем. Каждую строку можно представить как ряд, а каждое поле - как столбец. Формат CSV не имеет стандарта, но они достаточно похожи, чтобы модуль csv мог читать подавляющее большинство CSV-файлов. Вы также можете записывать CSV-файлы с помощью модуля csv.

## Чтение файла CSV

Существует два способа чтения CSV-файла. Вы можете использовать функцию чтения модуля csv или класс **DictReader**. Мы рассмотрим оба метода. Но сначала нам нужно получить CSV-файл, чтобы было что разбирать. Существует множество сайтов, предоставляющих интересную информацию в формате CSV. Мы будем использовать сайт Всемирной организации здравоохранения (ВОЗ) для загрузки информации о туберкулезе. Вы можете перейти сюда, чтобы получить ее: http://www.who.int/tb/country/data/download/en/. Как только вы получите файл, мы будем готовы начать. Готовы? Тогда давайте посмотрим на код!

```python
import csv

def csv_reader(file_obj):
    """
    Read a csv file
    """
    reader = csv.reader(file_obj)
    for row in reader:
        print(" ".join(row))

if __name__ == "__main__":
    csv_path = "TB_data_dictionary_2014-02-26.csv"
    with open(csv_path, "r") as f_obj:
        csv_reader(f_obj)
```

Давайте немного разберемся с этим. Во-первых, мы должны импортировать модуль **csv**. Затем мы создаем очень простую функцию **csv_reader**, которая получает доступ к объекту файла. Внутри функции мы передаем объект файла в функцию **csv.reader**, которая возвращает объект reader. Объект reader позволяет выполнять итерацию, как и обычный объект файла. Это позволяет нам итерировать каждую строку в объекте reader и выводить строку данных за вычетом запятых. Это работает по той причине, что каждый ряд является списком, и мы можем объединить все элементы в списке вместе, создав одну большую строку

Теперь давайте создадим собственный CSV-файл и передадим его в класс **DictReader**. Вот очень простой вариант:

```sh
first_name,last_name,address,city,state,zip_code
Tyrese,Hirthe,1404 Turner Ville,Strackeport,NY,19106-8813
Jules,Dicki,2410 Estella Cape Suite 061,Lake Nickolasville,ME,00621-7435
Dedric,Medhurst,6912 Dayna Shoal,Stiedemannberg,SC,43259-2273
```
Сохраним его в файле с именем **data.csv**. Теперь мы готовы разобрать файл с помощью класса DictReader. Давайте попробуем это сделать:

```python
import csv

def csv_dict_reader(file_obj):
    """
    Read a CSV file using csv.DictReader
    """
    reader = csv.DictReader(file_obj, delimiter=',')
    for line in reader:
        print(line["first_name"]),
        print(line["last_name"])

if __name__ == "__main__":
    with open("data.csv") as f_obj:
        csv_dict_reader(f_obj)
```

В приведенном выше примере мы открываем файл и передаем объект файла в нашу функцию, как мы это делали раньше. Функция передает объект файла нашему классу DictReader. Мы сообщаем DictReader, что разделителем является запятая. На самом деле это не обязательно, так как код будет работать и без этого ключевого слова. Тем не менее, это хорошая идея, так как это позволяет пролить свет на то, что именно происходит внутри кода. Далее мы переходим к объекту reader и обнаруживаем, что каждая строка в объекте reader является словарем. Это позволяет очень просто распечатать определенные фрагменты строки.

Теперь мы готовы узнать, как записать файл csv на диск.

## Запись файла CSV

Модуль csv также имеет два метода, которые вы можете использовать для записи CSV-файла. Вы можете использовать функцию **writer** или класс DictWriter. Мы рассмотрим оба этих метода. Мы будем работать с функцией writer. Давайте рассмотрим простой пример:

```python
import csv

def csv_writer(data, path):
    """
    Write data to a CSV file path
    """
    with open(path, "w", newline='') as csv_file:
        writer = csv.writer(csv_file, delimiter=',')
        for line in data:
            writer.writerow(line)

if __name__ == "__main__":
    data = ["first_name,last_name,city".split(","),
            "Tyrese,Hirthe,Strackeport".split(","),
            "Jules,Dicki,Lake Nickolasville".split(","),
            "Dedric,Medhurst,Stiedemannberg".split(",")
            ]
    path = "output.csv"
    csv_writer(data, path)
```

В приведенном выше коде мы создаем функцию **csv_writer**, которая принимает два аргумента: data и path. data - это список списков, который мы создаем в нижней части сценария. Мы используем сокращенную версию данных из предыдущего примера и разделяем строки на запятые. Это возвращает список. В итоге мы получаем вложенный список, который выглядит следующим образом:


```sh
[['first_name', 'last_name', 'city'],
 ['Tyrese', 'Hirthe', 'Strackeport'],
 ['Jules', 'Dicki', 'Lake Nickolasville'],
 ['Dedric', 'Medhurst', 'Stiedemannberg']]
```

Функция **csv_writer** открывает путь, по которому мы проходим, и создает объект csv writer. Затем мы перебираем структуру вложенного списка и записываем каждую строку на диск. Обратите внимание, что при создании объекта writer мы указали, каким должен быть разделитель. Если вы хотите, чтобы разделителем была не запятая, а что-то другое, то это то место, где вы должны ее установить.

Теперь мы готовы узнать, как записать CSV-файл с помощью класса **DictWriter**! Мы собираемся использовать данные из предыдущей версии и преобразовать их в список словарей, которые мы можем скормить нашему голодному DictWriter. Давайте посмотрим:


```python
import csv

def csv_dict_writer(path, fieldnames, data):
    """
    Writes a CSV file using DictWriter
    """
    with open(path, "w", newline='') as out_file:
        writer = csv.DictWriter(out_file, delimiter=',', fieldnames=fieldnames)
        writer.writeheader()
        for row in data:
            writer.writerow(row)

if __name__ == "__main__":
    data = ["first_name,last_name,city".split(","),
            "Tyrese,Hirthe,Strackeport".split(","),
            "Jules,Dicki,Lake Nickolasville".split(","),
            "Dedric,Medhurst,Stiedemannberg".split(",")
            ]
    my_list = []
    fieldnames = data[0]
    for values in data[1:]:
        inner_dict = dict(zip(fieldnames, values))
        my_list.append(inner_dict)

    path = "dict_output.csv"
    csv_dict_writer(path, fieldnames, my_list)
```

Сначала мы начнем со второго раздела. Как вы видите, мы начинаем со структуры вложенного списка, которая была у нас раньше. Далее мы создаем пустой список и список, содержащий имена полей,  который будет первым списком во вложенном списке. Помните, что списки основаны на нулях, поэтому первый элемент в списке начинается с нуля! Далее мы перебираем вложенные списки, начиная со второго элемента:


```python
for values in data[1:]:
    inner_dict = dict(zip(fieldnames, values))
    my_list.append(inner_dict)
```

Внутри цикла **for** мы используем встроенные модули Python для создания словаря. Метод *zip** возьмет два итератора (в данном случае списки) и превратит их в список кортежей. Вот пример:


```python
zip(fieldnames, values)
[('first_name', 'Dedric'), ('last_name', 'Medhurst'), ('city', 'Stiedemannberg')]
```
Теперь, когда вы обернете этот вызов в **dict**, он превратит список кортежей в словарь. Наконец, мы добавляем словарь к списку. По окончании работы функции for вы получите структуру данных, которая будет выглядеть следующим образом:

    **[{‘city’: ‘Strackeport’, ‘first_name’: ‘Tyrese’, ‘last_name’: ‘Hirthe’},**
        {‘city’: ‘Lake Nickolasville’, ‘first_name’: ‘Jules’, ‘last_name’: ‘Dicki’}, {‘city’: ‘Stiedemannberg’, ‘first_name’: ‘Dedric’, ‘last_name’: ‘Medhurst’}]

В конце второй сессии мы вызываем нашу функцию **csv_dict_writer** и передаем все необходимые аргументы. Внутри функции мы создаем экземпляр DictWriter и передаем ему объект файла, значение разделителя и список имен полей. Затем мы записываем имена полей на диск и в цикле просматриваем данные по одной строке за раз, записывая их на диск. Класс DictWriter также поддерживает метод **writerows**, который мы могли бы использовать вместо цикла. Функция **csv.writer** также поддерживает это сделать.

Возможно, вам будет интересно узнать, что с помощью модуля csv можно также создавать **диалекты**. Это позволит вам указывать модулю csv, как именно читать или писать файл в очень простой форме. Если вам нужно что-то подобное из-за странно отформатированного файла от клиента, то вы найдете эту функциональность бесценной.