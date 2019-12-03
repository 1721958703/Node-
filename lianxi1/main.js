#! /usr/bin/env node
const fs=require("fs")
const path=require("path")
let comm=process.cwd()
let jiuName=process.argv[2].slice(1)
let xinName=process.argv[3].slice(1)
let list=path.join(comm,jiuName)
if(fs.existsSync(list)){
    if(fs.statSync(list).isDirectory()){
        let dist=fs.readdirSync(list)
        let par=/.html/
        dist.forEach((item,index)=>{
            if(par.test(item)){
                fs.renameSync(path.join(list,item),path.join(list,xinName+index+".html") )
            }
        })
    }else{
        fs.renameSync(jiuName,xinName) 
    }
}else{
console.log('tag', '文件不存在')
}

