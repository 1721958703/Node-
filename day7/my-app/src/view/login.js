import React, { Component } from 'react'
import axios from 'axios'
export default class enter extends Component {
    state={
        user:"",
        qwb:""
    }
    login=()=>{
        axios.post("/api/login",this.state).then(res=>{
            console.log('tag', res.data)
            if(res.data.code===1){
                localStorage.login=JSON.stringify(this.state)
                alert(res.data.mag)
                this.props.history.push("/home")
            }else{
                alert(res.data.mag)
            }
        })
    }
    render() {
        let {user,qwb}=this.state
        return (
            <div className="login">
                注册账号：<input type="text" value={user} onChange={(e)=>this.setState({user:e.target.value})} placeholder="请输入用户名"/>
                <br/>
                <br/>
                注册密码：<input type="password" value={qwb} onChange={(e)=>this.setState({qwb:e.target.value})} placeholder="请输入密码"/>
                <br/>
                <br/>
                <button onClick={this.login}>完成</button>
            </div>
        )
    }
}
