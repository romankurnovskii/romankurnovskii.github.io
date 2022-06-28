# Глава 21 - Модуль потоков

В Python есть несколько различных конструкций параллелизма, таких как threading, queues и мультипроцессинг. Раньше модуль threading был основным способом реализации multiprocessing. Несколько лет назад в набор стандартных библиотек Python был добавлен модуль multiprocessing. Эта глава будет посвящена использованию потоков и очередей.

## Использование потоков

Мы начнем с простого примера, который просто демонстрирует работу потоков. Мы создадим подкласс класса **Thread** и заставим его выводить свое имя в stdout. Приступим к кодированию!

```sh
import random
import time

from threading import Thread

class MyThread(Thread):
    """
    A threading example
    """

    def __init__(self, name):
        """Initialize the thread"""
        Thread.__init__(self)
        self.name = name

    def run(self):
        """Run the thread"""
        amount = random.randint(3, 15)
        time.sleep(amount)
        msg = "%s is running" % self.name
        print(msg)

def create_threads():
    """
    Create a group of threads
    """
    for i in range(5):
        name = "Thread #%s" % (i+1)
        my_thread = MyThread(name)
        my_thread.start()

if __name__ == "__main__":
    create_threads()

```
В приведенном выше коде мы импортируем модуль Python **random**, модуль **time** и импортируем класс **Thread** из модуля **threading**. Далее мы создаем подкласс Thread и переопределяем его метод **__init__**, чтобы он принимал аргумент, который мы обозначим как name. Чтобы запустить поток, нужно вызвать его метод **start()**. Когда вы запускаете поток, автоматически вызывается метод **run**. Мы переопределили метод **run** потока, чтобы заставить его выбрать случайный промежуток времени для сна. Приведенный здесь пример **random.randint** заставит Python случайным образом выбрать число от 3 до 15. Затем мы заставим поток спать то количество секунд, которое мы только что случайно выбрали, чтобы имитировать, что он действительно что-то делает. Наконец, мы выводим имя потока, чтобы дать пользователю знать, что поток завершен.

Функция create_threads создаст 5 потоков, присвоив каждому из них уникальное имя. Если вы запустите этот код, вы должны увидеть что-то вроде этого:

```sh
Thread #2 is running
Thread #3 is running
Thread #1 is running
Thread #4 is running
Thread #5 is running
```

Порядок вывода будет отличаться каждый раз. Попробуйте выполнить код несколько раз, чтобы увидеть смену порядка. Теперь давайте напишем что-нибудь более практичное!

## Написание потокового загрузчика

Предыдущий пример был не очень полезен, кроме как в качестве инструмента для объяснения работы потоков. Поэтому в этом примере мы создадим класс Thread, который сможет загружать файлы из Интернета. Налоговая служба США имеет множество PDF-форм, которые граждане используют для уплаты налогов. Мы будем использовать этот бесплатный ресурс для нашей демонстрации. Вот код:

```sh
# Python 2 version

import os
import urllib2

from threading import Thread

class DownloadThread(Thread):
    """
    A threading example that can download a file
    """

    def __init__(self, url, name):
        """Initialize the thread"""
        Thread.__init__(self)
        self.name = name
        self.url = url

    def run(self):
        """Run the thread"""
        handle = urllib2.urlopen(self.url)
        fname = os.path.basename(self.url)
        with open(fname, "wb") as f_handler:
            while True:
                chunk = handle.read(1024)
                if not chunk:
                    break
                f_handler.write(chunk)
        msg = "%s has finished downloading %s!" % (self.name,
                                                   self.url)
        print(msg)

def main(urls):
    """
    Run the program
    """
    for item, url in enumerate(urls):
        name = "Thread %s" % (item+1)
        thread = DownloadThread(url, name)
        thread.start()

if __name__ == "__main__":
    urls = ["http://www.irs.gov/pub/irs-pdf/f1040.pdf",
            "http://www.irs.gov/pub/irs-pdf/f1040a.pdf",
            "http://www.irs.gov/pub/irs-pdf/f1040ez.pdf",
            "http://www.irs.gov/pub/irs-pdf/f1040es.pdf",
            "http://www.irs.gov/pub/irs-pdf/f1040sb.pdf"]
    main(urls)
```

По сути, это полная переработка первого сценария. В нем мы импортируем модули os и urllib2, а также модуль threading. Мы будем использовать urllib2 для выполнения фактической загрузки внутри класса потока. Модуль os используется для извлечения имени загружаемого файла, чтобы мы могли использовать его для создания файла с таким же именем на нашей машине. В классе DownloadThread мы настраиваем __init__ для приема url и имени потока. В методе run мы открываем url, извлекаем имя файла и затем используем это имя для именования / создания файла на диске. Затем мы используем цикл **while** для загрузки файла по килобайту за раз и записи его на диск. После завершения сохранения файла мы выводим имя потока и url, который закончил загрузку.

Версия кода для Python 3 немного отличается. Вы должны импортировать **urllib** вместо **urllib2** и использовать **urllib.request.urlopen** вместо **urllib2.urlopen**. Вот код, чтобы вы могли увидеть разницу:

