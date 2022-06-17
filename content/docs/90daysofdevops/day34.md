---
title: 34. Практические сценарии Microsoft Azure
description: Практические сценарии Microsoft Azure
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-05-24"
lastmod: "2022-05-24"
featuredImage:
draft: false
id: 1048763
---

## Практические сценарии Microsoft Azure
Последние 6 дней были сосредоточены на Microsoft Azure и общедоступном облаке в целом, большая часть этой основы должна была содержать много теории, чтобы понять строительные блоки Azure, но также это будет хорошо перенесено на других крупных облачных провайдеров. .

В самом начале я упомянул о базовых знаний об общедоступном облаке и выборе одного провайдера, по крайней мере, для начала. Если вы танцуете между разными облаками, я считаю, что вы можете довольно легко заблудиться, тогда как выбрав одно, вы поймете основы. и когда они у вас есть, довольно легко прыгнуть в другие облака и ускорить свое обучение.

На этом заключительном занятии я буду выбирать свои практические сценарии с этой страницы, которая является справочной информацией, созданной Microsoft и используемой для подготовки к [AZ-104 Администратор Microsoft Azure](https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/)

Здесь есть некоторые из них, такие как контейнеры и Kubernetes, которые мы еще не рассмотрели подробно, поэтому я не хочу пока вдаваться в них.

В предыдущих постах мы создали большинство модулей 1,2 и 3.

### Виртуальная сеть
Мы пройдем пройти [модуль 04](https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_04-Implement_Virtual_Networking.html):

Я прошел по инструкции и изменил несколько названий на #90DaysOfDevOps. Я также вместо использования Cloud Shell вошел в систему с моим новым пользователем, созданным в предыдущие дни с помощью Azure CLI на моем компьютере с Windows.

Вы можете сделать это, используя `az login`, который откроет браузер и позволит вам аутентифицировать свою учетную запись.

Затем я создал сценарий PowerShell и несколько ссылок из модуля, чтобы использовать их для выполнения некоторых из приведенных ниже задач. Вы можете найти связанные файлы в этой папке.
  (Облако\01Виртуальная сеть)

<details>
<summary>
Mod04_90DaysOfDevOps-vms-loop-parameters.json
</summary>

```
{
    "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentParameters.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
        "vmSize": {
            "value": "Standard_D2s_v3"
        },
        "adminUsername": {
            "value": "Student"
        },
        "adminPassword": {
            "value": "Pa55w.rd1234"
        }
    }
}
```
</details>

<details>
<summary>
Mod04_90DaysOfDevOps-vms-loop-template.json
</summary>

