const router = require('koa-router')()
router.prefix('/Campus')
router.get('/', async (ctx, next) => {
  await ctx.render('campus', {
    title: '中西教育-游学',
    menu: 'Campus'
  })
})


module.exports = router