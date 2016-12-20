import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory,Link } from 'react-router';

class App extends Component {
  render(){
    return(
      <div>
        <Link to='/hello1'>Hello1</Link><br/>
        <Link to='/hello2'>Hello2</Link>
      </div>
    )
  }
}

class Hello1 extends Component {
  render(){
    return(
      <h1>
        Hello1 Page
      </h1>
    )
  }
}

class Hello2 extends Component {
  render(){
    return(
      <h1>
        Hello2 Page
      </h1>
    )
  }
}



const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/hello1' component={Hello1} />
    <Route path='/hello2' component={Hello2} />
  </Router>
);



ReactDOM.render(renderRoutes(), document.getElementById('root'));
