---
title: 13 - Go - подключение Twitter API
description: Go - подключение Twitter API
toc: true
authors:
tags: [devops, golang]
categories:
series: 
date: "2022-05-03"
lastmod: "2022-05-03"
featuredImage:
draft: false
id: 1048865
---
## Твитните о своем прогрессе с нашим новым приложением

В последний день изучения этого языка программирования мы только коснулись его основ, но я думаю, что это начало.

За последние несколько дней мы взяли небольшую идею для приложения и добавили функциональность, в этой статье я хочу воспользоваться преимуществами тех пакетов, которые мы упомянули, и создать функциональность для нашего приложения, чтобы не только дать вам обновление вашего прогресса на экране, но также отправьте твит с подробностями задачи и вашим статусом.

## Добавление возможности твитить свой прогресс
Первое, что нам нужно сделать, это настроить доступ API разработчика к Twitter, чтобы это работало.

Перейдите на [Платформу разработчиков Twitter](https://developer.twitter.com) и войдите в систему, используя свой идентификатор Twitter и данные. Оказавшись внутри, вы должны увидеть что-то вроде приведенного ниже без приложения, которое я уже создал.

![](../images/Day13_Go1.png?v1)

Здесь вы также можете запросить дополнительный доступ. Это может занять некоторое время, но для меня это было очень быстро.

Затем мы должны выбрать «Projects & Apps» и создать наше приложение. Ограничения зависят от доступа к вашей учетной записи, при этом у вас должно быть только одно приложение и один проект, а с повышенными правами у вас может быть 3 приложения.

![](../images/Day13_Go2.png?v1)

Дайте вашему приложению имя

![](../images/Day13_Go3.png?v1)

Затем вам будут предоставлены эти токены API, важно сохранить их в безопасном месте. (С тех пор я удалил это приложение) Они понадобятся нам позже с нашим приложением Go.

![](../images/Day13_Go4.png?v1)

Теперь у нас создано наше приложение (мне пришлось изменить имя моего приложения, так как то, что на скриншоте выше, уже было сделано, эти имена должны быть уникальными)

![](../images/Day13_Go5.png?v1)

Ключи, которые мы собрали ранее, известны как наши потребительские ключи, и нам также понадобятся наш токен доступа и секреты. Мы можем собрать эту информацию, используя вкладку «Ключи и токены».

![](../images/Day13_Go6.png?v1)

Хорошо, на данный момент мы закончили работу с порталом для разработчиков Twitter. Убедитесь, что вы сохранили свои ключи, потому что они понадобятся нам позже.

## Перейти Twitter бот

Помните код, который мы запускаем в нашем приложении?
```
package main

import "fmt"

func main() {

	const DaysTotal int = 90
	var remainingDays uint = 90
	challenge := "#90DaysOfDevOps"

	fmt.Printf("Welcome to the %v challenge.\nThis challenge consists of %v days\n", challenge, DaysTotal)

	var TwitterName string
	var DaysCompleted uint

	// asking for user input
	fmt.Println("Enter Your Twitter Handle: ")
	fmt.Scanln(&TwitterName)

	fmt.Println("How many days have you completed?: ")
	fmt.Scanln(&DaysCompleted)

	// calculate remaining days
	remainingDays = remainingDays - DaysCompleted

	fmt.Printf("Thank you %v for taking part and completing %v days.\n", TwitterName, DaysCompleted)
	fmt.Printf("You have %v days remaining for the %v challenge\n", remainingDays, challenge)
	fmt.Println("Good luck")
}

```

Теперь нам нужно подумать о коде для отправки нашего вывода или сообщения в Twitter в виде твита. Мы будем использовать [go-twitter](https://github.com/dghubble/go-twitter). Это клиентская библиотека Go для Twitter API.

Чтобы проверить это, прежде чем помещать это в наше основное приложение, я создал новый каталог в нашей папке `src` с именем go-twitter-bot, запустил `go mod init github.com/michaelcade/go-twitter-bot` в папке который затем создал файл `go.mod`, а затем мы можем начать писать наш новый main.go и протестировать его.

Теперь нам нужны те ключи, токены и секреты, которые мы собрали на портале разработчиков Twitter. Мы собираемся установить их в наших переменных среды. Это будет зависеть от ОС, которую вы используете:

Windows
```
set CONSUMER_KEY
set CONSUMER_SECRET
set ACCESS_TOKEN
set ACCESS_TOKEN_SECRET
```

Linux / macOS
```
export CONSUMER_KEY
export CONSUMER_SECRET
export ACCESS_TOKEN
export ACCESS_TOKEN_SECRET
```
At this stage, you can take a look at [day13_example2](Go/day13_example2.go) at the code but you will see here that we are using a struct to define our keys, secrets and tokens. 

We then have a `func` to parse those credentials and make that connection to the Twitter API 

Then based on the success we will then send a tweet. 


На этом этапе вы можете взглянуть на следующий код
```
package main

import (
	// other imports
	"fmt"
	"log"
	"os"

	"github.com/dghubble/go-twitter/twitter"
	"github.com/dghubble/oauth1"
)

// Credentials stores all of our access/consumer tokens
// and secret keys needed for authentication against
// the twitter REST API.
type Credentials struct {
	ConsumerKey       string
	ConsumerSecret    string
	AccessToken       string
	AccessTokenSecret string
}

// getClient is a helper function that will return a twitter client
// that we can subsequently use to send tweets, or to stream new tweets
// this will take in a pointer to a Credential struct which will contain
// everything needed to authenticate and return a pointer to a twitter Client
// or an error
func getClient(creds *Credentials) (*twitter.Client, error) {
	// Pass in your consumer key (API Key) and your Consumer Secret (API Secret)
	config := oauth1.NewConfig(creds.ConsumerKey, creds.ConsumerSecret)
	// Pass in your Access Token and your Access Token Secret
	token := oauth1.NewToken(creds.AccessToken, creds.AccessTokenSecret)

	httpClient := config.Client(oauth1.NoContext, token)
	client := twitter.NewClient(httpClient)

	// Verify Credentials
	verifyParams := &twitter.AccountVerifyParams{
		SkipStatus:   twitter.Bool(true),
		IncludeEmail: twitter.Bool(true),
	}

	// we can retrieve the user and verify if the credentials
	// we have used successfully allow us to log in!
	user, _, err := client.Accounts.VerifyCredentials(verifyParams)
	if err != nil {
		return nil, err
	}

	log.Printf("User's ACCOUNT:\n%+v\n", user)
	return client, nil
}
func main() {
	fmt.Println("Go-Twitter Bot v0.01")
	creds := Credentials{
		AccessToken:       os.Getenv("ACCESS_TOKEN"),
		AccessTokenSecret: os.Getenv("ACCESS_TOKEN_SECRET"),
		ConsumerKey:       os.Getenv("CONSUMER_KEY"),
		ConsumerSecret:    os.Getenv("CONSUMER_SECRET"),
	}

	client, err := getClient(&creds)
	if err != nil {
		log.Println("Error getting Twitter Client")
		log.Println(err)
	}

	tweet, resp, err := client.Statuses.Update("A Test Tweet from the future, testing a #90DaysOfDevOps Program that tweets, tweet tweet", nil)
	if err != nil {
		log.Println(err)
	}
	log.Printf("%+v\n", resp)
	log.Printf("%+v\n", tweet)
}

```
Здесь вы увидите, что мы используем структуру для определения наших ключей, секретов и токенов.

Затем у нас есть `func`, чтобы проанализировать эти учетные данные и установить это соединение с API Twitter.

Затем, в зависимости от успеха, мы отправим твит.



Код выше либо выдаст вам ошибку в зависимости от того, что происходит, либо будет выполнен успешно, и вам будет отправлен твит с сообщением, указанным в коде.

## Соединение двух вместе - Go-Twitter-Bot + наше приложение

Теперь нам нужно объединить эти два файла в наш `main.go`. Я уверен, что кто-то кричит, что есть лучший способ сделать это, и, пожалуйста, прокомментируйте это, поскольку вы можете иметь более одного файла `.go` в одном файле. project это может иметь смысл, но это работает.

Так выглядит итоговый рзультат:

```
package main

import (
    // other imports
    "fmt"
    "log"
    "os"

    "github.com/dghubble/go-twitter/twitter"
    "github.com/dghubble/oauth1"
)

// Credentials stores all of our access/consumer tokens
// and secret keys needed for authentication against
// the twitter REST API.
type Credentials struct {
    ConsumerKey       string
    ConsumerSecret    string
    AccessToken       string
    AccessTokenSecret string
}

// getClient is a helper function that will return a twitter client
// that we can subsequently use to send tweets, or to stream new tweets
// this will take in a pointer to a Credential struct which will contain
// everything needed to authenticate and return a pointer to a twitter Client
// or an error
func getClient(creds *Credentials) (*twitter.Client, error) {
    // Pass in your consumer key (API Key) and your Consumer Secret (API Secret)
    config := oauth1.NewConfig(creds.ConsumerKey, creds.ConsumerSecret)
    // Pass in your Access Token and your Access Token Secret
    token := oauth1.NewToken(creds.AccessToken, creds.AccessTokenSecret)

    httpClient := config.Client(oauth1.NoContext, token)
    client := twitter.NewClient(httpClient)

    // Verify Credentials
    verifyParams := &twitter.AccountVerifyParams{
        SkipStatus:   twitter.Bool(true),
        IncludeEmail: twitter.Bool(true),
    }

    // we can retrieve the user and verify if the credentials
    // we have used successfully allow us to log in!
    user, _, err := client.Accounts.VerifyCredentials(verifyParams)
    if err != nil {
        return nil, err
    }

    log.Printf("User's ACCOUNT:\n%+v\n", user)
    return client, nil
}
func main() {
    creds := Credentials{
        AccessToken:       os.Getenv("ACCESS_TOKEN"),
        AccessTokenSecret: os.Getenv("ACCESS_TOKEN_SECRET"),
        ConsumerKey:       os.Getenv("CONSUMER_KEY"),
        ConsumerSecret:    os.Getenv("CONSUMER_SECRET"),
    }
    {
        const DaysTotal int = 90
        var remainingDays uint = 90
        challenge := "#90DaysOfDevOps"

        fmt.Printf("Welcome to the %v challenge.\nThis challenge consists of %v days\n", challenge, DaysTotal)

        var TwitterName string
        var DaysCompleted uint

        // asking for user input
        fmt.Println("Enter Your Twitter Handle: ")
        fmt.Scanln(&TwitterName)

        fmt.Println("How many days have you completed?: ")
        fmt.Scanln(&DaysCompleted)

        // calculate remaining days
        remainingDays = remainingDays - DaysCompleted

        //fmt.Printf("Thank you %v for taking part and completing %v days.\n", TwitterName, DaysCompleted)
        //fmt.Printf("You have %v days remaining for the %v challenge\n", remainingDays, challenge)
        // fmt.Println("Good luck")

        client, err := getClient(&creds)
        if err != nil {
            log.Println("Error getting Twitter Client, this is expected if you did not supply your Twitter API tokens")
            log.Println(err)
        }

        message := fmt.Sprintf("Hey I am %v I have been doing the %v for %v days and I have %v Days left", TwitterName, challenge, DaysCompleted, remainingDays)
        tweet, resp, err := client.Statuses.Update(message, nil)
        if err != nil {
            log.Println(err)
        }
        log.Printf("%+v\n", resp)
        log.Printf("%+v\n", tweet)
    }

}
```

Результатом этого должен быть твит, но если вы не указали свои переменные среды, вы должны получить сообщение об ошибке, подобное приведенному ниже.

![](../images/Day13_Go7.png?v1)

После того, как вы исправите это или решите не проходить аутентификацию в Twitter, вы можете использовать код, с которым мы закончили вчера. Вывод терминала в случае успеха будет выглядеть примерно так:

![](../images/Day13_Go8.png?v1)

Полученный твит должен выглядеть примерно так:

![](../images/Day13_Go9.png?v1)

## Как скомпилировать для нескольких ОС

Далее я хочу затронуть вопрос: «Как компилировать для нескольких операционных систем?» Отличительной особенностью Go является то, что он может легко компилироваться для многих различных операционных систем. Вы можете получить полный список, выполнив следующую команду:

```
go tool dist list
```

Использование наших команд `go build` до сих пор было замечательным, и оно будет использовать переменные среды `GOOS` и `GOARCH`, чтобы определить хост-компьютер и то, для чего должна быть собрана сборка. Но мы также можем создавать другие двоичные файлы, используя приведенный ниже код в качестве примера.


```
GOARCH=amd64 GOOS=darwin go build -o ${BINARY_NAME}_0.1_darwin main.go
GOARCH=amd64 GOOS=linux go build -o ${BINARY_NAME}_0.1_linux main.go
GOARCH=amd64 GOOS=windows go build -o ${BINARY_NAME}_0.1_windows main.go
GOARCH=arm64 GOOS=linux go build -o ${BINARY_NAME}_0.1_linux_arm64 main.go
GOARCH=arm64 GOOS=darwin go build -o ${BINARY_NAME}_0.1_darwin_arm64 main.go
```

Это даст вам двоичные файлы в вашем каталоге для всех вышеперечисленных платформ. Затем вы можете взять это и создать make-файл для создания этих двоичных файлов всякий раз, когда вы добавляете новые функции и функции в свой код.

Файл: `makefile`
```
BINARY_NAME=90DaysOfDevOps

build:
	GOARCH=amd64 GOOS=darwin go build -o ${BINARY_NAME}_0.2_darwin main.go
	GOARCH=amd64 GOOS=linux go build -o ${BINARY_NAME}_0.2_linux main.go
	GOARCH=amd64 GOOS=windows go build -o ${BINARY_NAME}_0.2_windows main.go
	GOARCH=arm64 GOOS=linux go build -o ${BINARY_NAME}_0.2_linux_arm64 main.go
	GOARCH=arm64 GOOS=darwin go build -o ${BINARY_NAME}_0.2_darwin_arm64 main.go

run:
	./${BINARY_NAME}

build_and_run: build run

clean:
	go clean
	rm ${BINARY_NAME}-darwin
	rm ${BINARY_NAME}-linux
	rm ${BINARY_NAME}-windows
```
## Источники

- [StackOverflow 2021 Developer Survey](https://insights.stackoverflow.com/survey/2021)
- [Why we are choosing Golang to learn](https://www.youtube.com/watch?v=7pLqIIAqZD4&t=9s)
- [Jake Wright - Learn Go in 12 minutes](https://www.youtube.com/watch?v=C8LgvuEBraI&t=312s) 
- [Techworld with Nana - Golang full course - 3 hours 24 mins](https://www.youtube.com/watch?v=yyUHQIec83I) 
- [**NOT FREE** Nigel Poulton Pluralsight - Go Fundamentals - 3 hours 26 mins](https://www.pluralsight.com/courses/go-fundamentals) 
- [FreeCodeCamp -  Learn Go Programming - Golang Tutorial for Beginners](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=1025s) 
- [Hitesh Choudhary - Complete playlist](https://www.youtube.com/playlist?list=PLRAV69dS1uWSR89FRQGZ6q9BR2b44Tr9N) 
- [A great repo full of all things DevOps & exercises](https://github.com/bregman-arie/devops-exercises)
- [GoByExample - Example based learning](https://gobyexample.com/)
- [go.dev/tour/list](https://go.dev/tour/list)
- [go.dev/learn](https://go.dev/learn/)

На этом блок "язык программирования". Так много всего, что можно охватить, и я надеюсь, что вы смогли продолжить изучение вышеизложенного и понять некоторые другие аспекты языка программирования Go.

Затем мы сосредоточимся на Linux и некоторых основах, которые мы все должны знать.