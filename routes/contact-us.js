const router = require('koa-router')()
router.prefix('/contact-us')
router.get('/', async (ctx, next) => {
  await ctx.render('contact-us', {
    title: '中西教育-联系我们',
    menu: 'contact-us'
  })
})


module.exports = router