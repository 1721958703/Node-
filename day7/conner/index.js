const Koa=require("koa")
const path =require("path")
const static=require("koa-static")
const router=require("koa-router")()
const bodyParser=require("koa-bodyparser")
let connection=require("./mysql/mysql")
let app=new Koa()
app.use(static(path.join(__dirname,"public")))
app.use(bodyParser())
app.use(router.routes())
//查找当前用户
router.post("/api/some",async (ctx)=>{
    let {user}=ctx.request.body
    let list= await connection("select * from data where user=?",[user])
    try{
        ctx.body={
            code:1,
            mag:"查找成功",
            list
        }
    }catch(err){
        ctx.body={
            code:0,
            mag:"查找bb",
            err
        }
    }
})
//登录
router.post("/api/enter",async (ctx)=>{
    let {user,qwb}=ctx.request.body
    if(user.trim()&&qwb.trim()){
        let list=await connection("select * from data where user=? and qwb=?",[user,qwb])
        if(list.length!==0){
            ctx.body={
                code:1,
                mag:"登录成功",
                list
            }
        }else{
            ctx.body={
                code:0,
                mag:"账号或密码不正确"
            }
        }
    }else{
        ctx.body={
            code:0,
            mag:"请填写账号密码"
        }
    }
})
//注册
router.post("/api/login",async (ctx)=>{
    let {user,qwb}=ctx.request.body
    if(user.trim()&&qwb.trim()){
        let list=await connection("select * from data where user=?",[user])
        if(list.length!==0){
            ctx.body={
                code:0,
                mag:"注册失败用户名已存在"
            }
        }else{
           let list = await connection("insert into data set ?",{user,qwb})
            try{
                ctx.body={
                    code:1,
                    mag:"注册成功",
                    list
                }
            }catch(err){
                ctx.body={
                    code:0,
                    mag:"注册失败",
                    err
                }
            }
        }
        
    }else{
        ctx.body={
            code:0,
            mag:"请填写账号密码"
        }
    }
})
//修改密码
router.post("/api/qwb",async (ctx)=>{
    let {old,fresh,id}=ctx.request.body
    if(old.trim()&&fresh.trim()){
        // let list=await connection("select * from data where qwb=? and id=?",[old,id])
        // if(list.length!==0){
            await connection("update data set qwb=? where id=? and qwb=?",[fresh,id,old])
            try{
                ctx.body={
                    code:1,
                    mag:"修改密码成功"
                }
            }catch(err){
                ctx.body={
                    code:0,
                    mag:"请填写密码",
                    err
                }
            }
        // }else{
        //     ctx.body={
        //         code:0,
        //         mag:"请填写正确密码"
        //     }
        // }
    }else{
        ctx.body={
            code:0,
            mag:"请填写密码"
        }
    }
})
//修改user
router.post("/api/user",async (ctx)=>{
    let {user,age,id}=ctx.request.body
    if(user.trim()&&age.trim()){
            await connection("update data set user=?,age=? where id=?",[user,age,id])
            try{
                ctx.body={
                    code:1,
                    mag:"修改用户成功"
                }
            }catch(err){
                ctx.body={
                    code:0,
                    mag:"请填写正确用户名",
                    err
                }
            }
       
    }else{
        ctx.body={
            code:0,
            mag:"请填写用户名或年龄"
        }
    }
})
//注销用户
router.get("/api/remove",async (ctx)=>{
    let {id}=ctx.query
    await connection("delete from data where id=?",[id])
    try{
        ctx.body={
            code:1,
            mag:"注销成功"
        }
    }catch(err){
        ctx.body={
            code:0,
            mag:"注销失败"
        }
    }
})
app.listen(3030,()=>{
    console.log("3030起用成功")
})