```sh
# Python 3 version

import os
import urllib.request

from threading import Thread

class DownloadThread(Thread):
    """
    A threading example that can download a file
    """

    def __init__(self, url, name):
        """Initialize the thread"""
        Thread.__init__(self)
        self.name = name
        self.url = url

    def run(self):
        """Run the thread"""
        handle = urllib.request.urlopen(self.url)
        fname = os.path.basename(self.url)
        with open(fname, "wb") as f_handler:
            while True:
                chunk = handle.read(1024)
                if not chunk:
                    break
                f_handler.write(chunk)
        msg = "%s has finished downloading %s!" % (self.name,
                                                   self.url)
        print(msg)

def main(urls):
    """
    Run the program
    """
    for item, url in enumerate(urls):
        name = "Thread %s" % (item+1)
        thread = DownloadThread(url, name)
        thread.start()

if __name__ == "__main__":
    urls = ["http://www.irs.gov/pub/irs-pdf/f1040.pdf",
            "http://www.irs.gov/pub/irs-pdf/f1040a.pdf",
            "http://www.irs.gov/pub/irs-pdf/f1040ez.pdf",
            "http://www.irs.gov/pub/irs-pdf/f1040es.pdf",
            "http://www.irs.gov/pub/irs-pdf/f1040sb.pdf"]
    main(urls)

```

## Использование Queues

Очередь(Queues Python) может быть использована для стековых реализаций «пришел первым – ушел первым» (first-in-first-out (FIFO)) или же «пришел последним – ушел последним» (last-in-last-out (LILO)) , если вы используете их правильно. В этом разделе мы смешаем потоки и создадим простой сценарий загрузки файлов, чтобы продемонстрировать, как работают очереди в случаях, когда нам нужен параллелизм.

Чтобы объяснить, как работают Queues, мы перепишем сценарий загрузки из предыдущего раздела, чтобы использовать Queues. Давайте начнем!

```sh
import os
import threading
import urllib.request

from queue import Queue

class Downloader(threading.Thread):
    """Threaded File Downloader"""

    def __init__(self, queue):
        """Initialize the thread"""
        threading.Thread.__init__(self)
        self.queue = queue

    def run(self):
        """Run the thread"""
        while True:
            # gets the url from the queue
            url = self.queue.get()

            # download the file
            self.download_file(url)

            # send a signal to the queue that the job is done
            self.queue.task_done()

    def download_file(self, url):
        """Download the file"""
        handle = urllib.request.urlopen(url)
        fname = os.path.basename(url)
        with open(fname, "wb") as f:
            while True:
                chunk = handle.read(1024)
                if not chunk: break
                f.write(chunk)

def main(urls):
    """
    Run the program
    """
    queue = Queue()

    # create a thread pool and give them a queue
    for i in range(5):
        t = Downloader(queue)
        t.setDaemon(True)
        t.start()

    # give the queue some data
    for url in urls:
        queue.put(url)

    # wait for the queue to finish
    queue.join()

if __name__ == "__main__":
    urls = ["http://www.irs.gov/pub/irs-pdf/f1040.pdf",
            "http://www.irs.gov/pub/irs-pdf/f1040a.pdf",
            "http://www.irs.gov/pub/irs-pdf/f1040ez.pdf",
            "http://www.irs.gov/pub/irs-pdf/f1040es.pdf",
            "http://www.irs.gov/pub/irs-pdf/f1040sb.pdf"]
    main(urls)
```
Давайте немного разложим это по полочкам. Прежде всего, нам нужно посмотреть на определение главной функции, чтобы увидеть, как все это работает. Здесь мы видим, что она принимает список url адресов. Затем функция main создает экземпляр очереди, который она передает 5 демонизированным потокам. Основная разница между демонизированным и недемонизированным потоком в том, что вам нужно отслеживать недемонизированные потоки и закрывать их вручную, в то время как поток «демон» нужно только запустить и забыть о нем. Когда ваше приложение закроется, закроется и поток. Далее мы загрузили очередь (при помощи метода put) вместе с переданными url.

Наконец, мы говорим очереди ждать, пока потоки выполнят свою обработку, используя метод join. В классе загрузки у нас есть строка **self.queue.get()**, которая блокирует очередь до тех пор, пока ей не будет что вернуть. Это означает, что потоки просто сидят без дела, ожидая, пока очередь что-нибудь получит. Это также означает, что для того, чтобы поток мог **получить** что-то из очереди, он должен вызвать метод очереди **get**. Таким образом, по мере добавления или помещения элементов в очередь пул потоков будет забирать или **получать** элементы и обрабатывать их. Это также известно как **dequeing**. Когда все элементы в очереди обработаны, сценарий завершает работу и выходит из программы. На моей машине он загружает все 5 документов менее чем за секунду.

## Подведение итогов

Теперь вы знаете, как использовать потоки и очереди как в теории, так и на практике. Потоки особенно полезны, когда вы создаете пользовательский интерфейс и хотите сохранить его работоспособность. Без потоков пользовательский интерфейс стал бы неотзывчивым и завис бы во время загрузки большого файла или выполнения большого запроса к базе данных. Чтобы этого не произошло, вы выполняете длительные процессы в потоках, а затем возвращаетесь к интерфейсу, когда закончите.
