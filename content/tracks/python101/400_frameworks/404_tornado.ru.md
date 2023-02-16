---
title: Tornado
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
weight: 404
---

Tornado - это еще один быстрый веб-фреймворк, который разработан для обработки больших объемов трафика в режиме реального времени.

Для начала работы с Tornado нам нужно установить его, используя команду pip:

```
pip install tornado
```

```python
import tornado.ioloop
import tornado.web
import tornado.escape

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        items = [{'id': 1, 'name': 'Item 1'}, {'id': 2, 'name': 'Item 2'}]
        self.write(tornado.escape.json_encode(items))

class ItemHandler(tornado.web.RequestHandler):
    def get(self, id):
        item = {'id': id, 'name': 'Item ' + id}
        self.write(tornado.escape.json_encode(item))

    def post(self, id):
        item = {'id': id, 'name': self.get_argument('name')}
        self.write(tornado.escape.json_encode(item))

    def put(self, id):
        item = {'id': id, 'name': self.get_argument('name')}
        self.write(tornado.escape.json_encode(item))

    def delete(self, id):
        self.write('Item ' + id + ' deleted')

def make_app():
    return tornado.web.Application([
        (r'/', MainHandler),
        (r'/item/(\d+)', ItemHandler),
    ])

if __name__ == '__main__':
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
```

В этом примере мы создаем два класса-обработчика, один для главной страницы, другой для работы с конкретным элементом. Для тестирования мы создаем два элемента и возвращаем их в формате JSON при запросе к главной странице. 

Когда мы запрашиваем элемент, создается элемент соответствующий запрошенному и возвращается в формате JSON. Методы `post`, `put` и `delete` принимают данные из тела запроса и выполняют соответствующую операцию.

Запуск приложения осуществляется через командную строку:

```
python tornado_app.py
```

После запуска приложения, мы можем обращаться к нему через браузер по адресу http://localhost:8888/. При обращении к адресу http://localhost:8888/item/1, мы получим объект с идентификатором 1 в формате JSON. 

При выполнении запроса `post` на тот же URL с параметрами, мы создадим новый элемент. 

При запросе `put` мы обновим данные существующего элемента, а при выполнении `delete` - удалим элемент с указанным идентификатором.


## Ресурсы

- [Официальная документация Tornado](https://www.tornadoweb.org/)