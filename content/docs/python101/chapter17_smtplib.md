---
title: 17. Модуль email / smtplib
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
weight: 17
---

Python предоставляет пару действительно хороших модулей, с помощью которых мы можем создавать электронные письма. Это модули **email** и **smtplib**. Вместо того чтобы рассматривать различные методы этих двух модулей, мы потратим некоторое время на изучение того, как на самом деле использовать эти модули. В частности, мы рассмотрим следующее:

- Основы работы с почтой
- Как выполнять рассылку несколько адресов одновременно
- Как отправлять письма, используя строки TO, CC и BCC
- Как создавать содержимое и тело письма при помощи модуля email


Давайте начнем!

## Основы работы с электронной почтой - Как отправить письмо с помощью smtplib

Модуль **smtplib** очень интуитивно понятен в использовании. Давайте напишем небольшой пример, показывающий, как отправить письмо. Сохраните следующий код в файл на жестком диске:

```sh
import smtplib

HOST = "mySMTP.server.com"
SUBJECT = "Test email from Python"
TO = "mike@someAddress.org"
FROM = "python@mydomain.com"
text = "Python 3.4 rules them all!"

BODY = "\r\n".join((
    "From: %s" % FROM,
    "To: %s" % TO,
    "Subject: %s" % SUBJECT ,
    "",
    text
    ))

server = smtplib.SMTP(HOST)
server.sendmail(FROM, [TO], BODY)
server.quit()
```

Мы импортировали два модуля, **smtplib** и модуль **string**. Две трети этого кода используется для настройки электронной почты. Большинство переменных не требуют пояснений, поэтому мы сосредоточимся только на переменной **BODY**. Здесь мы используем модуль **string** для объединения всех предыдущих переменных в одну строку, где каждая строка заканчивается ("/r"), а новая начинается с ("/n").После вывода BODY вы получите следующую картину:

```sh
'From: python@mydomain.com\r\nTo: mike@mydomain.com\r\nSubject: Test email from Python\r\n\r\nblah blah blah'
```

После этого мы устанавливаем соединение сервера с нашим хостом, а затем вызываем метод **sendmail** модуля smtplib для отправки письма. Затем мы отсоединяемся от сервера. Вы заметите, что в этом коде нет имени пользователя или пароля. Если ваш сервер требует аутентификации, то вам нужно будет добавить следующий код:

```sh
server.login(username, password)
```

Эта часть должна быть добавлена сразу после создания объекта сервер. Как правило, вам, скорее всего, захочется добавить этот код в функцию и вызвать его с теми или иными параметрами. Или же вам может потребоваться использовать часть этой информации в файл config. Попробуем добавить этот код в функцию.

```sh
import smtplib

def send_email(host, subject, to_addr, from_addr, body_text):
    """
    Send an email
    """
    BODY = "\r\n".join((
            "From: %s" % from_addr,
            "To: %s" % to_addr,
            "Subject: %s" % subject ,
            "",
            body_text
            ))
    server = smtplib.SMTP(host)
    server.sendmail(from_addr, [to_addr], BODY)
    server.quit()

if __name__ == "__main__":
    host = "mySMTP.server.com"
    subject = "Test email from Python"
    to_addr = "mike@someAddress.org"
    from_addr = "python@mydomain.com"
    body_text = "Python rules them all!"
    send_email(host, subject, to_addr, from_addr, body_text)
```

Теперь вы можете увидеть, насколько мал фактический код, просто взглянув на саму функцию. Это 13 строк! И мы могли бы сделать его короче, если бы не помещали каждый элемент в BODY на отдельной строке, но это было бы не так читабельно.Сейчас мы создадим файл config, чтобы сберечь информацию сервера и адреса **from**. Зачем? В работе, которой я занимаюсь, мы можем использовать разные почтовые серверы для отправки электронной почты, или если почтовый сервер будет обновлен и его имя изменится, то нам нужно будет изменить только файл config, а не код. То же самое может произойти и с адресом **from**, если наша компания будет куплена и объединена с другой.

Давайте посмотрим на файл конфигурации (сохраните его как **email.ini**):

```sh
[smtp]
server = some.server.com
from_addr = python@mydomain.com
```

Это очень простой файл config. В нем у нас есть секция с надписью **smtp**, в которой у нас есть два элемента: server и from_addr. Мы будем использовать configObj для чтения этого файла и превращения его в словарь Python. Вот обновленная версия кода (сохраните ее как **smtp_config.py**):

