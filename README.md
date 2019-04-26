# sup-prisma

_A look at [Prisma](https://www.prisma.io/), the database platform._

## Links

* [prisma.io](https://www.prisma.io/)
* [Getting Started guide](https://www.prisma.io/docs/1.31/get-started/01-setting-up-prisma-new-database-TYPESCRIPT-t002/)

## Setup

1. Make sure the following is installed: [Node.js](https://nodejs.org/en/), [yarn](https://yarnpkg.com/en/) and [Docker](https://www.docker.com)
2. Install prisma globally:
  ```shell
  npm i -g prisma
  ```
3. Install the project's dependencies with yarn:
  ```shell
  yarn
  ```

## Initial Thoughts

* You [have to](https://github.com/prisma/prisma/issues/2278#issuecomment-450548293) [deploy](https://www.prisma.io/forum/t/graphql-playground-and-prisma-issue/3301/6) to develop locally?
* There's no prisma page for error codes (I keep getting "3016")
* They recommend installing [prisma](https://www.npmjs.com/package/prisma) globally, which is kind of an antipattern
* The [Getting Started guide](https://www.prisma.io/docs/1.31/get-started/01-setting-up-prisma-new-database-TYPESCRIPT-t002/) recommends an old version of Postgres. There's an undocumented requirement to mount a volume along with the database image that led to some time spent debugging.
* Seeing strange errors:
  ```shell
  $ prisma info
  Service Name: default
  ▸    Cannot read property 'replace' of null

  Get in touch if you need help: https://www.prisma.io/forum/
  To get more detailed output, run $ export DEBUG="*"
  (node:17883) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated
  ```