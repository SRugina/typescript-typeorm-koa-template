# TypeScript, TypeORM, Koa Template

## Setup

Ensure you have nodejs and yarn installed, then:

```sh
yarn
```

Set up a local postgres database, then run (in this repository's root):

```
cp .env.example .env
```

Fill the `.env` file with the url to the local database and the localhost port the server should run on.

## Usage

### Build

To transpile to javascript:

```sh
yarn build
```

### Watch & Run

To watch for changes and automatically transpile:

```sh
yarn watch
```

Then, to run it locally (and update on code changes - make sure yarn watch is running in a terminal):

```sh
yarn dev
```

### Run

To run locally without watching for code changes:

```sh
yarn start
```

### Automatic pre-commit checks

Before a commit is made, all `.ts` and `.js` files will automatically be linted by eslint and formatted by prettier.

To run those checks manually:

```sh
yarn lint
yarn format
```

### Automatic pre-push checks

Before a push is made, the code will be type checked to ensure there are no typescript issues.

To run this check manually:

```sh
yarn type-check
```

### Types for `.env`

To generate typescript types for the `.env` file, run:

```
yarn gen-env
```

Make sure a `.env` file with information inside exists, otherwise the `.env.template` and types might be made blank.

### Adding an Entity, Migration, Controller etc.

For entities and migrations, refer to the [typeorm documentation](typeorm.io).

For controllers, refer to [routing-controllers](https://github.com/typestack/routing-controllers).
