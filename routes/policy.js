const router = require('koa-router')()
router.prefix('/policy')
router.get('/', async (ctx, next) => {
  await ctx.render('policy', {
    title: 'Hello Policy!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router