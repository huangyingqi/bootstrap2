const router = require('koa-router')()
router.prefix('/faq')
router.get('/', async (ctx, next) => {
  await ctx.render('faq', {
    title: '常见问题!',
    menu: 'faq'
  })
})


module.exports = router