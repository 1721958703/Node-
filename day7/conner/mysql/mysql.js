const mysql=require("mysql")
function name(type,val) {
    const connection=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        database:"zc"
    })
    connection.connect((err)=>{
        if(err){
            console.log("数据连接失败")
        }else{
            console.log("数据连接成功")
        }
    })
   
    return new Promise((res,rej)=>{
        connection.query(type,val,function(err,state) {
            if(err){
                rej(err)
            }else{
                res(state)
            }
            connection.end()
        })
    })
}
module.exports=name