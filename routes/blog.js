const router = require('koa-router')()
router.prefix('/blog')
router.get('/', async (ctx, next) => {
  await ctx.render('blog', {
    title: '中西教育-博客',
    menu: 'blog'
  })
})


module.exports = router