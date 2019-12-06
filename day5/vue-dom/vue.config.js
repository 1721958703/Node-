module.exports={
    devServer:{
        // before
        proxy:{
            "/api":{
                target:"http://localhost:3000/"
            }
        }
    }
}