#Simone

[![Build Status](https://semaphoreci.com/api/v1/projects/41ce2a6e-a985-48e0-b0b3-795dfbf299da/647585/badge.svg)](https://semaphoreci.com/alice-pote/simone)

This is the frontend application which talks to
[Beauvoir](https://github.com/LucyParsonsCenter/Beauvoir).

React + Flux + React router + es6 and so on.

##Development

Want to do some development work? Great! Clone the repo and do:

```
npm install -g --only=dev
npm install
```

The first gets the various tools on your `$PATH` to build the project and
so on, and the second installs all dependencies in a per-project
`/node_modules`.

We're using Webpack for transpilation of ES2015 to ES5, JSX to plain JS,
and compiling Sass to plain CSS. To start up the hot-reloading webpack dev
server just do:

```
npm start
```

after you've installed everything, and the hot-reload server should come
up! Check `http://localhost:8080`.

We're also using ESLint with the Babel plugin to lint all that es6
fancyness. If you want to check your code you can do

```
npm run-script lint
```

or 

```
eslint ./src
```

##License

Licensed under the GNU Affero GPL.