```sh
import os
import smtplib
import sys

from configparser import ConfigParser

def send_email(subject, to_addr, body_text):
    """
    Send an email
    """
    base_path = os.path.dirname(os.path.abspath(__file__))
    config_path = os.path.join(base_path, "email.ini")

    if os.path.exists(config_path):
        cfg = ConfigParser()
        cfg.read(config_path)
    else:
        print("Config not found! Exiting!")
        sys.exit(1)

    host = cfg.get("smtp", "server")
    from_addr = cfg.get("smtp", "from_addr")

    BODY = "\r\n".join((
        "From: %s" % from_addr,
        "To: %s" % to_addr,
        "Subject: %s" % subject ,
        "",
        body_text
    ))
    server = smtplib.SMTP(host)
    server.sendmail(from_addr, [to_addr], BODY)
    server.quit()

if __name__ == "__main__":
    subject = "Test email from Python"
    to_addr = "mike@someAddress.org"
    body_text = "Python rules them all!"
    send_email(subject, to_addr, body_text)
```

Мы добавили небольшую проверку в этот код. Сначала мы хотим получить путь, по которому находится сам скрипт, который представляет собой base_path. Затем мы объединяем этот путь с именем файла, чтобы получить полный путь к файлу конфигурации. Затем мы проверяем существование этого файла. Если он есть, мы создаем ConfigParser, а если его нет, то выводим сообщение и выходим из сценария. На всякий случай следует добавить обработчик исключений вокруг вызова ConfigParser.read(), поскольку файл может существовать, но быть поврежденным или у нас может не быть разрешения на его открытие, что вызовет исключение. Это будет небольшой проект, который вы можете выполнить самостоятельно. В любом случае, предположим, что все идет хорошо и объект ConfigParser успешно создан. Теперь мы можем извлечь информацию о хосте и from_addr, используя обычный синтаксис ConfigParser.

Теперь мы готовы узнать, как отправлять несколько писем одновременно!

## Отправка нескольких писем одновременно

Давайте немного изменим наш последний пример и отправим несколько писем!

```sh
import os
import smtplib
import sys

from configparser import ConfigParser

def send_email(subject, body_text, emails):
    """
    Send an email
    """
    base_path = os.path.dirname(os.path.abspath(__file__))
    config_path = os.path.join(base_path, "email.ini")

    if os.path.exists(config_path):
        cfg = ConfigParser()
        cfg.read(config_path)
    else:
        print("Config not found! Exiting!")
        sys.exit(1)

    host = cfg.get("smtp", "server")
    from_addr = cfg.get("smtp", "from_addr")

    BODY = "\r\n".join((
            "From: %s" % from_addr,
            "To: %s" % ', '.join(emails),
            "Subject: %s" % subject ,
            "",
            body_text
            ))
    server = smtplib.SMTP(host)
    server.sendmail(from_addr, emails, BODY)
    server.quit()

if __name__ == "__main__":
    emails = ["mike@someAddress.org", "someone@gmail.com"]
    subject = "Test email from Python"
    body_text = "Python rules them all!"
    send_email(subject, body_text, emails)
```

Вы заметите, что в этом примере мы удалили параметр to_addr и добавили параметр emails, который представляет собой список адресов электронной почты. Чтобы это работало, нам нужно создать строку, разделенную запятыми, в части **To:** в BODY, а также передать **список** адресов электронной почты методу **sendmail**. Таким образом, для создания простой строки, разделенной запятыми, мы делаем следующее: **‘, ‘.join(emails)**. Просто, да?

## Отправка электронной почты с использованием строк TO, CC и BCC

Теперь нам осталось выяснить, как отправить письмо, используя поля CC и BCC. Давайте создадим новую версию этого кода, которая будет поддерживать эту функциональность!

```sh
import os
import smtplib
import sys

from configparser import ConfigParser

def send_email(subject, body_text, to_emails, cc_emails, bcc_emails):
    """
    Send an email
    """
    base_path = os.path.dirname(os.path.abspath(__file__))
    config_path = os.path.join(base_path, "email.ini")

    if os.path.exists(config_path):
        cfg = ConfigParser()
        cfg.read(config_path)
    else:
        print("Config not found! Exiting!")
        sys.exit(1)

    host = cfg.get("smtp", "server")
    from_addr = cfg.get("smtp", "from_addr")

    BODY = "\r\n".join((
            "From: %s" % from_addr,
            "To: %s" % ', '.join(to_emails),
            "CC: %s" % ', '.join(cc_emails),
            "BCC: %s" % ', '.join(bcc_emails),
            "Subject: %s" % subject ,
            "",
            body_text
            ))
    emails = to_emails + cc_emails + bcc_emails

    server = smtplib.SMTP(host)
    server.sendmail(from_addr, emails, BODY)
    server.quit()

if __name__ == "__main__":
    emails = ["mike@somewhere.org"]
    cc_emails = ["someone@gmail.com"]
    bcc_emails = ["schmuck@newtel.net"]

    subject = "Test email from Python"
    body_text = "Python rules them all!"
    send_email(subject, body_text, emails, cc_emails, bcc_emails)
```

