---
title: 52. Настройка многоузлового кластера Kubernetes
description: 
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-06-11"
lastmod: "2022-06-11"
featuredImage:
draft: false
id: 1049050
weight: 52
---
## Настройка многоузлового кластера Kubernetes 

Я хотел назвать эту статью "Настройка многоузлового кластера Kubernetes с помощью Vagrant", но подумал, что это будет слишком длинно! 

На вчерашней сессии мы использовали классный проект для развертывания нашего первого кластера Kubernetes и немного поработали с самым важным инструментом CLI, с которым вы столкнетесь при использовании Kubernetes (kubectl). 

Здесь мы будем использовать VirtualBox в качестве основы, но, как мы уже говорили о Vagrant в разделе Linux, мы можем использовать любой гипервизор или инструмент виртуализации. Это был [День 14](../day14), когда мы прошли и развернули машину Ubuntu для раздела Linux. 

### Краткая информация о Vagrant 

Vagrant - это утилита CLI, которая управляет жизненным циклом ваших виртуальных машин. Мы можем использовать vagrant для запуска и разворачивания виртуальных машин на различных платформах, включая vSphere, Hyper-v, Virtual Box и Docker. У него есть и другие поставщики, но мы будем придерживаться этого, мы используем Virtual Box, так что все готово. 

