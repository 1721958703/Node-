import React, { Component } from 'react'
import RouterView from '../routers/router'
import {NavLink} from "react-router-dom"
import axios from 'axios'
export default class home extends Component {
    componentDidMount(){
        let aaa=JSON.parse(localStorage.login)
        axios.post("/api/some",{user:aaa.user}).then(res=>{
            console.log('tag',res.data )
            localStorage.login=JSON.stringify(res.data.list[0])
        })
    }
    render() {
        return (
            <div className="home">
                <div className="home-main">
                    <RouterView router={this.props.router} />
                </div>
                <div className="home-nav">
                    <NavLink to="/home/cool">圈子</NavLink>
                    <NavLink to="/home/my">我的</NavLink>
                </div>
            </div>
        )
    }
}
