const router = require('koa-router')()
router.prefix('/Primary')
router.get('/', async (ctx, next) => {
  await ctx.render('Primary', {
    title: '中西教育-中小学留学',
    menu: 'Primary'
  })
})


module.exports = router