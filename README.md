Gulp Demo
=========

> Example of maintainable gulp setup.

- [Directory structure](#directory-structure)
- [Install](#install)
- [Build](#build)

## Directory structure
    .
    ├── gulpfile.js
    ├── gulp
    │   ├── config.js
    │   ├── rc
    │   │   ├── .babelrc
    │   │   ├── .jshintrc
    │   │   └── ...
    │   └── tasks
    │       ├── build.js
    │       ├── css.js
    │       └── ...
    └── ...

## Install

- Install [Node.js](https://nodejs.org/)

- Install [nvm](https://github.com/creationix/nvm) if required (node version v6.8.0, npm version 3.10.8)

- Run `npm install` from project root to install node modules

## Build

Run `gulp build` from project root.

HTML files and assets will be compiled into `public` folder and made available at `http://localhost:4001`.