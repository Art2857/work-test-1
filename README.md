## Description

Тестовое задание

Задание: Необходимо сделать небольшой web server
Обязательно: Postgres
Не обязательно, но будет плюсом:
Любые дополнения вроде кеширования, валидации и др.

Endpoint:
есть табличка users с полями id и balance, там есть один юзер с id = 1
вторая табличка с историей изменения платежа (user_id, action, amount, ts)
Нужно реализовать списание баланса пользователя

Пример: юзер покупает предмет на сайте за $100
пересчет баланса по истории после каждой операции в поле balance

Базу можно не поднимать, просто показать код как это может работать

Время на выполнение обычно от 40 минут до 2 часов.
Результат выполнения - ссылка на github. Так же напишите сколько часов у вас ушло на выполнение.
При возникновении вопросов по тестовому заданию - пишите мне.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
$ yarn database:start

$ prisma:migrate:generate

$ prisma:migrate:dev

$ yarn run start
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