Я собираюсь использовать базовый уровень этого [блога и репозитория](https://devopscube.com/kubernetes-cluster-vagrant/), чтобы пройтись по конфигурации. Однако я бы посоветовал, если вы впервые развертываете кластер Kubernetes, посмотреть, как это делается вручную, и тогда вы хотя бы будете знать, как это выглядит. Хотя я должен сказать, что эти операции и усилия дня 0 становятся все более эффективными с каждым выпуском Kubernetes. Я сравниваю это с временами VMware и ESX, когда для развертывания 3 серверов ESX требовался по меньшей мере день, а теперь мы можем сделать это за час. Мы движемся в этом направлении, когда речь идет о Kubernetes". 

### Лабораторная среда Kubernetes 

Я загрузил в [папку Kubernetes](../kubernetes) vagrantfile, который мы будем использовать для создания нашей среды. Возьмите его и перейдите в этот каталог в терминале. Я снова использую Windows, поэтому я буду использовать PowerShell для выполнения команд рабочей станции с vagrant. Если у вас нет vagrant, вы можете использовать arkade, о котором мы говорили вчера при установке minikube и других инструментов. Простая команда `arkade get vagrant` должна заставить вас загрузить и установить последнюю версию vagrant. 

Когда вы окажетесь в своей директории, вы можете просто запустить `vagrant up`, и если все настроено правильно, вы должны увидеть в терминале следующее. 

![](../images/Day52_Kubernetes1.ru.png?v1)

 В терминале вы увидите ряд шагов, но тем временем давайте посмотрим, что мы на самом деле создаем. 

![](../images/Day52_Kubernetes2.ru.png?v1)

Из приведенного выше изображения видно, что мы собираемся создать 3 виртуальные машины, у нас будет узел плоскости управления и два рабочих узла. Если вы вернетесь к [День 49](.../day49), вы увидите более подробное описание этих областей, которые мы видим на изображении. 

Также на изображении мы указываем, что наш доступ к kubectl будет происходить извне кластера и попадать в kube apiserver, в то время как на самом деле в рамках инициализации vagrant мы развертываем kubectl на каждом из этих узлов, чтобы мы могли получить доступ к кластеру изнутри каждого из наших узлов. 

Процесс создания этой лаборатории может занять от 5 до 30 минут в зависимости от вашей установки. 

Я собираюсь в ближайшее время рассказать о скриптах, но если вы посмотрите в файл vagrant, то заметите, что мы вызываем 3 скрипта как часть развертывания, и именно здесь создается кластер. Мы видели, как легко использовать vagrant для развертывания наших виртуальных машин и установки ОС с помощью боксов vagrant, но возможность запуска скрипта оболочки как часть процесса развертывания - это то, что становится довольно интересным в автоматизации этих лабораторных сборок. 

После завершения мы можем подключиться по ssh к одному из наших узлов `vagrant ssh master` из терминала должен получить доступ, имя пользователя и пароль по умолчанию - `vagrant/vagrant`. 

Вы также можете использовать `vagrant ssh node01` и `vagrant ssh node02` для получения доступа к рабочим узлам, если хотите. 

![](../images/Day52_Kubernetes3.ru.png?v1)

Теперь мы находимся на одном из вышеуказанных узлов нашего нового кластера, мы можем выдать команду `kubectl get nodes`, чтобы показать наш 3-узловой кластер и его статус. 

![](../images/Day52_Kubernetes4.ru.png?v1)

На данный момент у нас есть запущенный 3-узловой кластер, с 1 узлом плоскости управления и 2 рабочими узлами. 

### Vagrantfile и Shell Script walkthrough 

Если мы посмотрим на наш vagrantfile, вы увидите, что мы определяем количество рабочих узлов, сетевые IP-адреса для мостовой сети в VirtualBox, а также некоторые именования. Еще вы заметите, что мы также вызываем некоторые скрипты, которые мы хотим запустить на определенных хостах.  

``` 
NUM_WORKER_NODES=2
IP_NW="10.0.0."
IP_START=10

Vagrant.configure("2") do |config|
    config.vm.provision "shell", inline: <<-SHELL
        apt-get update -y
        echo "$IP_NW$((IP_START))  master-node" >> /etc/hosts
        echo "$IP_NW$((IP_START+1))  worker-node01" >> /etc/hosts
        echo "$IP_NW$((IP_START+2))  worker-node02" >> /etc/hosts
    SHELL
    config.vm.box = "bento/ubuntu-21.10"
    config.vm.box_check_update = true

    config.vm.define "master" do |master|
      master.vm.hostname = "master-node"
      master.vm.network "private_network", ip: IP_NW + "#{IP_START}"
      master.vm.provider "virtualbox" do |vb|
          vb.memory = 4048
          vb.cpus = 2
          vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
      end
      master.vm.provision "shell", path: "scripts/common.sh"
      master.vm.provision "shell", path: "scripts/master.sh"
    end

    (1..NUM_WORKER_NODES).each do |i|
      config.vm.define "node0#{i}" do |node|
        node.vm.hostname = "worker-node0#{i}"
        node.vm.network "private_network", ip: IP_NW + "#{IP_START + i}"
        node.vm.provider "virtualbox" do |vb|
            vb.memory = 2048
            vb.cpus = 1
            vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        end
        node.vm.provision "shell", path: "scripts/common.sh"
        node.vm.provision "shell", path: "scripts/node.sh"
      end
    end
  end
  ```
Давайте разберем эти выполняемые скрипты. У нас есть три скрипта, перечисленные в вышеуказанном VAGRANTFILE для запуска на определенных узлах. 

`master.vm.provision "shell", path: "scripts/common.sh"`

Приведенный выше скрипт будет направлен на подготовку узлов, он будет запущен на всех трех наших узлах и удалит все существующие компоненты Docker и переустановит Docker и ContainerD, а также kubeadm, kubelet и kubectl. Этот скрипт также обновит существующие пакеты программного обеспечения в системе. 

`master.vm.provision "shell", path: "scripts/master.sh"`

Скрипт master.sh будет выполняться только на узле плоскости управления, этот скрипт создаст кластер Kubernetes с помощью команд kubeadm. Он также подготовит контекст конфигурации для доступа к этому кластеру, о чем мы расскажем далее. 

`node.vm.provision "shell", path: "scripts/node.sh"`

Это просто возьмет конфиг, созданный мастером, и присоединит наши узлы к кластеру Kubernetes, этот процесс присоединения снова использует kubeadm и другой скрипт, который можно найти в папке config. 

### Доступ к кластеру Kubernetes 

 Теперь у нас есть два развернутых кластера: кластер minikube, который мы развернули в предыдущем разделе, и новый 3-узловой кластер, который мы только что развернули на VirtualBox.

 Также в этом конфигурационном файле, к которому у вас будет доступ на машине, с которой вы запускали vagrant, описано, как мы можем получить доступ к нашему кластеру с нашей рабочей станции. 

 Прежде чем мы покажем это, позвольте мне коснуться контекста. 

![](../images/Day52_Kubernetes5.ru.png?v1)

Контекст важен, необходима возможность доступа к кластеру Kubernetes с рабочего стола или ноутбука. Существует множество различных вариантов, и люди используют различные операционные системы в качестве повседневных драйверов.

По умолчанию клиент Kubernetes CLI (kubectl) использует папку C:\Users\username\.kube\config для хранения информации о кластере Kubernetes, такой как конечная точка и учетные данные. Если вы развернули кластер, вы сможете увидеть этот файл в этом месте. Но если вы до сих пор использовали главный узел для выполнения всех команд kubectl через SSH или другими способами, то эта статья, надеюсь, поможет вам освоить возможность подключения к рабочей станции.

Затем нам нужно получить файл kubeconfig из кластера или мы также можем получить его из нашего файла конфигурации после развертывания, получить содержимое этого файла либо через SCP, либо просто открыть консольный сеанс на главном узле и скопировать на локальную машину windows. 

![](../images/Day52_Kubernetes6.ru.png?v1)

Затем мы хотим взять копию этого файла конфигурации и переместить в место `$HOME/.kube/config`. 

![](../images/Day52_Kubernetes7.ru.png?v1)

Теперь с локальной рабочей станции вы сможете запустить `kubectl cluster-info` и `kubectl get nodes`, чтобы убедиться, что у вас есть доступ к вашему кластеру. 

![](../images/Day52_Kubernetes8.ru.png?v1)

Это не только обеспечивает подключение и управление с вашей windows-машины, но и позволяет нам выполнить проброс портов для доступа к определенным сервисам с нашей windows-машины.

Если вам интересно, как управлять несколькими кластерами на рабочей станции, у меня есть более подробное описание [здесь](https://vzilla.co.uk/vzilla-blog/building-the-home-lab-kubernetes-playground-part-6). 

Я добавил этот список, в котором представлены блоги, посвященные различным развертываемым кластерам Kubernetes. 

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
