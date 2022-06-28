# Глава 34 - SQLAlchemy

**SQLAlchemy** обычно называют **объектно-реляционным маппером (Object Relational Mapper - ORM)**, хотя он гораздо более полнофункциональный, чем любой другой ORM для Python, который я использовал, например, SqlObject или тот, который встроен в Django. SQLAlchemy был создан парнем по имени Майкл Байер. Поскольку я помешан на музыке, мы создадим простую базу данных для хранения информации об альбомах. База данных не является базой данных без некоторых отношений, поэтому мы создадим две таблицы и соединим их. Вот несколько других вещей, которые мы будем изучать:

      -  Добавление данных в каждую таблицу
      -  Изменение данных
      -  Удаление данных
      -  Базовые запросы

    Но сначала нам нужно создать базу данных, поэтому именно с этого мы и начнем наше путешествие. Чтобы следовать этому руководству, вам потребуется установить SQLAlchemy. Для этого мы будем использовать pip:

```sh
pip install sqlalchemy
```

Теперь мы готовы приступить к работе!

## Как создать базу данных

Создать базу данных с помощью SQLAlchemy очень просто. SQLAlchemy использует  метод **Declarative** для создания баз данных. Мы напишем некоторый код для создания базы данных, а затем объясним, как он работает. Если вам нужен способ просмотра базы данных SQLite, я бы рекомендовал плагин SQLite Manager для Firefox. Вот некоторый код для создания таблиц нашей базы данных:

```sh
# table_def.py
from sqlalchemy import create_engine, ForeignKey
from sqlalchemy import Column, Date, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, backref

engine = create_engine('sqlite:///mymusic.db', echo=True)
Base = declarative_base()

class Artist(Base):
    """"""
    __tablename__ = "artists"

    id = Column(Integer, primary_key=True)
    name = Column(String)

class Album(Base):
    """"""
    __tablename__ = "albums"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    release_date = Column(Date)
    publisher = Column(String)
    media_type = Column(String)

    artist_id = Column(Integer, ForeignKey("artists.id"))
    artist = relationship("Artist", backref=backref("albums", order_by=id))

# create tables
Base.metadata.create_all(engine)
```

Если вы запустите этот код, вы должны увидеть что-то похожее на следующий результат:

```sh
2014-04-03 09:43:57,541 INFO sqlalchemy.engine.base.Engine SELECT CAST('test plain returns' AS VARCHAR(60)) AS anon_1
2014-04-03 09:43:57,551 INFO sqlalchemy.engine.base.Engine ()
2014-04-03 09:43:57,551 INFO sqlalchemy.engine.base.Engine SELECT CAST('test unicode returns' AS VARCHAR(60)) AS anon_1
2014-04-03 09:43:57,551 INFO sqlalchemy.engine.base.Engine ()
2014-04-03 09:43:57,551 INFO sqlalchemy.engine.base.Engine PRAGMA table_info("artists")
2014-04-03 09:43:57,551 INFO sqlalchemy.engine.base.Engine ()
2014-04-03 09:43:57,551 INFO sqlalchemy.engine.base.Engine PRAGMA table_info("albums")
2014-04-03 09:43:57,551 INFO sqlalchemy.engine.base.Engine ()
2014-04-03 09:43:57,551 INFO sqlalchemy.engine.base.Engine
CREATE TABLE artists (
    id INTEGER NOT NULL,
    name VARCHAR,
    PRIMARY KEY (id)
)


2014-04-03 09:43:57,551 INFO sqlalchemy.engine.base.Engine ()
2014-04-03 09:43:57,661 INFO sqlalchemy.engine.base.Engine COMMIT
2014-04-03 09:43:57,661 INFO sqlalchemy.engine.base.Engine
CREATE TABLE albums (
    id INTEGER NOT NULL,
    title VARCHAR,
    release_date DATE,
    publisher VARCHAR,
    media_type VARCHAR,
    artist_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY(artist_id) REFERENCES artists (id)
)


2014-04-03 09:43:57,661 INFO sqlalchemy.engine.base.Engine ()
2014-04-03 09:43:57,741 INFO sqlalchemy.engine.base.Engine COMMIT

```

Почему это произошло? Потому что когда мы создали объект engine, мы установили его параметр **echo** в **True**. Engine - это место, где находится информация о подключении к базе данных, и в нем есть все материалы DBAPI, которые делают возможным взаимодействие с вашей базой данных. Вы заметите, что мы создаем базу данных SQLite. Начиная с Python 2.5, SQLite поддерживается языком. Если вы хотите подключиться к какой-либо другой базе данных, то вам нужно будет отредактировать строку подключения. На всякий случай, если вы не понимаете, о чем идет речь, вот код:

```sh
engine = create_engine('sqlite:///mymusic.db', echo=True)
```

