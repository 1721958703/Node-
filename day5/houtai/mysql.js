function name(type,val) {
    const mysql=require("mysql")
    let connection=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        database:"tab"
    })
    connection.connect((err)=>{
        if(err){
            console.log('数据链接失败')
        }else{
            console.log('数据链接成功')
        }
    })
    return new Promise((res,rej)=>{
        connection.query(type,val,function(err,state){
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