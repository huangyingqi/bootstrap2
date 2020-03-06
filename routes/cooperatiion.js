const router = require('koa-router')()
router.prefix('/cooperation')
router.get('/', async (ctx, next) => {
  await ctx.render('cooperation', {
    title: '中西教育-合作共赢',
    menu: 'cooperation'
  })
})


module.exports = router