---
title: 15. Логирование
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
weight: 15
---
# Глава 15 - Логирование

Python предоставляет очень мощную библиотеку протоколирования в своей стандартной библиотеке. Многие программисты используют операторы печати для отладки (в том числе и я), но вы также можете использовать для этого протоколирование. Использование лога также более чистый метод, если вы не хотите просматривать весь свой код, чтобы удалить все операторы print. В данном разделе мы рассмотрим следующее:

- Создание простого логгера
- Как вести журнал из нескольких модулей
- Форматирование лога
- Конфигурация лога

К концу этой главы вы должны быть в состоянии уверенно создавать собственные логи для своих приложений. Давайте приступим!

## Создание простого логгера

Создать лог с помощью модуля logging легко и просто. Проще всего посмотреть на кусок кода, а затем объяснить его, так что вот вам код для чтения:

```sh
import logging

# add filemode="w" to overwrite
logging.basicConfig(filename="sample.log", level=logging.INFO)

logging.debug("This is a debug message")
logging.info("Informational message")
logging.error("An error has happened!")
```

Как и следовало ожидать, чтобы получить доступ к модулю logging, его необходимо сначала импортировать. Самый простой способ создать лог - использовать функцию basicConfig модуля logging и передать ему несколько аргументов с ключевыми словами. Она принимает следующие аргументы: filename, filemode, format, datefmt, level и stream. В нашем примере мы передаем ей имя файла и уровень протоколирования, который мы установили на INFO. Существует пять уровней протоколирования (в порядке возрастания): DEBUG, INFO, WARNING, ERROR и CRITICAL. По умолчанию, если вы запустите этот код несколько раз, он будет добавляться в лог, если он уже существует. Если вы предпочитаете, чтобы ваш логгер перезаписывал лог, то передайте **filemode="w"**, как указано в комментарии в коде. Говоря о выполнении кода, вот что вы получите, если выполните его один раз:

```sh
INFO:root:Informational message
ERROR:root:An error has happened!
```

Обратите внимание, что отладочное сообщение отсутствует в выводе. Это потому, что мы установили уровень INFO, поэтому наш логгер будет вести лог только в том случае, если это сообщение INFO, WARNING, ERROR или CRITICAL. Часть root означает, что это сообщение поступает от корневого или главного логгера. В следующем разделе мы рассмотрим, как изменить это значение, чтобы оно было более описательным. Если вы не используете **basicConfig**, то модуль протоколирования будет выводить сообщения в консоль / stdout.

Модуль протоколирования также может записывать некоторые исключения в файл или в любое другое место, куда вы настроите его. Вот пример:

```sh
import logging

logging.basicConfig(filename="sample.log", level=logging.INFO)
log = logging.getLogger("ex")

try:
    raise RuntimeError
except RuntimeError:
    log.exception("Error!")
```

Давайте немного разложим это по полочкам. Здесь мы используем метод **getLogger** модуля **logging**, чтобы вернуть объект logger с именем **ex**. Это удобно, когда в одном приложении используется несколько логгеров, так как позволяет определить, какие сообщения поступили от каждого из них. Этот пример заставит возникнуть RuntimeError, выявит ошибку и запишет весь трассировочный откат в файл, что может быть очень удобно при отладке.

## Логирование из нескольких модулей (а также форматирование!)

Чем больше вы кодите, тем чаще вы создаете набор пользовательских модулей, которые работают вместе. Если вы хотите, чтобы запись велась в одном месте, значит, вы обратились по адресу. Мы рассмотрим простой способ, а затем покажем более сложный метод, который также является и более настраиваемым. Вот один простой способ:

```sh
import logging
import otherMod

def main():
    """
    The main entry point of the application
    """
    logging.basicConfig(filename="mySnake.log", level=logging.INFO)
    logging.info("Program started")
    result = otherMod.add(7, 8)
    logging.info("Done!")

if __name__ == "__main__":
    main()
```

