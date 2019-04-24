# SRS Server

Server software for SRS (spaced repetition system) written in TypeScript with Nest.js to be used with Node.

# Up and running

Clone the repository, install all the dependencies, and make sure that you change the ormconfig so that you can access to a database (must be postgresql). To start, run `yarn start:dev` To get data into the datavase, run `yarn db:seed`.

# Structure

Module based, where all features are organized according to domain. All code relating to the user is in /user, all code relating to cards are in /card.

# GraphQL

Using TypeGraphQL makes the schemas really easy to make using decorators on the entity file used for TypeORM.

## Queries

## Mutations

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
    "email": "martin@falkjohansson.se",
    "password": "mjao"
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
    "name": "Hampus",
    "email": "martin@falkjohansson.se",
    "password": "mjao"
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
