import React, { Component } from 'react'
import axios from "axios"
import { Table } from 'antd';
import "./App.css"
export default class App extends Component {
  state={
    num:0,
    page:2,
    list:[]
  }
  componentDidMount(){
    axios.get("/api/list",{params:{num:this.state.num,page:this.state.page}}).then(res=>{
      this.setState({
        list:res.data.list
      })
    })
  }
  render() {
    let {list}=this.state
    return (
      <div className="wrap">
        {
          console.log('tag', list)
        }
         {/* <Table
            columns={columns}
            expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
            dataSource={data}
          /> */}
      </div>
    )
  }
}
