# Example of API

## Among some of the libraries used are

* express
* nodemon
* dotenv
* concurrently
* typescript
* eslint
* prettier
* sequelize
* ts-node

The pnpm package manager was used, its advantages over npm are described in:

* <https://pnpm.io/es/motivation>

The following pages were used as general guides:

* <https://blog.logrocket.com/how-to-set-up-node-typescript-express/>
* <https://blog.logrocket.com/linting-typescript-eslint-prettier/>
* <https://blog.logrocket.com/using-sequelize-with-typescript/>
* https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs
* https://www.bezkoder.com/node-js-express-login-example/
* https://blog.logrocket.com/extend-express-request-object-typescript/

The .gitignore file was modified starting from:

* <https://github.com/github/gitignore/blob/main/Node.gitignore>

# How to run

## Create .env file.

* Create a file named .env and copy the environment variables from file .env.example to file .env.

* Change the values of the environment variables in file .env to the desired values.

## Setting up the environment

* First, install pnpm from <https://pnpm.io/installation>
* Then, execute `pnpm i`

## Create SSL certificate

1. Open a terminal on your Linux machine.
2. Install OpenSSL if it's not already installed. You can typically install it using the package manager for your distribution. In Ubuntu, it is:

```
sudo apt-get install openssl
```

3. Navigate to the directory where you want to generate the SSL certificates. In this case, within the backend folder, you should create the dist folder. Within the dist folder, create the ssl folder, and within the ssl folder, generate the files.

4. Generate a private key file (`key.pem`) by running the following command:

```
openssl genpkey -algorithm RSA -out key.pem
```

(This command generates a 2048-bit RSA private key.)

5. Generate a certificate signing request (CSR) file (`csr.pem`) by running the following command:

```
openssl req -new -key key.pem -out csr.pem
```

(You will be prompted to provide information such as country, state, organization, etc. Fill in the required details for your SSL certificate.)

6. Generate a self-signed certificate file (`cert.pem`) using the generated private key and CSR by running the following command:

```
openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
```

(This command creates a self-signed certificate valid for 365 days.)

7. You can remove the intermediate CSR file (`csr.pem`) as it is no longer needed:

```
rm csr.pem
```

This certificate is only useful for the development environment.

## Database Permissions

It was used a MySQL database.

A table named `userdb` was created, then a user named `client` was created, and the following permissions were granted to that user.

* SELECT
* INSERT
* UPDATE
* DELETE

A table named `product` was created, then a user named `productAdmin` was created, and the following permissions were granted to that user.

* SELECT
* INSERT
* UPDATE
* DELETE

(Those four permissions are for performing CRUD operations.)

Two databases were created, each with a single table, instead of having only one database with two tables, as it is safer to have the user database separated. Additionally, the read operations on the product database will be considerably higher, and they could be synchronized with a Redis database to reduce latency.

One option could be to create another database with a table to manage roles and assign them to users. This would allow for finer granularity in controlling user access, as different levels of access could be assigned to users based on their roles. It also enables a more organized and scalable management of permissions. Additionally, it simplifies the process of adding new functionalities or restrictions to users in the future, as you can simply update the permissions associated with specific roles rather than individually modifying permissions for each user.

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

## Comments

Camel case was used instead of dot notation to name the files due to a personal preference.

In the user model, sequelize.define() was used since it is unlikely that the model will become more complex, and the use of sequelize.define() instead of sequelize.models is less verbose. On the other hand, in the product model, it is possible that it becomes more complex over time, and sequelize.model is more flexible and easier to maintain than sequelize.define, although it is more verbose.
