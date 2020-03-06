const router = require('koa-router')()
router.prefix('/franch')
router.get('/', async (ctx, next) => {
  await ctx.render('franch', {
    title: '中西教育-法语学习',
    menu: 'franch'
  })
})


module.exports = router