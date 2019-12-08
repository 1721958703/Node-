import React, { Component } from 'react'
import {Switch,Redirect,Route} from "react-router-dom"
export default class router extends Component {
    render() {
        let {router}=this.props
        let route=router.filter(v=>v.component)
        let redirect=router.filter(v=>!v.component)
        return (
            <Switch>
                {
                   route.map((v,i)=>(
                       <Route key={i} path={v.path} render={
                           (props)=>{
                               if(v.children){
                                   return <v.component router={v.children} {...props} />
                               }else{
                                   return <v.component {...props} />
                               }
                           }
                       } />
                   )) 
                }
                {
                   redirect.map((v,i)=>(
                       <Redirect key={i} from={v.path} to={v.redirect} />
                   )) 
                }
            </Switch>
        )
    }
}
