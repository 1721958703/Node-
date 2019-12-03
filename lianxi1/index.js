#! /usr/bin/env node
const path=require("path")
const fs=require("fs")
const fill=process.argv[2].slice(1)

function name(fill){
    let pathC=path.join(process.cwd(),fill)
    if(fs.existsSync(pathC)){
        if(fs.statSync(pathC).isDirectory()){
         let list=fs.readdirSync(pathC)
         list.forEach(item=>{
            name(path.join(fill,item) )
         })
        }else{
         let size=fs.statSync(pathC).size
         let name=path.extname(pathC).slice(1)
         console.log('tag', fill+"-"+name+"-"+size)
        }
     }else{
         console.log('路径不存在')
     }
}
name(fill)