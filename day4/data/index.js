function name(type,val=[]) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'jzy'
    });
    connection.connect((err)=>{
        if(err){
            console.log('tag', '链接失败')
        }else{
            console.log('tag', '链接成功')
        }
    })
    return new Promise((res,rej)=>{
        connection.query(type,val,function (error, results, fields) {
          if(error){
            rej(error)
          }else{
              console.log('tag', results)
            res(results)
          }
          connection.end()
          });
    })
}
module.exports=name