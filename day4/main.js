const Koa=require("koa")
const path=require("path")
const static=require("koa-static")
const router=require("koa-router")()
const bodyParser=require("koa-bodyparser")
const app=new Koa()
const connection=require("./data/index")
//记载静态资源
app.use(static(path.join(__dirname,"public")))
//接口
app.use(router.routes())
//post数据
app.use(bodyParser())
router.get("/list",async (ctx)=>{
    //查
    
    // try{
    // let list=await connection("select * from data")
    //     ctx.body={
    //         code:1,
    //         mag:"成功",
    //         list
    //     }
    // }catch(err){
    //     ctx.body={
    //         code:1,
    //         mag:"错误",
    //         err
    //     }
    // }

    //添加
    // let {user,qwb}=ctx.query
    // if(user&&qwb){
    //      try{
    //         let dist=await connection("select * from data where user=?",[user])
    //          if(dist.length){
    //             ctx.body={
    //                 code:1,
    //                 mag:"已存在",
    //             }
    //          }else{
    //             // let list=await connection("insert into data (user,qwb) values(?,?)",[user,qwb])
    //             let list=await connection("insert into data set ?",{user,qwb})
    //             ctx.body={
    //                 code:1,
    //                 mag:"成功",
    //                 list
    //             }
    //          }
    //         }catch(err){
    //             ctx.body={
    //                 code:1,
    //                 mag:"错误",
    //                 err
    //             }
    //         }
    // }else{
    //     ctx.body={
    //         code:1,
    //         mag:"不能空"
    //     }
    // }
    

    //删除
    let {id}=ctx.query
    try{
        let list=await connection('DELETE FROM data WHERE id = ?',[id])
        ctx.body={
            code:1,
            mag:"成功",
            list
        }
    }catch(err){
        ctx.body={
            code:1,
            mag:"错误",
            err
        }
    }



})


//起服务
app.listen(3000,()=>{
    console.log('启动成功')
})