Здесь мы импортируем logging и модуль нашего собственного создания ("otherMod"). Затем мы создаем наш файл журнала, как делали раньше. Другой модуль выглядит следующим образом:

```sh
# otherMod.py
import logging

def add(x, y):
    """"""
    logging.info("added %s and %s to get %s" % (x, y, x+y))
    return x+y
```

Если вы запустите основной код, вы должны получить лог со следующим содержанием:

```sh
INFO:root:Program started
INFO:root:added 7 and 8 to get 15
INFO:root:Done!
```
Заметили проблему в этом? Вы не можете однозначно сказать, откуда приходят сообщения. При этом, чем больше модулей пишут в лог, тем сложнее становится картина. Так что нам нужно это исправить. Таким образом, мы приходим к более сложному способу создание логгера. Давайте взглянем на другой способ создания:

```sh
import logging
import otherMod2

def main():
    """
    The main entry point of the application
    """
    logger = logging.getLogger("exampleApp")
    logger.setLevel(logging.INFO)

    # create the logging file handler
    fh = logging.FileHandler("new_snake.log")

    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    fh.setFormatter(formatter)

    # add handler to logger object
    logger.addHandler(fh)

    logger.info("Program started")
    result = otherMod2.add(7, 8)
    logger.info("Done!")

if __name__ == "__main__":
    main()
```

Здесь мы создаем экземпляр логгера с именем "exampleApp". Мы устанавливаем его уровень протоколирования,  создали объект обработчика лог-файла, и объект форматирование. Обработчик файла должен установить объект форматирование в качестве своего форматтера, после чего обработчик файла должен быть добавлен в регистратор логгера.. Остальной код в main в основном такой же. Только обратите внимание, что вместо "logging.info" будет "logger.info" или как бы вы ни назвали свою переменную logger. Вот обновленный код **OtherMod2**:

```sh
# otherMod2.py
import logging

module_logger = logging.getLogger("exampleApp.otherMod2")

def add(x, y):
    """"""
    logger = logging.getLogger("exampleApp.otherMod2.add")
    logger.info("added %s and %s to get %s" % (x, y, x+y))
    return x+y
```

Обратите внимание, что здесь у нас определены два логгера. Мы ничего не делаем с module_logger в данном случае, но используем другой. Если вы запустите основной скрипт, вы должны увидеть следующий вывод в вашем файле:


```sh
2012-08-02 15:37:40,592 - exampleApp - INFO - Program started
2012-08-02 15:37:40,592 - exampleApp.otherMod2.add - INFO - added 7 and 8 to get 15
2012-08-02 15:37:40,592 - exampleApp - INFO - Done
```

