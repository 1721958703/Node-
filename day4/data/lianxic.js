function name(type,val) {
    const mysql=require("mysql")
    const connection=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        database:"jzy"
    })
    connection.connect((err)=>{
        if(err){
            console.log("链接失败")
        }else{
            console.log('链接成功')
        }
    })
    return new Promise((res,rej)=>{
       connection.query(type,val,function(err, results) {
           if(err){
            rej(err)
           }else{
            res(results)
           }
           connection.end();
       })
    })
}
module.exports=name