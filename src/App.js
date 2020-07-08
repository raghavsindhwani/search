

import Navbar from './navbar'
import Show from './show'


import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super()
  
    this.state = {
       searchtext:''
    }
  }

  onsearchchange = (props) =>{
        this.setState({...this.state,...props })
        console.log(this.state.searchtext)
  }
  
  
  
  render() {
    return (
      <div className="App">
      <Navbar onsearchchange={this.onsearchchange}></Navbar>
      <Show searchtext={this.state.searchtext}></Show>
     </div>
    )
  }
}

export default App




