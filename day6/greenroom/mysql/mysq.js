let mysql=require("mysql")
function name(type,val) {
    let connection=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        database:"tab"
    })
    connection.connect((err)=>{
        if(err){
            console.log('连接数据失败')
        }else{
            console.log('连接数据成功')
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