import React from 'react'
import {Route} from 'react-router-dom'
import App from '../App'
import Description from './Description'
//import Trailer from './Trailer'

function Router() {

  
    return (
        <div>
          <Route exact path='/' component={App}/> 
          <Route path='/description/:title' component={Description}/> 
        </div>
    )
}

export default Router