В этом коде мы передаем 3 списка, каждый из которых содержит по одному адресу электронной почты. Мы создаем поля CC и BCC точно так же, как и раньше, но нам также нужно объединить три списка в один, чтобы мы могли передать объединенный список в метод sendmail(). На форумах вроде StackOverflow обсуждалось, что некоторые почтовые клиенты могут обрабатывать поле BCC странным образом, что позволяет получателю видеть список BCC в заголовках письма. Я не могу подтвердить такое поведение, но знаю, что Gmail успешно удаляет информацию BCC из заголовка письма.

Теперь мы готовы перейти к использованию модуля электронной почты Python!

## Добавление вложения/тела письма с помощью модуля email

Теперь мы возьмем все то, чему мы научились в предыдущих разделах и смешаем их вместе с модулем email, чтобы отправлять письма с прикрепленными файлами. Модуль email позволяет прикреплять вложения к письму очень просто. Вот код

```sh
import os
import smtplib
import sys

from configparser import ConfigParser
from email import encoders
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email.utils import formatdate

#----------------------------------------------------------------------
def send_email_with_attachment(subject, body_text, to_emails,
                               cc_emails, bcc_emails, file_to_attach):
    """
    Send an email with an attachment
    """
    base_path = os.path.dirname(os.path.abspath(__file__))
    config_path = os.path.join(base_path, "email.ini")
    header = 'Content-Disposition', 'attachment; filename="%s"' % file_to_attach

    # get the config
    if os.path.exists(config_path):
        cfg = ConfigParser()
        cfg.read(config_path)
    else:
        print("Config not found! Exiting!")
        sys.exit(1)

    # extract server and from_addr from config
    host = cfg.get("smtp", "server")
    from_addr = cfg.get("smtp", "from_addr")

    # create the message
    msg = MIMEMultipart()
    msg["From"] = from_addr
    msg["Subject"] = subject
    msg["Date"] = formatdate(localtime=True)
    if body_text:
        msg.attach( MIMEText(body_text) )

    msg["To"] = ', '.join(to_emails)
    msg["cc"] = ', '.join(cc_emails)

    attachment = MIMEBase('application', "octet-stream")
    try:
        with open(file_to_attach, "rb") as fh:
            data = fh.read()
        attachment.set_payload( data )
        encoders.encode_base64(attachment)
        attachment.add_header(*header)
        msg.attach(attachment)
    except IOError:
        msg = "Error opening attachment file %s" % file_to_attach
        print(msg)
        sys.exit(1)

    emails = to_emails + cc_emails

    server = smtplib.SMTP(host)
    server.sendmail(from_addr, emails, msg.as_string())
    server.quit()

if __name__ == "__main__":
    emails = ["mike@someAddress.org", "nedry@jp.net"]
    cc_emails = ["someone@gmail.com"]
    bcc_emails = ["anonymous@circe.org"]

    subject = "Test email with attachment from Python"
    body_text = "This email contains an attachment!"
    path = "/path/to/some/file"
    send_email_with_attachment(subject, body_text, emails,
                               cc_emails, bcc_emails, path)
```

Здесь мы переименовали нашу функцию и добавили новый аргумент, **file_to_attach**. Нам также нужно добавить заголовок и создать объект **MIMEMultipart**. Заголовок может быть создан в любое время перед тем, как мы добавим вложение. Мы добавляем элементы в объект **MIMEMultipart** (msg), как ключи в словарь. Обратите внимание, что для вставки правильно отформатированной даты мы должны использовать метод **formatdate** модуля email. Чтобы добавить тело сообщения, нам нужно создать экземпляр **MIMEText**. Если вы внимательны, вы увидите, что мы не добавили информацию BCC, но вы можете легко сделать это, следуя условиям написанного выше кода. Далее мы добавляем вложение. Мы обернем его в обработчик исключений и используем оператор **with**, чтобы извлечь файл и поместить его в наш объект **MIMEBase**. Наконец, мы добавляем его в переменную **msg** и отправляем его. Обратите внимание, что в методе **sendmail** мы должны преобразовать **msg** в строку.

## Подведение итогов

Теперь вы знаете, как отправлять электронные письма с помощью Python. Тем, кто любит мини-проекты, стоит вернуться назад и добавить дополнительную обработку ошибок в части кода **server.sendmail** на случай, если во время процесса произойдет что-то странное, например, **SMTPAuthenticationError** или **SMTPConnectError**. Мы можем также увеличить обработку ошибок во время прикрепления файла к телу письма, чтобы уловить другие ошибки. Наконец, мы можем взять списки различных писем, чтобы создать один нормальный, в котором отсутствуют дубликаты адресов. Это очень важно, если мы читаем список электронных адресов из файла.

Также обратите внимание, что наш адрес from является поддельным. Мы можем подделывать письма при помощи Python и других языков программирование, однако это крайне неэтично, а в некоторых странах еще и нелегально. Вы были предупреждены! Используйте свои знания с умом и пользуйтесь Python для удовольствия и прибыли!
