const path =require("path")
const Koa=require("koa")
const static=require("koa-static")
const bodyParser=require("koa-bodyparser")
const router=require("koa-router")()
const connection=require("./mysql")
const app=new Koa()
app.use(bodyParser())
// app.use(static(path.join(__dirname,"public")))
app.use(router.routes())
// 获取数据
router.get("/api/data",async (ctx)=>{
    let {num,page}=ctx.query
    try{
        let list= await connection(`select * from data limit ${num*page},${page}`)
        ctx.body={
            code:1,
            mag:"数据获取成功",
            list
        }
    }catch(err){
        ctx.body={
            code:0,
            mag:"数据获取失败"
        }
    }
})
//删除
router.get("/api/delete",async (ctx)=>{
    let {id}=ctx.query
    console.log('tag', id)
    if(id){
        try{
                let list =await connection("delete from data where id=?",[id])
                ctx.body={
                    code:1,
                    mag:"删除成功",
                    list
                }
            }catch(ree){
                ctx.body={
                    code:0,
                    mag:"删除失败",
                    ree
                }
            }
    }else{
        ctx.body={
            code:2,
            mag:"请填写数据"
        }
    }
    
    
})
//添加
router.get("/api/add",async (ctx)=>{
    let {title,age,phone}=ctx.query
    if(title&&age&&phone){
        try{
            let list =await connection("insert into data set ?",{title,age,phone})
            ctx.body={
                code:1,
                mag:"添加成功",
                list
            }
        }catch(ree){
            ctx.body={
                code:1,
                mag:"添加失败",
                ree
            }
        }
    }else{
        ctx.body={
            code:2,
            mag:"请填写数据"
        }
    }
})
//修改
router.get("/api/xuxu",async (ctx)=>{
    let {id,title,age,phone}=ctx.query
    if(title&&age&&phone&&id){
        try{
            let list =await connection(`update data set title=?,age=?,phone=? where id=?`,[title,age,phone,id])
            ctx.body={
                code:0,
                mag:"修改成功",
                list
            }
        }catch(ree){
            ctx.body={
                code:1,
                mag:"修改失败",
                ree
            }
        }
    }else{
        ctx.body={
            code:2,
            mag:"请填写数据"
        }
    }
})

app.listen(3000,()=>{
    console.log("3000启动成功")
})