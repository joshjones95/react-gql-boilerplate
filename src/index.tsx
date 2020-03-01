import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Home } from './pages/home'

ReactDOM.render(
  <Router> 
    <Route path="/" component={Home} />
  </Router>
  , 
  document.getElementById('root')
);
