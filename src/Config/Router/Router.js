
import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Home,About} from './../../Containers'


export default  class BasicRouter extends React.Component{
    render(){
  return(
      <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />

      </Router>
  )
    }
}