---
title: Django
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
weight: 402
---

Django - это высокоуровневый фреймворк для веб-приложений на языке Python. Он предоставляет множество инструментов для разработки сайтов, начиная от автоматического создания административного интерфейса до работы с базами данных. Основными принципами, которыми руководствуется Django, являются: быстрота разработки, возможность переиспользования кода и расширяемость.

Установим необходимые пакеты:

```
pip install django
```

Для начала работы с Django нужно создать проект. Для этого в командной строке нужно ввести команду:

```
django-admin startproject project_name
```

После этого будет создан проект с именем "project_name". Внутри проекта есть файлы настроек и приложения. Приложение - это часть проекта, которая отвечает за определенную функциональность.

Для создания приложения нужно ввести команду:

```
python manage.py startapp app_name
```

Далее можно начинать разработку функциональности внутри приложения.

Пример реализации CRUD операций с использованием Django:

```python
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import Book

def index(request):
    books = Book.objects.all()
    return render(request, 'index.html', {'books': books})

def create(request):
    if request.method == 'POST':
        book = Book(
            title=request.POST.get('title'),
            author=request.POST.get('author'),
            published_date=request.POST.get('published_date')
        )
        book.save()
        return HttpResponseRedirect(reverse('index'))
    return render(request, 'create.html')

def update(request, book_id):
    book = get_object_or_404(Book, pk=book_id)
    if request.method == 'POST':
        book.title = request.POST.get('title')
        book.author = request.POST.get('author')
        book.published_date = request.POST.get('published_date')
        book.save()
        return HttpResponseRedirect(reverse('index'))
    return render(request, 'update.html', {'book': book})

def delete(request, book_id):
    book = get_object_or_404(Book, pk=book_id)
    book.delete()
    return HttpResponseRedirect(reverse('index'))
```

В данном примере определены функции для отображения списка книг (index), создания новой книги (create), обновления существующей книги (update) и удаления книги (delete). Все эти функции используют модель Book, которая определена в файле models.py. Шаблоны (templates) для каждой из функций находятся в отдельных html-файлах.

**Ресурсы:**

- [Официальная документация Django](https://www.djangoproject.com/)
