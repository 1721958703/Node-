#! /usr/bin/env node
let {version}=require("./package.json")
const program=require("commander")
const inquirer=require("inquirer")
const superagent =require("superagent")
program 
  .version(version)
  .action(()=>{
      inquirer.prompt([
        {
            type:"input",
            name:"text",
            message:"请输入翻译语句"
        }
      ]).then(req=>{
        superagent.get("http://fanyi.youdao.com/openapi.do?keyfrom=toaijf&key=868480929&type=data&doctype=json&version=1.1")
        .query({q:req.text})
        .end((err,req)=>{
            console.log('tag', req.body.translation)
        })
      })
  })
program.parse(process.argv)