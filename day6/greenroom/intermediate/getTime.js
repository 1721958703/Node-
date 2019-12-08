let fs=require("fs")

function name() {
   return async(ctx,next)=>{
    let now=new Date()*1//开始时间
    await next()
    let future=new Date()*1//结束时间
    let time=future-now//时差
    let path=ctx.request.path//请求路径
    let method=ctx.request.method//请求方式
    let status=ctx.response.status//响应
    fs.appendFileSync("日志.log",path+","+method+","+status+","+time+";")
   }
}
module.exports=name


