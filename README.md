# Example of API

## Among some of the libraries used are

* express
* nodemon
* dotenv
* concurrently
* typescript
* eslint
* prettier

The pnpm package manager was used, its advantages over npm are described in:

<https://pnpm.io/es/motivation>

The following pages were used as general guides:

<https://blog.logrocket.com/how-to-set-up-node-typescript-express/>
<https://blog.logrocket.com/linting-typescript-eslint-prettier/>

The .gitignore file was modified starting from:

<https://github.com/github/gitignore/blob/main/Node.gitignore>

# How to run

## Create .env file.

* Create a file named .env and copy the environment variables from file .env.example to file .env.

* Change the values of the environment variables in file .env to the desired values.

## Setting up the environment

* First, install pnpm from <https://pnpm.io/installation>
* Then, execute `pnpm i`

## Ready-to-use commands

It allows building the application ready for production.
```
pnpm run build
```

It allows running the application built with `pnpm run build`
```
pnpm run start
```

It allows running the application in the development environment, which includes static analysis provided by TypeScript.
```
pnpm run dev
```

It allows executing Prettier to format the code.
```
pnpm run format
```

It allows executing Eslint to analyze the code.
```
pnpm run lint
```

Note: `pnpm run format` and `pnpm run lint` could be executed in `pnpm run build`, and `pnpm run build` could be executed using Github Actions for CI (Continuous Integration).