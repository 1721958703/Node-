let connection=require("./data/mysql")
let path=require("path")
let koa=require("koa")
let static=require("koa-static")
let router=require("koa-router")()
let bodyParser=require("koa-bodyparser")
let app=new koa()
app.use(bodyParser())
app.use(static(path.join(__dirname,"public")))
app.use(router.routes())
router.get("/list",async (ctx)=>{
    let {id,user,qwb} =  ctx.query
    ctx.body=123
    //查看数据
        // await connection.query('select * from data',function (error, results, fields) {
        // if (error) throw error;
        // console.log('The solution is: ', results);
        // })
    //增加数据
   
    //  await connection.query("select * from data where user=?",[user],function(error, results){
    //     list=results
      
    // })
   
        //   console.log('tag', list)
        // if(user&&qwb){
        //     await connection.query('insert into data (id, user, qwb) value(?,?,?)',[id=0,user,qwb] ,function (error, results, fields) {
        //     if (error){console.log('tag',error ) }else{console.log('tag', '添加成功')} ;
        //     })   
        // }else{
        //     console.log('tag', '缺少参数')
        // } 
        try{
            let list = await connection("select * from data")
            ctx.body={
                code:0,
                mag:"成功",
                data:list
            }
        }catch(err){
            ctx.body={
                code:1,
                mag:"错误",
                err
            }
        }
      
        
       
})
// router.post("/list",(ctx)=>{
//     console.log('data',ctx.request.body)
//     ctx.body=123

// })



app.listen(3000,()=>{
    console.log('tag', '服务成功')
})