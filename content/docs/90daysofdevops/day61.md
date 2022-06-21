---
title: 61. Kubernetes и множественные среды 
description: 
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-06-20"
lastmod: "2022-06-20"
featuredImage:
draft: false
id: 1048743
---
## Kubernetes и множественные среды

До сих пор в этом разделе, посвященном инфраструктуре как коду, мы рассматривали развертывание виртуальных машин, хотя и с помощью virtualbox, но суть одна и та же: мы определяем в коде, как должна выглядеть наша виртуальная машина, а затем развертываем ее. То же самое касается контейнеров Docker, и на этом занятии мы рассмотрим, как Terraform можно использовать для взаимодействия с ресурсами, поддерживаемыми Kubernetes.

Я использовал Terraform для развертывания своих кластеров Kubernetes в демонстрационных целях на трех основных облачных провайдерах, и вы можете найти репозиторий [tf_k8deploy](https://github.com/MichaelCade/tf_k8deploy).

Однако вы также можете использовать Terraform для взаимодействия с объектами внутри кластера Kubernetes, это может быть использование [Kubernetes provider](https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs) или [Helm provider](https://registry.terraform.io/providers/hashicorp/helm/latest) для управления развертыванием диаграмм. 

Теперь мы можем использовать `kubectl`, как мы показывали в предыдущих разделах. Но есть некоторые преимущества использования Terraform в вашей среде Kubernetes. 

- Унифицированный рабочий процесс - если вы использовали Terraform для развертывания кластеров, вы можете использовать тот же рабочий процесс и инструмент для развертывания в кластерах Kubernetes.

- Управление жизненным циклом - Terraform - это не просто инструмент инициализации, он позволяет вносить изменения, обновления и удаления. 

### Простая демонстрация Kubernetes

Подобно демо, которое мы создали на прошлом занятии, мы можем развернуть nginx в нашем кластере Kubernetes, я снова буду использовать minikube в демонстрационных целях. Мы создаем наш файл Kubernetes.tf, который вы можете найти в [папке](/Days/IaC/Kubernetes/kubernetes.tf).

В этом файле мы определим нашего провайдера Kubernetes, укажем на наш файл kubeconfig, создадим пространство имен nginx, затем создадим развертывание, содержащее 2 реплики и, наконец, сервис.

```terraform
terraform {
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">= 2.0.0"
    }
  }
}
provider "kubernetes" {
  config_path = "~/.kube/config"
}
resource "kubernetes_namespace" "test" {
  metadata {
    name = "nginx"
  }
}
resource "kubernetes_deployment" "test" {
  metadata {
    name      = "nginx"
    namespace = kubernetes_namespace.test.metadata.0.name
  }
  spec {
    replicas = 2
    selector {
      match_labels = {
        app = "MyTestApp"
      }
    }
    template {
      metadata {
        labels = {
          app = "MyTestApp"
        }
      }
      spec {
        container {
          image = "nginx"
          name  = "nginx-container"
          port {
            container_port = 80
          }
        }
      }
    }
  }
}
resource "kubernetes_service" "test" {
  metadata {
    name      = "nginx"
    namespace = kubernetes_namespace.test.metadata.0.name
  }
  spec {
    selector = {
      app = kubernetes_deployment.test.spec.0.template.0.metadata.0.labels.app
    }
    type = "NodePort"
    port {
      node_port   = 30201
      port        = 80
      target_port = 80
    }
  }
}
```

Первое, что мы должны сделать в папке нашего нового проекта, это выполнить команду `terraform init`. 

![](../images/Day61_IAC1.png?v1)

А затем, прежде чем мы выполним команду `terraform apply`, позвольте мне показать вам, что у нас нет пространств имен. 

![](../images/Day61_IAC2.png?v1)

Когда мы запустим нашу команду apply, она создаст эти 3 новых ресурса, пространство имен, развертывание и сервис в нашем кластере Kubernetes. 

![](../images/Day61_IAC3.png?v1)

Теперь мы можем взглянуть на развернутые ресурсы в нашем кластере. 

![](../images/Day61_IAC4.png?v1)

Теперь, поскольку мы используем minikube, и вы видели в предыдущем разделе, это имеет свои собственные ограничения, когда мы пытаемся играть с сетью docker для ingress. Но если мы просто выполним команду `kubectl port-forward -n nginx svc/nginx 30201:80` и откроем браузер на http://localhost:30201/, мы увидим нашу страницу NGINX. 

![](../images/Day61_IAC5.png?v1)

Если вы хотите попробовать более подробные демонстрации с Terraform и Kubernetes, то на сайте [HashiCorp Learn site](https://learn.hashicorp.com/tutorials/terraform/kubernetes-provider) вы сможете ознакомиться с ними. 


### Множественные окружения 

Если мы хотим взять любой из демонстрационных примеров, которые мы проверили, но теперь хотим, чтобы определенные среды производства, постановки и разработки выглядели одинаково и использовали этот код, есть два подхода для достижения этого с помощью Terraform 

- `терраформенные рабочие пространства` - несколько именованных разделов в рамках одного бэкенда 

- файловая структура - расположение каталогов обеспечивает разделение, модули обеспечивают повторное использование. 

Каждый из этих подходов имеет свои плюсы и минусы. 

### terraform workspaces 

Плюсы 
- Легко начать работу 
- Удобное выражение terraform.workspace 
- Минимизирует дублирование кода 

Минусы
- Склонность к человеческим ошибкам (мы пытались устранить это, используя TF)
- Состояние хранится в одном бэкенде 
- Кодовая база не показывает однозначно конфигурации развертывания.

### Файловая структура 

Плюсы 
- Изоляция бэкендов 
    - повышенная безопасность 
    - снижен потенциал для человеческих ошибок 
- Кодовая база полностью представляет развернутое состояние

Минусы 
- Требуется многократное применение terraform для обеспечения окружения 
- больше дублирования кода, но его можно минимизировать с помощью модулей. 

## Ресурсы 
- [What is Infrastructure as Code? Difference of Infrastructure as Code Tools ](https://www.youtube.com/watch?v=POPP2WTJ8es)
- [Terraform Tutorial | Terraform Course Overview 2021](https://www.youtube.com/watch?v=m3cKkYXl-8o)
- [Terraform explained in 15 mins | Terraform Tutorial for Beginners ](https://www.youtube.com/watch?v=l5k1ai_GBDE)
- [Terraform Course - From BEGINNER to PRO!](https://www.youtube.com/watch?v=7xngnjfIlK4&list=WL&index=141&t=16s)
- [HashiCorp Terraform Associate Certification Course](https://www.youtube.com/watch?v=V4waklkBC38&list=WL&index=55&t=111s)
- [Terraform Full Course for Beginners](https://www.youtube.com/watch?v=EJ3N-hhiWv0&list=WL&index=39&t=27s)
- [KodeKloud -  Terraform for DevOps Beginners + Labs: Complete Step by Step Guide!](https://www.youtube.com/watch?v=YcJ9IeukJL8&list=WL&index=16&t=11s)
- [Terraform Simple Projects](https://terraform.joshuajebaraj.com/)
- [Terraform Tutorial - The Best Project Ideas](https://www.youtube.com/watch?v=oA-pPa0vfks)
- [Awesome Terraform](https://github.com/shuaibiyy/awesome-terraform)
