# Simple Nodejs + ExpressJS + TypeScript Template


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) 
- Install [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)

# Getting started
- Clone the project
```
$ git clone https://github.com/damorz/simple-node-express-typescript-template.git
```
- Install dependencies
```
$ cd simple-node-express-typescript-template
$ yarn
```
- Run project in devloper environment
```
$ yarn dev
```
- Or build and run the project
```
$ yarn build
$ yarn start
```
  Server will run on `http://localhost:5000`


## Project Structure
The folder structure of this app is explained below:

```
├── dist                                  - Contains the distributable (or output) from your TypeScript build.
├── src
|   ├── @types                            - Store type of variable or function in project.
|   |   ├── common.type.ts                - Common type that use in all module.
|   |   └── etc                           - More types.
|   ├── controllers                       - * APIs Controller.
|   ├── routes                            - All of API routes.
|   |   ├── index.ts                      - Main station that store main route of services.
|   |   └── etc                           - Other routes.
|   ├── services                          - * Core of Business logic here.
|   └── index.ts                          - Our app start here.
├── .env                                  - * Environment that application will read.
├── .eslintrc.json                        - Configuration of Eslint.
├── package.json                          - Contains npm dependencies and script.
└── tsconfig.json.js                      - Configuration of TypeScript.

```

## Build Script
| Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `tsc`                    | Simple build TypeScript files.       |
| `start`                   | Runs full build and runs node on dist/index.js. Can be invoked with `yarn start`.                  |
| `build`                   | Remove ./dist and full build. Runs all build tasks.       |
| `dev`                   | Runs full build and watch change ro recompile. Can be invoked with `yarn dev`.                                         |
| `lint`                    | Runs eslint on project files.       |
