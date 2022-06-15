---
title: 51 - Установка minikube
description: 
toc: true
authors:
tags: [devops, minikube]
categories:
series: 
date: "2022-06-10"
lastmod: "2022-06-10"
featuredImage:
draft: false
id: 1048778
---
## Развертывание вашего первого кластера Kubernetes 

В этом посте мы собираемся запустить кластер Kubernetes на нашей локальной машине с помощью minikube, это даст нам базовый кластер Kubernetes для остальной части раздела Kubernetes, хотя позже мы рассмотрим развертывание кластера Kubernetes и в VirtualBox. Причина, по которой мы выбрали этот метод, а не развертывание управляемого кластера Kubernetes в публичном облаке, заключается в том, что это будет стоить денег даже при бесплатном уровне, однако я поделился некоторыми блогами, если вы захотите развернуть такую среду в предыдущем разделе [День 50](../day50). 

### Что такое Minikube? 

Minikube быстро создает локальный кластер Kubernetes на macOS, Linux и Windows.

Для начала, независимо от ОС вашей рабочей станции, вы можете запустить minikube. Сначала перейдите на [страницу проекта](https://minikube.sigs.k8s.io/docs/start/). Первая опция, которая у вас есть, это выбор метода установки. Я не использовал этот метод, но вы можете выбрать мой способ (о моем способе речь впереди). 

Ниже упоминается, что вам необходимо иметь "Менеджер контейнеров или виртуальных машин, такой как: Docker, Hyperkit, Hyper-V, KVM, Parallels, Podman, VirtualBox или VMware" - это то, где будет работать MiniKube, и это простой вариант, и если не указано в репозитории, я использую Docker. Вы можете установить Docker на свою систему, используя следующую [ссылку](https://docs.docker.com/get-docker/).

[Понятное руководство по установке minikube](https://kubernetes.io/ru/docs/tasks/tools/install-minikube/)

![](../images/Day51_Kubernetes1.png?v1)

### Мой способ установки minikube и других предварительных требований...

Я уже некоторое время использую arkade, чтобы получить все эти инструменты Kubernetes и CLI, вы можете посмотреть шаги установки на этом [github репозитории](https://github.com/alexellis/arkade) для начала работы с Arkade. Я также упоминал об этом в других записях блога, когда мне нужно было что-то установить. Простота установки: достаточно нажать arkade get и посмотреть, доступен ли ваш инструмент или cli, очень удобна. В разделе Linux мы говорили о менеджере пакетов и процессе получения нашего программного обеспечения, вы можете думать об Arkade как о рынке для всех ваших приложений и clis для Kubernetes. Очень удобный инструмент, который нужно иметь в своих системах, написанный на Golang и кроссплатформенный. 

![](../images/Day51_Kubernetes2.png?v1)

В длинном списке доступных приложений в arkade minikube является одним из них, поэтому с помощью простой команды `arkade get minikube` мы загружаем бинарник и можем приступать.

![](../images/Day51_Kubernetes3.png?v1)

Нам также понадобится kubectl как часть нашего инструментария, поэтому вы можете получить его через arkade или, как я полагаю, в документации по minikube он представлен как часть команд curl, упомянутых выше. Подробнее о kubectl мы расскажем позже в этом посте. 

### Получение и запуск кластера Kubernetes

В этом конкретном разделе я хочу рассказать о доступных нам вариантах запуска кластера Kubernetes на вашей локальной машине. Мы можем просто выполнить следующую команду, и она запустит кластер для использования.

minikube используется в командной строке, и, проще говоря, после того как вы все установили, вы можете выполнить команду `minikube start` для развертывания вашего первого кластера Kubernetes. Ниже вы увидите, что драйвер Docker по умолчанию является местом, где мы будем запускать наш вложенный узел виртуализации. В начале статьи я упомянул о других доступных опциях, которые помогут вам расширить вид локального кластера Kubernetes. 

Один кластер Minikube будет состоять из одного контейнера docker, в котором будут находиться узел плоскости управления и рабочий узел в одном экземпляре. Обычно вы разделяете эти узлы по отдельности. Об этом мы расскажем в следующем разделе, где мы рассмотрим домашние лабораторные среды Kubernetes, но немного ближе к производственной архитектуре. 

![](../images/Day51_Kubernetes4.png?v1)

Я уже несколько раз говорил об этом, мне очень нравится minikube из-за доступных дополнений, возможность развернуть кластер с помощью простой команды, включающей все необходимые дополнения с самого начала, действительно помогает мне каждый раз развертывать одну и ту же необходимую установку.

Ниже представлен список этих аддонов, я обычно использую аддоны `csi-hostpath-driver` и `volumesnapshots`, но вы можете увидеть длинный список ниже. Конечно, эти аддоны могут быть развернуты с помощью Helm, о чем мы расскажем позже в разделе Kubernetes, но это значительно упрощает работу. 

![](../images/Day51_Kubernetes5.png?v1)

Я также определяю в нашем проекте некоторые дополнительные конфигурации, apiserver установлен на 6433 вместо случайного порта API, я определяю время выполнения контейнера также на containerd, однако docker используется по умолчанию, и CRI-O также доступен. Я также устанавливаю определенную версию Kubernetes. 

![](../images/Day51_Kubernetes6.png?v1)

Теперь мы готовы развернуть наш первый кластер Kubernetes с помощью minikube. Я уже упоминал, что вам также понадобится `kubectl` для взаимодействия с вашим кластером. Вы можете установить kubectl с помощью arkade, выполнив команду `arkade get kubectl`.  

![](../images/Day51_Kubernetes7.png?v1)

или вы можете загрузить кросс-платформенную версию со следующих сайтов 

- [Linux](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux)
- [macOS](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos)
- [Windows](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows)

После установки kubectl мы можем взаимодействовать с нашим кластером с помощью простой команды `kubectl get nodes`.
 
![](../images/Day51_Kubernetes8.png?v1)

### Что такое kubectl?

Теперь у нас есть наш кластер minikube | Kubernetes, и я попросил вас установить Minikube, где я объяснил, что он делает, но я не объяснил, что такое kubectl и что он делает. 

kubectl - это программа, которая используется или позволяет вам взаимодействовать с кластерами Kubernetes, мы используем ее здесь для взаимодействия с нашим кластером minikube, но мы также используем kubectl для взаимодействия с нашими корпоративными кластерами в публичном облаке. 

Мы используем kubectl для развертывания приложений, проверки и управления ресурсами кластера. Гораздо лучший [Обзор kubectl](https://kubernetes.io/docs/reference/kubectl/overview/) можно найти здесь, в официальной документации Kubernetes. 

kubectl взаимодействует с сервером API, расположенным на узле Control Plane, о котором мы вкратце рассказывали в одном из предыдущих постов. 

### kubectl шпаргалка

Наряду с официальной документацией я также обнаружил, что при поиске команд kubectl у меня постоянно открыта эта страница. [Unofficial Kubernetes](https://unofficial-kubernetes.readthedocs.io/en/latest/)

|Listing Resources               |                                           |
| ------------------------------ | ----------------------------------------- |
|kubectl get nodes               |List all nodes in cluster                  |  
|kubectl get namespaces          |List all namespaces in cluster             |  
|kubectl get pods                |List all pods in default namespace cluster |
|kubectl get pods -n name        |List all pods in "name" namespace          |
|kubectl get pods -n name        |List all pods in "name" namespace          |

|Creating Resources              |                                           |
| ------------------------------ | ----------------------------------------- |
|kubectl create namespace name   |Create a namespace called "name"           |  
|kubectl create -f [filename]    |Create a resource from a JSON or YAML file:| 

|Editing Resources               |                                           |
| ------------------------------ | ----------------------------------------- |
|kubectl edit svc/servicename    |To edit a service                          |

|More detail on Resources        |                                                        |
| ------------------------------ | ------------------------------------------------------ |
|kubectl describe nodes          | display the state of any number of resources in detail,|

|Delete Resources                |                                                        |
| ------------------------------ | ------------------------------------------------------ |
|kubectl delete pod              | Remove resources, this can be from stdin or file       |

Вы захотите узнать краткие названия некоторых команд kubectl, например, `-n` - это краткое название для `namespace`, что облегчает ввод команды, а также, если вы пишете сценарии, вы можете получить гораздо более аккуратный код.

| Short name           | Full name                    |
| -------------------- | ---------------------------- |
|  csr                 |  certificatesigningrequests  |
|  cs                  |  componentstatuses           |
|  cm                  |  configmaps                  |
|  ds                  |  daemonsets                  |
|  deploy              |  deployments                 |
|  ep                  |  endpoints                   |
|  ev                  |  events                      |
|  hpa                 |  horizontalpodautoscalers    |
|  ing                 |  ingresses                   |
|  limits              |  limitranges                 |
|  ns                  |  namespaces                  |
|  no                  |  nodes                       |
|  pvc                 |  persistentvolumeclaims      |
|  pv                  |  persistentvolumes           |
|  po                  |  pods                        |
|  pdb                 |  poddisruptionbudgets        |
|  psp                 |  podsecuritypolicies         |
|  rs                  |  replicasets                 |
|  rc                  |  replicationcontrollers      |
|  quota               |  resourcequotas              |
|  sa                  |  serviceaccounts             |
|  svc                 |  services                    |

В заключение хочу добавить, что я создал еще один проект на основе minikube, чтобы помочь мне быстро развернуть демонстрационные среды для демонстрации сервисов данных и защиты этих рабочих нагрузок с помощью Kasten K10, [Project Pace](https://github.com/MichaelCade/project_pace) можно найти там и буду рад вашим отзывам или взаимодействию, он также показывает или включает некоторые автоматизированные способы развертывания кластеров minikube и создания различных приложений сервисов данных. 

Далее мы перейдем к развертыванию нескольких узлов в виртуальные машины с помощью VirtualBox, но здесь мы будем действовать проще, как мы делали в разделе Linux, где мы использовали vagrant для быстрого запуска машин и развертывания нашего программного обеспечения, как мы хотим. 

Я добавил этот список к вчерашнему посту, который представляет собой блоги с описанием развертывания различных кластеров Kubernetes. 

- [Kubernetes playground – How to choose your platform](https://vzilla.co.uk/vzilla-blog/building-the-home-lab-kubernetes-playground-part-1)
- [Kubernetes playground – Setting up your cluster](https://vzilla.co.uk/vzilla-blog/building-the-home-lab-kubernetes-playground-part-2)
- [Getting started with Amazon Elastic Kubernetes Service (Amazon EKS)](https://vzilla.co.uk/vzilla-blog/getting-started-with-amazon-elastic-kubernetes-service-amazon-eks)
- [Getting started with Microsoft Azure Kubernetes Service (AKS)](https://vzilla.co.uk/vzilla-blog/getting-started-with-microsoft-azure-kubernetes-service-aks)
- [Getting Started with Microsoft AKS – Azure PowerShell Edition](https://vzilla.co.uk/vzilla-blog/getting-started-with-microsoft-aks-azure-powershell-edition)
- [Getting started with Google Kubernetes Service (GKE)](https://vzilla.co.uk/vzilla-blog/getting-started-with-google-kubernetes-service-gke)
- [Kubernetes, How to – AWS Bottlerocket + Amazon EKS](https://vzilla.co.uk/vzilla-blog/kubernetes-how-to-aws-bottlerocket-amazon-eks)
- [Getting started with CIVO Cloud](https://vzilla.co.uk/vzilla-blog/getting-started-with-civo-cloud)
- [Minikube - Kubernetes Demo Environment For Everyone](https://vzilla.co.uk/vzilla-blog/project_pace-kasten-k10-demo-environment-for-everyone)

## Ресурсы 

- [Kubernetes Documentation](https://kubernetes.io/docs/home/)
- [TechWorld with Nana - Kubernetes Tutorial for Beginners [FULL COURSE in 4 Hours]](https://www.youtube.com/watch?v=X48VuDVv0do)
- [TechWorld with Nana - Kubernetes Crash Course for Absolute Beginners](https://www.youtube.com/watch?v=s_o8dwzRlu4)
- [Kunal Kushwaha - Kubernetes Tutorial for Beginners | What is Kubernetes? Architecture Simplified!](https://www.youtube.com/watch?v=KVBON1lA9N8)

