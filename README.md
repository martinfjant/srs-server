# SRS-Server

Server software for SRS (spaced Review system) written in TypeScript with Nest.js to be used with Node.

## Up and running

Clone the repository, install all the dependencies. Change the name of example.env to .env and put in PostgresQL-credentials. To start, run `yarn start:dev` To get data into the database, run `yarn db:seed`. The database seed is limited to ten users and one card for each user.

# Structure

Module based, where all features are organized according to domain. All code relating to the user is in /user, all code relating to cards are in /card.

## GraphQL

Using TypeGraphQL makes the schemas really easy to make using decorators on the entity file used for TypeORM.

## API

### User

Add user:

```js
mutation addUser($user: UserInput!){
  addUser(userData: $user){
    name,
    id,
    createdDate
  }
}
```

With variables:

```json
{
  "user": {
    "name": "Martin",
    "email": "email@email.se",
    "password": "ketchup"
  }
}
```

Edit user:

```js
mutation addUser($user: UserInput!){
  editUser(id: 44, userData: $user){
    name,
    id,
    createdDate
  }
}
```

With variables:

```json
{
  "user": {
    "name": "Bunny",
    "email": "bunny@hare.com",
    "password": "pyaa"
  }
}
```

Delete user:

```js
mutation {
  deleteUser(id: 43){
    name
  }
}
```

### Card

Query:

```js
query {
  card(id: 5){
    front,
    back
  }
}
```

Mutations:
Add card:

```js
mutation addCard($card: CardInput!) {
  addCard(cardData: $card) {
    front,
    back,
    scheduled
  }
}
```

```json
{
  "card": {
    "front": "Martin",
    "back": "martin@falkjohansson.se",
    "user": 5
  }
}
```

`sheduled: timestamp` is optional, and will otherwise use the current time. It's in the dto to fascilitate rescheduling.

Edit card:

```js
mutation addCard($card: CardEditInput!) {
  editCard(id: 55, cardData: $card) {
    front,
    back,
    id,

  }
}
```

Variables:

```
{
  "card": {
"front": "luva"
  }
}
```

front, back and scheduled can be set in any combination.

Delete card:

```js
mutation {
  deleteCard(id: 2){
    id
  }
}
```

### Logging in

```js
mutation auth($auth: AuthInput!) {
  auth(authData: $auth) {
    token
  }
}
```

Variables:

```json
{
  "auth": {
    "email": "Adaline90@yahoo.com",
    "password": "1234"
  }
}
```

### Review

Mutation:

```js
mutation ($reviewData: ReviewInput!, $id: Float!) {
    addReview(
      reviewData: $reviewData,
      id: $id
      ){
        id
        }
}
```

Variables:

```json
{
  "reviewData": {
    "answer": 2,
    "card": 1
  },
  "id": 1
}
```
