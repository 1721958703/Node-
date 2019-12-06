const Koa=require("koa")
const static=require("koa-static")
const router=require("koa-router")()
const bodyParser=require("koa-bodyparser")
const path=require("path")
const app=new Koa()
const connection=require("./data/lianxic")
app.use(bodyParser())
app.use(static(path.join(__dirname,"public")))
app.use(router.routes())

router.get("/list",async (ctx)=>{
    try{
        let {user,id,qwb}=ctx.query
        if(user&&id&&qwb){
          let list=await connection(`select * from data limit ${0},${2}`)
            ctx.body={
            code:1,
            mag:"成功",
            list
         }
        }else{
            ctx.body={
                code:2,
                mag:"缺少参数"
            }
        }
    }catch(err){
        ctx.body={
            code:0,
            mag:"失败",
            err
        }
    }
    
})



app.listen(3000,()=>{
    console.log('启动成功')
})