```
{
    "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
        "vmSize": {
            "type": "string",
            "defaultValue": "Standard_D2s_v3",
            "metadata": {
                "description": "VM size"
            }
        },
        "vmName": {
            "type": "string",
            "defaultValue": "90day-vm",
            "metadata": {
                "description": "VM name Prefix"
            }
        },
        "vmCount": {
            "type": "int",
            "defaultValue": 2,
            "metadata": {
                "description": "Number of VMs"
            }
        },
        "adminUsername": {
            "type": "string",
            "metadata": {
                "description": "Admin username"
            }
        },
        "adminPassword": {
            "type": "securestring",
            "metadata": {
                "description": "Admin password"
            }
        },
        "virtualNetworkName": {
            "type": "string",
            "defaultValue": "90daysofdevops",
            "metadata": {
                "description": "Virtual network name"
            }
        }
    },
    "variables": {
        "nic": "90daysofdevops",
        "virtualNetworkName": "[parameters('virtualNetworkName')]",
        "subnetName": "subnet",
        "subnet0Name": "subnet0",
        "subnet1Name": "subnet1",
        "computeApiVersion": "2018-06-01",
        "networkApiVersion": "2018-08-01"
    },
    "resources": [
        {
            "name": "[concat(parameters('vmName'),copyIndex())]",
            "copy": {
                "name": "VMcopy",
                "count": "[parameters('vmCount')]"
            },
            "type": "Microsoft.Compute/virtualMachines",
            "apiVersion": "[variables('computeApiVersion')]",
            "location": "[resourceGroup().location]",
            "comments": "Creating VMs",
            "dependsOn": [
                "[concat(variables('nic'),copyIndex())]"
            ],
            "properties": {
                "osProfile": {
                    "computerName": "[concat(parameters('vmName'),copyIndex())]",
                    "adminUsername": "[parameters('adminUsername')]",
                    "adminPassword": "[parameters('adminPassword')]",
                    "windowsConfiguration": {
                        "provisionVmAgent": "true"
                    }
                },
                "hardwareProfile": {
                    "vmSize": "[parameters('vmSize')]"
                },
                "storageProfile": {
                    "imageReference": {
                        "publisher": "MicrosoftWindowsServer",
                        "offer": "WindowsServer",
                        "sku": "2019-Datacenter",
                        "version": "latest"
                    },
                    "osDisk": {
                        "createOption": "fromImage"
                    },
                    "dataDisks": []
                },
                "networkProfile": {
                    "networkInterfaces": [
                        {
                            "properties": {
                                "primary": true
                            },
                            "id": "[resourceId('Microsoft.Network/networkInterfaces', concat(variables('nic'),copyIndex()))]"
                        }
                    ]
                }
            }
        },
        {
            "type": "Microsoft.Network/virtualNetworks",
            "name": "[variables('virtualNetworkName')]",
            "apiVersion": "[variables('networkApiVersion')]",
            "location": "[resourceGroup().location]",
            "comments": "Virtual Network",
            "properties": {
                "addressSpace": {
                    "addressPrefixes": [
                        "10.40.0.0/22"
                    ]
                },
                "subnets": [
                    {
                        "name": "[variables('subnet0Name')]",
                        "properties": {
                            "addressPrefix": "10.40.0.0/24"
                        }
                    },
                    {
                        "name": "[variables('subnet1Name')]",
                        "properties": {
                            "addressPrefix": "10.40.1.0/24"
                        }
                    }
                ]
            }
        },
        {
            "name": "[concat(variables('nic'),copyIndex())]",
            "copy":{
                "name": "nicCopy",
                "count": "[parameters('vmCount')]"
            },
            "type": "Microsoft.Network/networkInterfaces",
            "apiVersion": "[variables('networkApiVersion')]",
            "location": "[resourceGroup().location]",
            "comments": "Primary NIC",
            "dependsOn": [
                "[concat('Microsoft.Network/virtualNetworks/', variables('virtualNetworkName'))]"
            ],
            "properties": {
                "ipConfigurations": [
                    {
                        "name": "ipconfig1",
                        "properties": {
                            "subnet": {
                                "id": "[resourceId('Microsoft.Network/virtualNetworks/subnets', variables('virtualNetworkName'), concat(variables('subnetName'),copyIndex()))]"
                            },
                            "privateIPAllocationMethod": "Dynamic"
                        }
                    }
                ]
            }
        }
    ],
    "outputs": {}
}
```
</details>

<details>
<summary>
Module4_90DaysOfDevOps.ps1
</summary>

```
$rgName = '90DaysOfDevOps'

New-AzResourceGroupDeployment `
-ResourceGroupName $rgName `
-TemplateFile C:\Users\micha\demo\90DaysOfDevOps\Days\Cloud\01VirtualNetworking\Mod04_90DaysOfDevOps-vms-loop-template.json `
-TemplateParameterFile C:\Users\micha\demo\90DaysOfDevOps\Days\Cloud\01VirtualNetworking\Mod04_90DaysOfDevOps-vms-loop-parameters.json
```
</details>

Убедитесь, что вы изменили расположение файла в скрипте в соответствии с вашей средой.

На этом первом этапе у нас нет виртуальной сети или виртуальных машин, созданных в нашей среде, у меня есть только место хранения облачной оболочки, настроенное в моей группе ресурсов.

Сначала я запускаю свой [скрипт в PowerShell](https://github.com/MichaelCade/90DaysOfDevOps/blob/main/Days/Cloud/01VirtualNetworking/Module4_90DaysOfDevOps.ps1)
```ps
$rgName = '90DaysOfDevOps'

New-AzResourceGroupDeployment `
-ResourceGroupName $rgName `
-TemplateFile C:\Users\micha\demo\90DaysOfDevOps\Days\Cloud\01VirtualNetworking\Mod04_90DaysOfDevOps-vms-loop-template.json `
-TemplateParameterFile C:\Users\micha\demo\90DaysOfDevOps\Days\Cloud\01VirtualNetworking\Mod04_90DaysOfDevOps-vms-loop-parameters.json
```
  ![](../images/Day34_Cloud1.png?v1)
 
- Задача 1: Создать и настроить виртуальную сеть

  ![](../images/Day34_Cloud2.png?v1)

- Задача 2. Развернуть виртуальные машины в виртуальной сети.

  ![](../images/Day34_Cloud3.png?v1)

