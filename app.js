const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
const policy = require('./routes/policy')
const faq = require('./routes/faq')
const cooperation = require('./routes/cooperatiion')
const Primary = require('./routes/Primary')
const campus = require('./routes/campus')
const franch = require('./routes/franch')
const contact = require('./routes/contact-us')
const about = require('./routes/about')
const blog = require('./routes/blog')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

// app.use(views(__dirname + '/views', {
//   extension: 'pug'
// }))
// app.use(views('views', { map: {html: 'ejs' }}));
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(policy.routes(), policy.allowedMethods())
app.use(faq.routes(), faq.allowedMethods())
app.use(cooperation.routes(), cooperation.allowedMethods())
app.use(Primary.routes(), Primary.allowedMethods())
app.use(campus.routes(), campus.allowedMethods())
app.use(franch.routes(), franch.allowedMethods())
app.use(contact.routes(), contact.allowedMethods())
app.use(about.routes(), about.allowedMethods())
app.use(blog.routes(), blog.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
