const router = require('koa-router')()
router.prefix('/about-us')
router.get('/', async (ctx, next) => {
  await ctx.render('about', {
    title: '中西教育-关于我们',
    menu: 'about-us'
  })
})


module.exports = router