- Задача 3. Настройка частных и общедоступных IP-адресов виртуальных машин Azure.
  
  ![](../images/Day34_Cloud4.png?v1)

- Задача 4: Настройка групп безопасности сети

![](../images/Day34_Cloud5.png?v1)
![](../images/Day34_Cloud6.png?v1)

- Задача 5. Настройка Azure DNS для внутреннего разрешения имен.

![](../images/Day34_Cloud7.png?v1)
![](../images/Day34_Cloud8.png?v1)

### Управление сетевым трафиком
Переходим к [модулю 06](https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_06-Implement_Network_Traffic_Management.html):

Для этого практического занятия я создал сценарий PowerShell и несколько ссылок из модуля, чтобы использовать их для создания некоторых из приведенных ниже задач.

- Задача 1: Обеспечение лабораторной среды

Запустим [PowerShell скрипт](https://github.com/MichaelCade/90DaysOfDevOps/blob/main/Days/Cloud/02TrafficManagement/Mod06_90DaysOfDevOps.ps1)

```
$rgName = '90DaysOfDevOps'

New-AzResourceGroupDeployment `
   -ResourceGroupName $rgName `
   -TemplateFile C:\Users\micha\demo\90DaysOfDevOps\Days\Cloud\02TrafficManagement\Mod06_90DaysOfDevOps-vms-loop-template.json `
   -TemplateParameterFile C:\Users\micha\demo\90DaysOfDevOps\Days\Cloud\02TrafficManagement\Mod06_90DaysOfDevOps-vms-loop-parameters.json

   $location = (Get-AzResourceGroup -ResourceGroupName $rgName).location
   $vmNames = (Get-AzVM -ResourceGroupName $rgName).Name
   
   foreach ($vmName in $vmNames) {
     Set-AzVMExtension `
     -ResourceGroupName $rgName `
     -Location $location `
     -VMName $vmName `
     -Name 'networkWatcherAgent' `
     -Publisher 'Microsoft.Azure.NetworkWatcher' `
     -Type 'NetworkWatcherAgentWindows' `
     -TypeHandlerVersion '1.4'
   }
```
![](../images/Day34_Cloud9.png?v1)

- Задача 2. Настройка топологии узловой сети
![](../images/Day34_Cloud10.png?v1)

- Задача 3. Проверка транзитивности пиринга виртуальной сети.

Для этого моя группа 90DaysOfDevOps не имела доступа к Network Watcher из-за разрешений, я ожидаю, что это связано с тем, что Network Watcher  — это один из тех ресурсов, которые не привязаны к группе ресурсов, где наш RBAC был покрыт для этого пользователя. Я добавил в группу 90DaysOfDevOps роль участника Network Watcher из восточной части США.

![](../images/Day34_Cloud11.png?v1)
![](../images/Day34_Cloud12.png?v1)
![](../images/Day34_Cloud13.png?v1)

> Это ожидаемо, поскольку виртуальные сети с двумя лучами не связаны друг с другом (пиринг виртуальных сетей не является транзитивным).

- Задача 4. Настройка маршрутизации в топологии «концентратор-луч».

У меня была еще одна проблема: моя учетная запись не могла запустить скрипт от имени моего пользователя в группе 90DaysOfDevOps, в чем я не уверен, поэтому я вернулся в свою основную учетную запись администратора. Группа 90DaysOfDevOps является владельцем всего в группе ресурсов 90DaysOfDevOps, поэтому хотелось бы понять, почему я не могу запустить команду внутри виртуальной машины?

![](../images/Day34_Cloud14.png?v1)
![](../images/Day34_Cloud15.png?v1)
![](../images/Day34_Cloud16.png?v1)

- Task 5: Подключаем Azure Load Balancer

![](../images/Day34_Cloud17.png?v1)
![](../images/Day34_Cloud18.png?v1)

- Task 6: Подключаем Azure Application Gateway

![](../images/Day34_Cloud19.png?v1)
![](../images/Day34_Cloud20.png?v1)

### Хранищиле Azure 
Переходим к [модулю 07](https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_07-Manage_Azure_Storage.html):

Для этого практического занятия я также создал сценарий PowerShell и несколько ссылок из модуля, чтобы использовать их для создания некоторых из приведенных ниже задач. 

- Задача 1: Обеспечение лабораторной среды

Сначала запускаем PowerShell script
```ps1
$rgName = '90DaysOfDevOps'

New-AzResourceGroupDeployment `
   -ResourceGroupName $rgName `
   -TemplateFile C:\Users\micha\demo\90DaysOfDevOps\Days\Cloud\03Storage\Mod07_90DaysOfDevOps-vm-template.json `
   -TemplateParameterFile C:\Users\micha\demo\90DaysOfDevOps\Days\Cloud\03Storage\Mod07_90DaysOfDevOps-vm-parameters.json `
   -AsJob
```


<details>
<summary>Файл `Mod07_90DaysOfDevOps-vm-template.json`</summary>
```
{
    "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
      "vmSize": {
        "type": "string",
        "defaultValue": "Standard_D2s_v3",
        "metadata": {
          "description": "Virtual machine size"
        }
      },
      "adminUsername": {
        "type": "string",
        "metadata": {
          "description": "Admin username"
        }
      },
      "adminPassword": {
        "type": "securestring",
        "metadata": {
          "description": "Admin password"
        }
      }
    },
  "variables": {
    "vmName": "90Days-vm0",
    "nicName": "90Days-nic0",
    "virtualNetworkName": "90Days-vnet0",
    "publicIPAddressName": "90Days-pip0",
    "nsgName": "90Days-nsg0",
    "vnetIpPrefix": "10.70.0.0/22", 
    "subnetIpPrefix": "10.70.0.0/24", 
    "subnetName": "subnet0",
    "subnetRef": "[resourceId('Microsoft.Network/virtualNetworks/subnets', variables('virtualNetworkName'), variables('subnetName'))]",
    "computeApiVersion": "2018-06-01",
    "networkApiVersion": "2018-08-01"
  },
    "resources": [
        {
            "name": "[variables('vmName')]",
            "type": "Microsoft.Compute/virtualMachines",
            "apiVersion": "[variables('computeApiVersion')]",
            "location": "[resourceGroup().location]",
            "dependsOn": [
                "[variables('nicName')]"
            ],
            "properties": {
                "osProfile": {
                    "computerName": "[variables('vmName')]",
                    "adminUsername": "[parameters('adminUsername')]",
                    "adminPassword": "[parameters('adminPassword')]",
                    "windowsConfiguration": {
                        "provisionVmAgent": "true"
                    }
                },
                "hardwareProfile": {
                    "vmSize": "[parameters('vmSize')]"
                },
                "storageProfile": {
                    "imageReference": {
                        "publisher": "MicrosoftWindowsServer",
                        "offer": "WindowsServer",
                        "sku": "2019-Datacenter",
                        "version": "latest"
                    },
                    "osDisk": {
                        "createOption": "fromImage"
                    },
                    "dataDisks": []
                },
                "networkProfile": {
                    "networkInterfaces": [
                        {
                            "properties": {
                                "primary": true
                            },
                            "id": "[resourceId('Microsoft.Network/networkInterfaces', variables('nicName'))]"
                        }
                    ]
                }
            }
        },
        {
            "type": "Microsoft.Network/virtualNetworks",
            "name": "[variables('virtualNetworkName')]",
            "apiVersion": "[variables('networkApiVersion')]",
            "location": "[resourceGroup().location]",
            "comments": "Virtual Network",
            "properties": {
                "addressSpace": {
                    "addressPrefixes": [
                        "[variables('vnetIpPrefix')]"
                    ]
                },
                "subnets": [
                    {
                        "name": "[variables('subnetName')]",
                        "properties": {
                            "addressPrefix": "[variables('subnetIpPrefix')]"
                        }
                    }
                ]
            }
        },
        {
            "name": "[variables('nicName')]",
            "type": "Microsoft.Network/networkInterfaces",
            "apiVersion": "[variables('networkApiVersion')]",
            "location": "[resourceGroup().location]",
            "comments": "Primary NIC",
            "dependsOn": [
                "[variables('publicIpAddressName')]",
                "[variables('nsgName')]",
                "[variables('virtualNetworkName')]"
            ],
            "properties": {
                "ipConfigurations": [
                    {
                        "name": "ipconfig1",
                        "properties": {
                            "subnet": {
                                "id": "[variables('subnetRef')]"
                            },
                            "privateIPAllocationMethod": "Dynamic",
                            "publicIpAddress": {
                                "id": "[resourceId('Microsoft.Network/publicIpAddresses', variables('publicIpAddressName'))]"
                            }
                        }
                    }
                ],
                "networkSecurityGroup": {
                    "id": "[resourceId('Microsoft.Network/networkSecurityGroups', variables('nsgName'))]"
                }
            }
        },
        {
            "name": "[variables('publicIpAddressName')]",
            "type": "Microsoft.Network/publicIpAddresses",
            "apiVersion": "[variables('networkApiVersion')]",
            "location": "[resourceGroup().location]",
            "comments": "Public IP for Primary NIC",
            "properties": {
                "publicIpAllocationMethod": "Dynamic"
            }
        },
        {
            "name": "[variables('nsgName')]",
            "type": "Microsoft.Network/networkSecurityGroups",
            "apiVersion": "[variables('networkApiVersion')]",
            "location": "[resourceGroup().location]",
            "comments": "Network Security Group (NSG) for Primary NIC",
            "properties": {
                "securityRules": [
                    {
                        "name": "default-allow-rdp",
                        "properties": {
                            "priority": 1000,
                            "sourceAddressPrefix": "*",
                            "protocol": "Tcp",
                            "destinationPortRange": "3389",
                            "access": "Allow",
                            "direction": "Inbound",
                            "sourcePortRange": "*",
                            "destinationAddressPrefix": "*"
                        }
                    }
                ]
            }
        }
    ],
    "outputs": {}
}
```
</details>

<details>
<summary>Файл `Mod07_90DaysOfDevOps-vm-parameters.json`</summary>
```
{
"$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentParameters.json#",
"contentVersion": "1.0.0.0",
"parameters": {
"vmSize": {
"value": "Standard_D2s_v3"
},
"adminUsername": {
"value": "Student"
},
"adminPassword": {
"value": "Pa55w.rd1234"
}
}
}
```
</details>


![](../images/Day34_Cloud21.png?v1)

- Задача 2. Создание и настройка учетных записей хранения Azure.

![](../images/Day34_Cloud22.png?v1)

- Задача 3. Управление хранилищем BLOB-объектов

![](../images/Day34_Cloud23.png?v1)

- Задача 4. Управление проверкой подлинности и авторизацией для службы хранилища Azure.

![](../images/Day34_Cloud24.png?v1)
![](../images/Day34_Cloud25.png?v1)

Я был немного нетерпелив, ожидая, что это все сработает, но в конце концов это сработало.

![](../images/Day34_Cloud26.png?v1)

- Задача 5. Создание и настройка общих папок Azure Files.

В команде запуска это не сработает с michael.cade@90DaysOfDevOps.com, поэтому я использовал свою учетную запись с повышенными правами.

![](../images/Day34_Cloud27.png?v1)
![](../images/Day34_Cloud28.png?v1)
![](../images/Day34_Cloud29.png?v1)

- Задача 6. Управление сетевым доступом для службы хранилища Azure.

![](../images/Day34_Cloud30.png?v1)

### Serverless (внедрение веб-приложений)
Переходим к [модулю 09a](https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_09a-Implement_Web_Apps.html):

- Задача 1. Создание веб-приложения Azure.

![](../images/Day34_Cloud31.png?v1)

- Задача 2. Создание промежуточного слота развертывания.

![](../images/Day34_Cloud34.png?v1)

- Задача 3. Настройка параметров развертывания веб-приложений.

![](../images/Day34_Cloud33.png?v1)

- Задача 4. Развертывание кода в промежуточном слоте развертывания.

![](../images/Day34_Cloud32.png?v1)

- Задача 5: Поменять промежуточные слоты местами

![](../images/Day34_Cloud35.png?v1)

- Задача 6. Настройка и тестирование автоматического масштабирования веб-приложения Azure.
```
$rgName = '90DaysOfDevOps'
$webapp = Get-AzWebApp -ResourceGroupName $rgName
#The following following will start an infinite loop that sends the HTTP requests to the web app
while ($true) { Invoke-WebRequest -Uri $webapp.DefaultHostName }
```
![](../images/Day34_Cloud36.png?v1)

На этом мы завершаем раздел о Microsoft Azure и public cloud в целом.

## Ресурсы 

- [Hybrid Cloud and MultiCloud](https://www.youtube.com/watch?v=qkj5W98Xdvw)
- [Microsoft Azure Fundamentals](https://www.youtube.com/watch?v=NKEFWyqJ5XA&list=WL&index=130&t=12s)
- [Google Cloud Digital Leader Certification Course](https://www.youtube.com/watch?v=UGRDM86MBIQ&list=WL&index=131&t=10s)

Далее мы углубимся в системы контроля версий, особенно в git, а затем также рассмотрим обзоры репозиториев кода, и мы выберем GitHub, так как это мой предпочтительный вариант.
