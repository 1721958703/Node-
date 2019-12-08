const Koa=require("koa")
const path=require("path")
const static=require("koa-static")
// const bodyParser=require("koa-bodyparser")
const bodyParser=require("./intermediate/bodyparser")
const connection=require("./mysql/mysq")
const router=require("koa-router")()
let getTime=require("./intermediate/getTime")
const app=new Koa()
app.use(static(path.join(__dirname,"public")))
app.use(bodyParser())
app.use(router.routes())
app.use(getTime())
//数据
router.get("/api/list",async (ctx)=>{
    let {num=0,page=2}=ctx.query
   try{
    let list=await connection(`select * from data limit ${num},${page}`)
    ctx.body={
        code:1,
        mag:"成功",
        list
    }
   }catch(err){
    ctx.body={
        code:0,
        mag:"失败",
        err
    }
   }
})
//添加
router.get("/api/add",async (ctx)=>{
    let {title,phone,age}=ctx.query
    await connection(`insert into data set ?`,{title,phone,age})
   if(title&&phone&&age&&/^\d$/){
       try{
            ctx.body={
            code:1,
            mag:"添加成功"
        }
    }catch(err){
        ctx.body={
            code:0,
            mag:"添加失败",
            err
        }
    }
   }else{
    ctx.body={
        code:2,
        mag:"请补全参数或正确填写"
    } 
   }
})
//删除
router.get("/api/remove",async (ctx)=>{
    let {id}=ctx.query
    await connection(`delete from data where id=?`,[id])
   if(id){
       try{
            ctx.body={
            code:1,
            mag:"删除成功"
        }
    }catch(err){
        ctx.body={
            code:0,
            mag:"删除失败",
            err
        }
    }
   }else{
    ctx.body={
        code:2,
        mag:"请补全参数"
    } 
   }
})
//修改
router.get("/api/xuxu",async (ctx)=>{
    let {id,title,phone,age}=ctx.query
    await connection(`update data set title=?,phone=?,age=? where id=?`,[title,phone,age,id])
   if(id){
       try{
            ctx.body={
            code:1,
            mag:"修改成功"
        }
    }catch(err){
        ctx.body={
            code:0,
            mag:"修改失败",
            err
        }
    }
   }else{
    ctx.body={
        code:2,
        mag:"请补全参数"
    } 
   }
})

app.listen(3001,()=>{
    console.log('3001成功')
})