let qp=require("querystring")
function name(ctx) {
  return new Promise((res,rej)=>{
          let data=""
        ctx.req.on("data",(state)=>{
            data+=state
        })
        ctx.req.on("end",()=>{
           res(qp.parse(data))    
        })
  })
}
module.exports=()=>{
    return async (ctx,next)=>{
      ctx.request.body=await name(ctx)
      await next()
  }
}
// devServer:{
//   proxy:{
//     "/api":{
//       target:"/"
//     }
//   }
// }
// 查找全部  select * from data
//     精确  select * from data where 字段=? ,[]
//模糊      select* from data  where 字段=? like  %内容% ,[]
//添加       insert into data set ? , {}
//删除       delete from data where id=?,[]
//个数       select * from data limit 2,2  
// 总数      select count(*) from data