import 'dotenv-safe/config'

import Koa from 'koa'

export const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello, world!'
})

if (require.main === module) {
  app.listen(process.env.PORT)
}
