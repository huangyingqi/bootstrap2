const router = require('koa-router')()
router.prefix('/boards')
router.get('/', async (ctx, next) => {
  await ctx.render('boards', {
    title: '中西教育-合作院校',
    menu: 'boards'
  })
})


module.exports = router