Строка **sqlite:///mymusic.db** - это наша строка подключения. Далее мы создаем экземпляр декларативной базы, на которой мы будем основывать наши классы таблиц. Далее у нас есть два класса, **Artist** и **Album**, которые определяют, как будут выглядеть наши таблицы базы данных. Вы заметите, что у нас есть **Columns**, но нет имен столбцов. SQLAlchemy фактически использует имена переменных в качестве имен столбцов, если вы специально не укажете их в определении **Column**. Обратите внимание, что мы используем поле **id** Integer в качестве первичного ключа в обоих классах. Это поле будет автоинкрементным. Остальные столбцы не требуют пояснений, пока вы не дойдете до **ForeignKey**. Здесь вы увидите, что мы связываем **artist_id** с **id** в таблице **Artist**. Директива relationship указывает SQLAlchemy связать класс/таблицу Album с таблицей Artist. Благодаря тому, как мы установили ForeignKey, директива отношения сообщает SQLAlchemy, что это **отношение "многие к одному"**, что нам и нужно. Много альбомов к одному исполнителю. Вы можете прочитать больше об отношениях между таблицами [здесь](http://docs.sqlalchemy.org/en/rel_0_7/orm/relationships.html#relationship-patterns).

Последняя строка сценария создаст таблицы в базе данных. Если вы запустите этот сценарий несколько раз, он не сделает ничего нового после первого раза, поскольку таблицы уже созданы. Однако вы можете добавить еще одну таблицу, и тогда будет создана новая.

## Как вставлять/добавлять данные в таблицы

База данных не очень полезна, если в ней нет данных. В этом разделе мы покажем вам, как подключиться к базе данных и добавить некоторые данные в две таблицы. Гораздо проще посмотреть на код и затем объяснить его, так что давайте сделаем это!

```sh
# add_data.py
import datetime
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from table_def import Album, Artist

engine = create_engine('sqlite:///mymusic.db', echo=True)

# create a Session
Session = sessionmaker(bind=engine)
session = Session()

# Create an artist
new_artist = Artist(name="Newsboys")

new_artist.albums = [Album(title="Read All About It",
                           release_date=datetime.date(1988,12,1),
                           publisher="Refuge", media_type="CD")]

# add more albums
more_albums = [Album(title="Hell Is for Wimps",
                     release_date=datetime.date(1990,7,31),
                     publisher="Star Song", media_type="CD"),
               Album(title="Love Liberty Disco",
                     release_date=datetime.date(1999,11,16),
                     publisher="Sparrow", media_type="CD"),
               Album(title="Thrive",
                     release_date=datetime.date(2002,3,26),
                     publisher="Sparrow", media_type="CD")]
new_artist.albums.extend(more_albums)

# Add the record to the session object
session.add(new_artist)
# commit the record the database
session.commit()

# Add several artists
session.add_all([
    Artist(name="MXPX"),
    Artist(name="Kutless"),
    Artist(name="Thousand Foot Krutch")
    ])
session.commit()

```

Сначала нам нужно импортировать определения наших таблиц из предыдущего сценария. Затем мы подключаемся к базе данных с помощью нашего движка и создаем нечто новое - объект **Session**. Сессия - это наш манипулятор к базе данных, позволяющий нам взаимодействовать с ней. Мы используем его для создания, изменения и удаления записей, а также используем сессии для запросов к базе данных. Далее мы создаем объект **Artist** и добавляем альбом. Вы заметите, что для добавления альбома достаточно создать список объектов **Album** и установить свойство "albums" объекта artist в этот список или расширить его, как показано во второй части примера. В конце сценария мы добавляем еще трех исполнителей с помощью **add_all**. Как вы уже, наверное, заметили, для записи данных в базу данных необходимо использовать метод **commit** объекта session. Теперь пришло время перейти к изменению данных.

## Как изменять записи с помощью SQLAlchemy

Что произойдет, если вы сохранили плохие данные. Например, вы неправильно ввели название своего любимого альбома или ошиблись с датой выхода фанатского издания, которым вы владеете? Тогда вам нужно узнать, как изменить эту запись! Это будет нашей отправной точкой в изучении запросов SQLAlchemy, поскольку вам нужно найти запись, которую нужно изменить, это значит, что вам нужно написать запрос к ней. Вот код, который покажет нам этот путь:

```sh
# modify_data.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from table_def import Album, Artist

engine = create_engine('sqlite:///mymusic.db', echo=True)

# create a Session
Session = sessionmaker(bind=engine)
session = Session()

# querying for a record in the Artist table
res = session.query(Artist).filter(Artist.name=="Kutless").first()
print(res.name)

# changing the name
res.name = "Beach Boys"
session.commit()

# editing Album data
artist, album = session.query(Artist, Album).filter(
    Artist.id==Album.artist_id).filter(Album.title=="Thrive").first()
album.title = "Step Up to the Microphone"
session.commit()

```

