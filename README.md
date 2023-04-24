# GraphQL Products API

Simple GraphQL API that serves the product data in `products.json`.

## Requirements for local development

- Docker
- NodeJS >= 18.15.0
- yarn

## Setup

1. Clone this repository

```
git@github.com:dulcehc/graphql_api.git
```

2. Make sure you have the .env file, please see the env.example for the values you need to add.

a) Running API app from local

1. Within the project directory, install dependencies with: `yarn`

2. Execute `docker-compose up` to spin up the database service.

3. Update .env file for DATABASE_URL, make sure to have localhost as the host and use the external port for the DB.

```
DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:${DB_PORT_EXT}/${POSTGRES_DB}?schema=public"
```

4. Execute `yarn run db:migrate:db` to set the database.

5. Execute `yarn run dev` to start the Graphql API.

6. Open the browser http://localhost:9090 to star making queries and mutations.

b) API deployment

1. Stop any previous containers with `docker compose down`

2. Make sure to have the correct DB host for the container, in this case is `db`, the name of the service.

```
DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:${DB_PORT_EXT}/${POSTGRES_DB}?schema=public"
```

3. Execute `docker compose build` and then `docker compose up`

4. Open the browser http://localhost:9090 to star making queries and mutations.

## Query examples

Once you open the graphical interface:

a) Find product by id

```
query GetProductByCode($code: String!) {
  findProductByCode(code: $code) {
    id,
    description,
    image
    price
    quantity
    code
  }
}
```

In the variables section, add the code value that you want to search.

b) Update a product, in this example, just changing the price.

```
mutation Mutation($code: String!, $price: Float) {
  updateProduct(code: $code, price: $price) {
    id,
    code,
    description,
    price
  }
}
```

If you want to see the database, you can execute locally `yarn run dev:studio`.