Вы заметите, что все ссылки на root были удалены. Вместо этого он использует наш объект **Formatter**, который говорит, что мы должны получить человекочитаемое время, имя логгера, уровень логгирования и затем сообщение. На самом деле эти параметры известны как атрибуты **LogRecord**. Полный список атрибутов **LogRecord** [см. в документации](https://docs.python.org/3/library/logging.html#logrecord-attributesS), так как их слишком много, чтобы перечислять их здесь.

## Конфигурация логов для работы

Модуль logging может быть настроен тремя различными способами. Вы можете настроить его с помощью методов (логгеров, форматоров, обработчиков), как мы делали ранее в этой статье; вы можете использовать файл конфигурации и передать его в fileConfig(); или вы можете создать словарь информации о конфигурации и передать его в функцию dictConfig(). Давайте сначала создадим файл конфигурации, а затем рассмотрим, как выполнить его с помощью Python. Вот пример файла конфигурации:

```sh
[loggers]
keys=root,exampleApp

[handlers]
keys=fileHandler, consoleHandler

[formatters]
keys=myFormatter

[logger_root]
level=CRITICAL
handlers=consoleHandler

[logger_exampleApp]
level=INFO
handlers=fileHandler
qualname=exampleApp

[handler_consoleHandler]
class=StreamHandler
level=DEBUG
formatter=myFormatter
args=(sys.stdout,)

[handler_fileHandler]
class=FileHandler
formatter=myFormatter
args=("config.log",)

[formatter_myFormatter]
format=%(asctime)s - %(name)s - %(levelname)s - %(message)s
datefmt=
```

Вы заметите, что у нас указаны два регистратора: root и exampleApp. По какой-то причине "root" является обязательным. Если вы не включите его, Python выдаст ошибку **ValueError** из функции config.py's **_install_loggers**, которая является частью модуля logging. Если вы установите обработчик root в **fileHandler**, то в итоге вы удвоите вывод журнала, поэтому, чтобы этого не произошло, вместо этого мы отправляем его на консоль. Внимательно изучите этот пример. Вам понадобится секция для каждого ключа в первых трех секциях. Теперь давайте посмотрим, как мы загружаем их в коде:

```sh
# log_with_config.py
import logging
import logging.config
import otherMod2

def main():
    """
    Based on http://docs.python.org/howto/logging.html#configuring-logging
    """
    logging.config.fileConfig('logging.conf')
    logger = logging.getLogger("exampleApp")

    logger.info("Program started")
    result = otherMod2.add(7, 8)
    logger.info("Done!")

if __name__ == "__main__":
    main()
```

Как вы видите, все, что вам нужно сделать, это передать путь к файлу конфигурации в **logging.config.fileConfig**. Вы также заметите, что нам больше не нужен весь этот код настройки, поскольку все это находится в файле конфигурации. Также мы можем просто импортировать модуль otherMod2 без изменений. В любом случае, если вы выполните вышеописанное, в конечном итоге в вашем файле журнала должно появиться следующее:

```sh
2012-08-02 18:23:33,338 - exampleApp - INFO - Program started
2012-08-02 18:23:33,338 - exampleApp.otherMod2.add - INFO - added 7 and 8 to get 15
2012-08-02 18:23:33,338 - exampleApp - INFO - Done!
```

Как вы уже догадались, он очень похож на другой пример. Теперь мы перейдем к другому методу config. Метод конфигурирования по словарю (dictConfig) был добавлен только в Python 2.7, поэтому убедитесь, что у вас есть эта или более поздняя версия, иначе вы не сможете следить за развитием событий. В документации не сказано прямо, как это работает. На самом деле, примеры в документации почему-то показывают **YAML**. В любом случае, вот рабочий код, который вы можете посмотреть:

```sh
# log_with_config.py
import logging
import logging.config
import otherMod2

def main():
    """
    Based on http://docs.python.org/howto/logging.html#configuring-logging
    """
    dictLogConfig = {
        "version":1,
        "handlers":{
                    "fileHandler":{
                        "class":"logging.FileHandler",
                        "formatter":"myFormatter",
                        "filename":"config2.log"
                        }
                    },
        "loggers":{
            "exampleApp":{
                "handlers":["fileHandler"],
                "level":"INFO",
                }
            },

        "formatters":{
            "myFormatter":{
                "format":"%(asctime)s - %(name)s - %(levelname)s - %(message)s"
                }
            }
        }

    logging.config.dictConfig(dictLogConfig)

    logger = logging.getLogger("exampleApp")

    logger.info("Program started")
    result = otherMod2.add(7, 8)
    logger.info("Done!")

if __name__ == "__main__":
    main()
```

Если вы выполните этот код, вы получите тот же результат, что и в предыдущем методе. Обратите внимание, что вам больше не нужен логгер root, когда вы используете словарь конфигурации.

# Подведение итогов

На данном этапе вы должны знать, как начать использовать логгеры и как настроить их несколькими различными способами. Вы также должны получить знания о том, как изменять вывод с помощью объекта Formatter. Модуль протоколирования очень удобен для поиска и устранения неисправностей в вашем приложении. Обязательно уделите некоторое время практике работы с этим модулем перед написанием большого приложения.

В следующей главе мы рассмотрим, как использовать модуль **os**.
