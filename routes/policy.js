const router = require('koa-router')()
router.prefix('/policy')
router.get('/', async (ctx, next) => {
  await ctx.render('policy', {
    title: '中西教育-政策法规',
    menu: 'policy'
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