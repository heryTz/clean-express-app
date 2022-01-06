# A simple Express boilerplate

## Built in

- Typescript
- Express
- Typeorm (with Mysql)
- Jest
- Prettier
- Eslint
- Dependency Injection using [InversifyJS](https://github.com/inversify/InversifyJS)

## Get started

### Step 1: Clone the project

You can do using git command:

```bash
git clone https://github.com/heryTz/clean-express-app
```

### Step 2: Setup server

- Define your environment variable in **.env** (see *env.example*)  
- Define your database config in **ormconfig.js** (see *ormconfig.example.js*)

### Step 3: Run server

```bash
npm run dev
```

## Branch

You can check these branches for the different base codes that exist

- **main**: The basic architecture
- **example/foo-service**: An example how you can implement a service
- **demo/user**: Simple demo for user management (login, create, ...)

## Troubleshooting

### 1. Using Typescript entities with **typeorm** cli

It doesn't work if you directly use the cli typeorm. Use the npm script typeorm that already exists in the package.json.  

Then you may run the command like this:

```bash
npm run typeorm migration:run
```

If you need to pass parameter with dash to npm script, you will need to add them after --. For example, if you need to generate, the command is like this:

```bash
npm run typeorm migration:generate -- -n migrationNameHere
```

Please refer this documentation for more information (https://typeorm.io/#/using-cli/if-entities-files-are-in-typescript).
