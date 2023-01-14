---
title: FastAPI
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
weight: 403
---

FastAPI - это фреймворк для создания веб-приложений на Python, использующий современный подход к созданию API и основанный на ASGI-серверах. Он разработан с упором на скорость и быстродействие, предоставляя возможности асинхронного выполнения запросов, автоматического документирования API и многие другие.

Для установки `FastAPI` нужно выполнить команду `pip install fastapi`. Для запуска приложения можно использовать стандартный инструмент `uvicorn`, который также необходимо установить: `pip install uvicorn`.

Пример CRUD приложения на FastAPI:

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Dict

app = FastAPI()

# Имитация базы данных
db = {}

# Модель для создания/редактирования задачи
class Task(BaseModel):
    title: str
    description: str

# Модель для ответа со списком задач
class TaskList(BaseModel):
    tasks: Dict[int, Task]

# Получение списка задач
@app.get("/tasks/", response_model=TaskList)
async def get_tasks():
    return TaskList(tasks=db)

# Получение одной задачи по id
@app.get("/tasks/{task_id}")
async def get_task(task_id: int):
    if task_id not in db:
        raise HTTPException(status_code=404, detail="Task not found")
    return db[task_id]

# Создание новой задачи
@app.post("/tasks/")
async def create_task(task: Task):
    task_id = max(db.keys(), default=0) + 1
    db[task_id] = task
    return {"id": task_id}

# Редактирование задачи
@app.put("/tasks/{task_id}")
async def update_task(task_id: int, task: Task):
    if task_id not in db:
        raise HTTPException(status_code=404, detail="Task not found")
    db[task_id] = task
    return {"message": "Task has been updated"}

# Удаление задачи
@app.delete("/tasks/{task_id}")
async def delete_task(task_id: int):
    if task_id not in db:
        raise HTTPException(status_code=404, detail="Task not found")
    db.pop(task_id)
    return {"message": "Task has been deleted"}
```

Этот код создает простое приложение с API для управления задачами. Он использует модели Pydantic для валидации данных, а также async/await синтаксис для асинхронной обработки запросов. Код использует декораторы FastAPI для определения конечных точек API (маршрутов), а также для указания моделей данных, которые используются для запросов и ответов.





## Ресурсы

- [Официальная документация FastAPI](https://fastapi.tiangolo.com/)
