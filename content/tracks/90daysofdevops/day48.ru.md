---
title: 48. Альтернативы Docker
description: 
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-06-07"
lastMod: "2022-06-07"
featuredImage:
draft: false
id: 1048807
weight: 48
---
## Альтернативы Docker

В самом начале этого раздела я говорил, что мы будем использовать Docker, просто потому, что ресурсов очень много, а сообщество очень большое, но также именно с него начался толчок к популярности контейнеров. Я бы посоветовал вам пойти и посмотреть немного истории о Docker и о том, как он появился, я нашел это очень полезным.

Но, как я уже упоминал, существуют и другие альтернативы Docker. Если мы подумаем о том, что такое Docker и что мы уже рассмотрели. Это платформа для разработки, тестирования, развертывания и управления приложениями.

Я хочу выделить несколько альтернатив Docker, которые вы можете увидеть или увидите в будущем.

### Podman

Что такое Podman? Podman - это контейнерный движок без демонов для разработки, управления и запуска OCI-контейнеров в вашей системе Linux. Контейнеры могут быть запущены от имени root или в режиме rootless.

Я буду рассматривать это с точки зрения Windows, но знаю, что, как и в случае с Docker, здесь не требуется виртуализация, поскольку он будет использовать базовую ОС, чего нельзя сделать в мире Windows.

Podman может быть запущен под WSL2, хотя и не так гладко, как в случае с Docker Desktop. Существует также удаленный клиент Windows, с помощью которого можно подключиться к виртуальной машине Linux, где будут запущены ваши контейнеры.

Мой Ubuntu на WSL2 - это версия 20.04. Следуя следующим шагам, вы сможете установить Podman на свой экземпляр WSL.

```
echo "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_20.04/ /" |
sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
```

Добавим ключ GPG

```
curl -L "https://download.opensuse.org/repositories/devel:/kubic:\
/libcontainers:/stable/xUbuntu_20.04/Release.key" | sudo apt-key add -
```

Запустите обновление системы с помощью команды `sudo apt-get update && sudo apt-get upgrade`. Наконец, мы можем установить podman с помощью команды `sudo apt install podman`.

Теперь мы можем использовать многие из тех же команд, которые мы использовали для docker, однако обратите внимание, что у нас нет красивого пользовательского интерфейса рабочего стола docker. Вы можете видеть ниже, я использовал `podman images` и у меня ничего не появилось после установки, затем я использовал `podman pull ubuntu` для извлечения образа контейнера ubuntu.

![](../images/Day48_Containers1.ru.png?v1)

Затем мы можем запустить наш образ Ubuntu с помощью `podman run -dit ubuntu` и `podman ps`, чтобы увидеть наш запущенный образ.

![](../images/Day48_Containers2.ru.png?v1)

Чтобы попасть в этот контейнер, мы можем выполнить команду `podman attach dazzling_darwin`, имя вашего контейнера, скорее всего, будет другим.

![](../images/Day48_Containers3.ru.png?v1)

Если вы переходите от docker к podman, то обычно также необходимо изменить ваш конфигурационный файл на `alias docker=podman`, тогда любая команда, запущенная с помощью docker, будет использовать podman.

### LXC

LXC - это механизм контейнеризации, который позволяет пользователям снова создавать несколько изолированных контейнерных сред Linux. В отличие от Docker LXC действует как гипервизор для создания нескольких Linux-машин с отдельными системными файлами, сетевыми функциями. Появился еще до Docker, а затем сделал короткое возвращение из-за недостатков Docker.

LXC такой же легкий, как и docker, и легко развертывается.

### Containerd

Автономная среда выполнения контейнеров. Containerd обеспечивает простоту и надежность, а также, конечно, переносимость. Ранее Containerd был инструментом, работающим как часть контейнерных сервисов Docker, пока Docker не решил вывести свои компоненты в самостоятельные.

Проект в Cloud Native Computing Foundation, что ставит его в один ряд с такими популярными контейнерными инструментами, как Kubernetes, Prometheus и CoreDNS.

### Другие инструменты Docker

Мы могли бы также упомянуть инструменты и опции вокруг Rancher, VirtualBox, но мы можем рассказать о них более подробно в другой раз.  

[**Gradle**](https://gradle.org/)

- Сканирование сборки позволяет командам совместно отлаживать свои скрипты и отслеживать историю всех сборок.
- Опции выполнения дают командам возможность непрерывной сборки так, чтобы при каждом вводе изменений задание выполнялось автоматически.
- Настраиваемый макет репозитория дает командам возможность рассматривать любую структуру файловых каталогов как хранилище артефактов.

[**Packer**](https://packer.io/)

- Возможность параллельного создания нескольких машинных образов для экономии времени разработчиков и повышения эффективности.
- Команды могут легко отлаживать сборки с помощью отладчика Packer, который проверяет сбои и позволяет командам опробовать решения перед перезапуском сборки.
- Поддержка многих платформ с помощью плагинов, что позволяет командам настраивать свои сборки.

[**Logspout**](https://github.com/gliderlabs/logspout)

- Инструмент для ведения логов - настраиваемость инструмента позволяет командам отправлять одни и те же логи в несколько мест назначения.
- Команды могут легко управлять своими файлами, поскольку инструмент требует только доступа к сокету Docker.
- Полностью с открытым исходным кодом и прост в развертывании.

[**Logstash**](https://www.elastic.co/products/logstash)

- Настройте свой конвейер с помощью подключаемой структуры Logstash.
- Легко анализируйте и преобразуйте данные для анализа и повышения ценности бизнеса.
- Разнообразие выходов Logstash позволяет направлять данные туда, куда вам нужно.

[**Portainer**](https://www.portainer.io/)

- Используйте готовые шаблоны или создавайте свои собственные для развертывания приложений.
- Создавайте команды и назначайте роли и разрешения для членов команды.
- Узнайте, что запущено в каждой среде, используя приборную панель инструмента.

## Ресурсы

- [TechWorld with Nana - Docker Tutorial for Beginners](https://www.youtube.com/watch?v=3c-iBn73dDE)
- [Programming with Mosh - Docker Tutorial for Beginners](https://www.youtube.com/watch?v=pTFZFxd4hOI)
- [Docker Tutorial for Beginners - What is Docker? Introduction to Containers](https://www.youtube.com/watch?v=17Bl31rlnRM&list=WL&index=128&t=61s)
- [WSL 2 with Docker getting started](https://www.youtube.com/watch?v=5RQbdMn04Oc)
- [Blog on gettng started building a docker image](https://stackify.com/docker-build-a-beginners-guide-to-building-docker-images/)
- [Docker documentation for building an image](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [YAML Tutorial: Everything You Need to Get Started in Minute](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started)
- [Podman | Daemonless Docker | Getting Started with Podman](https://www.youtube.com/watch?v=Za2BqzeZjBk)
- [LXC - Guide to building a LXC Lab](https://www.youtube.com/watch?v=cqOtksmsxfg)
