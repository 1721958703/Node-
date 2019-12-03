const Koa=require("koa")
const app=new Koa()
const static=require("koa-static")
const path=require("path")
const fs=require("fs")
app.use(static(process.cwd()))
// app.use(async (ctx,next)=>{
//     fs.readFileSync("./src/index.html")
// })
app.listen(5656)
// function name() {
//     return new Promise((req,res)=>{
//         setTimeout(()=>{
//            req("====") 
//         },2000)
//     })
// }
// app.use(async (ctx,next)=>{
//     const aaa= new Date()*1
//     console.log('tag', '一层')
//     ctx.body="一层"
//     await next()
//     const bbb= new Date()*1
//     const ccc=bbb-aaa
//     console.log('tag', '一层玩')
//     console.log('tag', ccc)
// })
// app.use(async (ctx,next)=>{
//     console.log('tag', '二层')
//     ctx.body="二层"

//     await next()
//     console.log('tag', '二层玩')
// })
// app.use(async (ctx,next)=>{
//     console.log('tag', '三层')
//     ctx.body="三层"
//     await name()
// })
// app.listen(3000,()=>{
//     console.log("启动成功")
// })