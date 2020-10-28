# @voom/wire

#### Absolute paths for [Hapi](https://hapi.dev).

This plugin allows you to import modules using absolute paths.

## Installation

```shell script
npm install @voom/wire
```

## Usage

```js
const Hapi = require('@hapi/hapi')
const Wire = require('@voom/wire')

const Config = Wire.config('server')  // :root:/config/server.js
const Logger = Wire.plugins('logger') // :root:/plugins/logger.js

async function start () {
  const server = Hapi.Server(Config)

  await server.register(Logger)

  await server.start()
}

start()
```