Наш первый запрос ищет артиста по имени, используя метод **filter**. Функция **.first()** сообщает SQLAlchemy, что нам нужен только первый результат. Мы могли бы использовать **.all()**, если бы думали, что результатов будет несколько и нам нужны все из них. В любом случае, этот запрос возвращает объект Artist, которым мы можем манипулировать. Как вы видите, мы изменили **name** с **Kutless** на **Beach Boys**, а затем зафиксировали изменения.

Запрос к объединенной таблице немного сложнее. На этот раз мы написали запрос, который запрашивает обе наши таблицы. Он фильтрует по идентификатору исполнителя и названию альбома. Он возвращает два объекта: исполнителя и альбом. Получив их, мы можем легко изменить название альбома. Разве это не просто? На этом этапе, вероятно, стоит отметить, что если мы ошибочно добавили что-то в сессию, мы можем **откатить** наши изменения/добавления/удаления с помощью **session.rollback()**. Кстати, об удалении, давайте разберемся с этим вопросом!

## Как удалять записи в SQLAlchemy

Иногда вам просто необходимо удалить запись. Неважно, потому что вы вовлечены в тайну или потому что вы не хотите, чтобы люди знали о вашей любви к музыке Бритни Спирс, вам просто нужно избавиться от улик. В этом разделе мы покажем вам, как это сделать! К счастью для нас, SQLAlchemy позволяет удалять записи очень просто. Просто взгляните на следующий код!

```sh
# deleting_data.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from table_def import Album, Artist

engine = create_engine('sqlite:///mymusic.db', echo=True)

# create a Session
Session = sessionmaker(bind=engine)
session = Session()

res = session.query(Artist).filter(Artist.name=="MXPX").first()

session.delete(res)
session.commit()
```

Как видите, все, что вам нужно было сделать, это создать еще один SQL-запрос, чтобы найти запись, которую вы хотите удалить, а затем вызвать **session.delete(res)**. В данном случае мы удалили нашу запись MXPX. Мы уже видели запросы в действии, но давайте рассмотрим их подробнее и посмотрим, сможем ли мы узнать что-то новое.

## Основные SQL-запросы SQLAlchemy

SQLAlchemy предоставляет все запросы, которые могут вам понадобиться. Мы потратим немного времени на рассмотрение нескольких основных из них, таких как пара простых SELECT, JOINed SELECT и использование запроса LIKE. Вы также узнаете, где можно найти информацию о других типах запросов. А пока давайте посмотрим на код:

```sh
# queries.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from table_def import Album, Artist

engine = create_engine('sqlite:///mymusic.db', echo=True)

# create a Session
Session = sessionmaker(bind=engine)
session = Session()

# how to do a SELECT * (i.e. all)
res = session.query(Artist).all()
for artist in res:
    print(artist.name)

# how to SELECT the first result
res = session.query(Artist).filter(Artist.name=="Newsboys").first()

# how to sort the results (ORDER_BY)
res = session.query(Album).order_by(Album.title).all()
for album in res:
    print(album.title)

# how to do a JOINed query
qry = session.query(Artist, Album)
qry = qry.filter(Artist.id==Album.artist_id)
artist, album = qry.filter(Album.title=="Step Up to the Microphone").first()

# how to use LIKE in a query
res = session.query(Album).filter(Album.publisher.like("S%a%")).all()
for item in res:
    print(item.publisher)
```

Первый запрос, который мы выполним, возьмет всех исполнителей в базе данных (SELECT *) и выведет каждое из полей с их именами. Далее вы увидите, как просто выполнить запрос для конкретного исполнителя и вернуть только первый результат. Третий запрос показывает, как выполнить SELECT * для таблицы Album и упорядочить результаты по названию альбома. Четвертый запрос - это тот же запрос (запрос на JOIN), который мы использовали в разделе редактирования, только мы разбили его на части, чтобы он лучше соответствовал стандартам PEP8 в отношении длины строки. Еще одна причина разбивать длинные запросы - они становятся более читабельными и их легче исправить, если вы что-то напутали. В последнем запросе используется LIKE, который позволяет нам искать по образцу или искать то, что "похоже" на заданную строку. В данном случае мы хотели найти все записи, в которых издательство начиналось с заглавной буквы "S", какого-либо символа, буквы "a", а затем чего-либо еще. Таким образом, это будет соответствовать, например, издателям Sparrow и Star.

SQLAlchemy также поддерживает IN, IS NULL, NOT, AND, OR и все другие ключевые слова фильтрации, которые используют большинство DBA. SQLAlchemy также поддерживает литеральный SQL, скаляры и т.д. и т.п.

## Подведение итогов

На данном этапе вы должны знать SQLAlchemy достаточно хорошо, чтобы уверенно приступить к ее использованию. Проект также имеет отличную документацию, с помощью которой вы сможете найти ответы практически на все вопросы. Если вы застряли, группа пользователей SQLAlchemy / список рассылки очень отзывчива к новым пользователям, и даже главные разработчики готовы помочь вам разобраться во всем.
