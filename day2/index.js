#! /usr/bin/env node
// console.log("你好")
// console.log(Progress)
const program = require('commander');
// program
//         .version("1.0.0","-v,--version")
//         .option('-a,--add')
//         .option('-s,--sss')
//         .option("--nav-figg")
//         .option('--no-fff','not add a file')
        // .action((path,aaa)=>{
        //     console.log('tag', path)
        //     console.log('aaa', aaa)
        // })
        
// program.parse(process.argv)
// if(program.add) console.log("add")
// if(program.sss) console.log("sss")
// if(program.navFigg) console.log("fiss")
// if(program.fff) console.log('add a file')
// else console.log('not add a file')
const inquirer=require("inquirer")
const fs=require("fs")
let data=require("./login.json")
const listData=[
    {
        type: 'input',
        message: '您的姓名:',
        name: 'user',
        default: "test_user" // 默认值
    },{
        type: 'input',
        message: '您的身份证号:',
        name: 'num',
        default: "xxxxxx", // 默认值
        // validate:(val)=>{
        //     let par=/\d/
        //     if(par.test(val)){
        //         return val
        //     }
        //     return "请输入数字"
        // }
    },{
        type: "password",
        message: '设置一个密码:',
        name: 'qwb',
        default: "123456" // 默认值
    }
]
inquirer.prompt(listData).then(res=>{
    console.log(res)
    let flag=data.some(v=>v.num==res.num)
    if(!flag){
        data.push(res)
       fs.writeFileSync("./login.json",JSON.stringify(data)) 
    console.log("添加成功")
       
    }else{
        console.log('tag', '不能重复添加')
    }
   
})