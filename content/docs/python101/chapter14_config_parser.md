# Глава 14 - configparser

Файлы конфигурации используются как пользователями, так и программистами. Обычно они используются для хранения настроек вашего приложения или даже настроек вашей операционной системы. Основная библиотека Python включает модуль configparser, который можно использовать для создания конфигурационных файлов и взаимодействия с ними. В этой главе мы потратим несколько минут на изучение его работы.

## Создание конфигурационного файла

Создать конфигурационный файл с помощью configparser очень просто. Давайте создадим код для демонстрации:

```sh
import configparser

def createConfig(path):
    """
    Create a config file
    """
    config = configparser.ConfigParser()
    config.add_section("Settings")
    config.set("Settings", "font", "Courier")
    config.set("Settings", "font_size", "10")
    config.set("Settings", "font_style", "Normal")
    config.set("Settings", "font_info",
               "You are using %(font)s at %(font_size)s pt")

    with open(path, "w") as config_file:
        config.write(config_file)


if __name__ == "__main__":
    path = "settings.ini"
    createConfig(path)
```

Данный код создает файл config с одной секцией, под названием Settings, которая будет содержать наши опции: font, font_size, font_style и font_info. . Также обратите внимание, что в Python 3 нам нужно указать, что мы записываем файл только в режиме записи, т.е. "w". Еще в Python 2 для записи в двоичном режиме нужно было использовать "wb".

## Как читать, обновлять и удалять опции

Теперь мы готовы к тому, что бы научиться чтению файла config, обновлять его опции и даже удалять их. В этом случае проще научиться, написав код! Просто добавьте следующую функцию в код, который вы написали выше.

```sh
import configparser
import os

def crudConfig(path):
    """
    Create, read, update, delete config
    """
    if not os.path.exists(path):
        createConfig(path)

    config = configparser.ConfigParser()
    config.read(path)

    # read some values from the config
    font = config.get("Settings", "font")
    font_size = config.get("Settings", "font_size")

    # change a value in the config
    config.set("Settings", "font_size", "12")

    # delete a value from the config
    config.remove_option("Settings", "font_style")

    # write changes back to the config file
    with open(path, "w") as config_file:
        config.write(config_file)


if __name__ == "__main__":
    path = "settings.ini"
    crudConfig(path)
```

Этот код сначала проверяет, существует ли путь к файлу конфигурации. Если нет, то для его создания используется функция createConfig, которую мы создали ранее. Затем мы создаем объект ConfigParser и передаем ему путь к файлу конфигурации для чтения. Чтобы прочитать опцию в конфигурационном файле, мы вызываем метод **get** нашего объекта ConfigParser, передавая ему имя секции и имя опции. Это вернет значение опции. Если вы хотите изменить значение параметра, используйте метод **set**, в котором передайте имя секции, имя опции и новое значение. Наконец, для удаления параметра можно использовать метод **remove_option**.

В нашем примере мы изменяем значение font_size на **12** и полностью удаляем опцию font_style. Затем мы записываем изменения обратно на диск.

Однако это не совсем удачный пример, так как вам не стоит иметь функцию, которая делает всё таким образом. Поэтому давайте разделим ее на несколько функций:

```sh
import configparser
import os

def create_config(path):
    """
    Create a config file
    """
    config = configparser.ConfigParser()
    config.add_section("Settings")
    config.set("Settings", "font", "Courier")
    config.set("Settings", "font_size", "10")
    config.set("Settings", "font_style", "Normal")
    config.set("Settings", "font_info",
               "You are using %(font)s at %(font_size)s pt")

    with open(path, "w") as config_file:
        config.write(config_file)


def get_config(path):
    """
    Returns the config object
    """
    if not os.path.exists(path):
        create_config(path)

    config = configparser.ConfigParser()
    config.read(path)
    return config


def get_setting(path, section, setting):
    """
    Print out a setting
    """
    config = get_config(path)
    value = config.get(section, setting)
    msg = "{section} {setting} is {value}".format(
        section=section, setting=setting, value=value)
    print(msg)
    return value


def update_setting(path, section, setting, value):
    """
    Update a setting
    """
    config = get_config(path)
    config.set(section, setting, value)
    with open(path, "w") as config_file:
        config.write(config_file)


def delete_setting(path, section, setting):
    """
    Delete a setting
    """
    config = get_config(path)
    config.remove_option(section, setting)
    with open(path, "w") as config_file:
        config.write(config_file)



if __name__ == "__main__":
    path = "settings.ini"
    font = get_setting(path, 'Settings', 'font')
    font_size = get_setting(path, 'Settings', 'font_size')

    update_setting(path, "Settings", "font_size", "12")

    delete_setting(path, "Settings", "font_style")
```

Этот пример выглядит более организованно, по сравнению с первым. Я пошел настолько далеко, что назвал функции в соответствии с PEP8. Каждая функция должна быть самоочевидной и самодостаточной. Вместо того чтобы помещать всю логику в одну функцию, мы разделили ее на несколько функций, а затем продемонстрировали их функциональность в нижнем выражении if. Теперь вы можете импортировать модуль и использовать его самостоятельно.

Обратите внимание на то, что в этом примере есть сложная секция, так что вам, возможно, захочется усовершенствовать этот пример в дальнейшем, чтобы сделать его более универсальным.

## Как использовать интерполяцию

Модуль configparser также позволяет **интерполяцию**, что означает, что вы можете использовать некоторые опции для создания другой опции. Мы фактически делаем это с опцией font_info, поскольку ее значение основано на опциях font и font_size. Мы можем изменить интерполированное значение с помощью словаря Python. Давайте вкратце продемонстрируем оба этих случая.

```sh
import configparser
import os

def interpolationDemo(path):
    if not os.path.exists(path):
        createConfig(path)

    config = configparser.ConfigParser()
    config.read(path)

    print(config.get("Settings", "font_info"))

    print(config.get("Settings", "font_info",
                     vars={"font": "Arial", "font_size": "100"}))


if __name__ == "__main__":
    path = "settings.ini"
    interpolationDemo(path)
```

Если вы запустите этот код, вы увидите примерно следующий результат:

```sh
Вы используете Courier размером 12 pt
Вы используете шрифт Arial размером 100 пт
```

## Подведение итогов

На данном этапе вы должны знать достаточно о возможностях configparser, чтобы использовать его в своих собственных проектах. Есть еще один проект под названием ConfigObj, который не является частью Python, и с которым вы, возможно, захотите ознакомиться. ConfigObj более гибкий и имеет больше возможностей, чем configparser. Но если вы находитесь в затруднительном положении или ваша организация не разрешает использование пакетов сторонних разработчиков, то configparser, вероятно, подойдет.
