---
title: Flask
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
weight: 401
---

Flask - это легковесный фреймворк для создания веб-приложений на языке Python. Он подходит как для небольших проектов, так и для крупных веб-приложений. 

Flask не имеет встроенной базы данных или абстракции уровня модели, поэтому вам нужно будет выбрать библиотеку, которая лучше всего подходит для вашего проекта.



```
pip install flask
pip install flask_sqlalchemy
```

Пример CRUD-операций с использованием Flask:

```python
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.db'
db = SQLAlchemy(app)

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    author = db.Column(db.String(100))

@app.route('/books', methods=['GET'])
def get_all_books():
    books = Book.query.all()
    result = [{'id': book.id, 'title': book.title, 'author': book.author} for book in books]
    return jsonify(result)

@app.route('/books/<int:book_id>', methods=['GET'])
def get_book(book_id):
    book = Book.query.get(book_id)
    if book is None:
        return jsonify({'error': 'Book not found'}), 404
    result = {'id': book.id, 'title': book.title, 'author': book.author}
    return jsonify(result)

@app.route('/books', methods=['POST'])
def create_book():
    book = Book(title=request.json['title'], author=request.json['author'])
    db.session.add(book)
    db.session.commit()
    result = {'id': book.id, 'title': book.title, 'author': book.author}
    return jsonify(result), 201

@app.route('/books/<int:book_id>', methods=['PUT'])
def update_book(book_id):
    book = Book.query.get(book_id)
    if book is None:
        return jsonify({'error': 'Book not found'}), 404
    book.title = request.json['title']
    book.author = request.json['author']
    db.session.commit()
    result = {'id': book.id, 'title': book.title, 'author': book.author}
    return jsonify(result)

@app.route('/books/<int:book_id>', methods=['DELETE'])
def delete_book(book_id):
    book = Book.query.get(book_id)
    if book is None:
        return jsonify({'error': 'Book not found'}), 404
    db.session.delete(book)
    db.session.commit()
    return '', 204
```

Данный код использует Flask вместе с библиотекой SQLAlchemy для создания веб-приложения и взаимодействия с базой данных. Роуты приложения обрабатывают HTTP-запросы и возвращают соответствующий HTTP-ответ. В данном примере реализованы операции CRUD (Create, Read, Update, Delete) для модели Book.


**Ресурсы:**

- [Официальная документация Flask](https://flask.palletsprojects.com/)
