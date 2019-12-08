import React, { Component } from 'react'
import router from './routers/RouterView'
import RouterView from './routers/router'
import {BrowserRouter} from "react-router-dom"

import "./App.css"
export default class App extends Component {
  render() {
    return (
      <div className="wrap">
        <BrowserRouter>
           <RouterView router={router} />
        </BrowserRouter>
      </div>
    )
  }
}
