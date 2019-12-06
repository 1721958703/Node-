function name(type,val=[]) {
    let mysql=require("mysql")
   let connection=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"root",
    database :"jzy"
})
connection.connect((error)=>{
    if(error){
        console.log("请求失败")
    }else{
        console.log("请求成功")
    }
})
return new Promise((res,rej)=>{
    connection.query(type,val, function (error, results, fields) {
       if(error){
         rej(error)
       }else{  
        res(results)
       }
       connection.end()
      })
})
}
module.exports=name

