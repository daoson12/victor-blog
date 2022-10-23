import React, { Component } from 'react';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className='content'>
            <Switch>
              <Route exact path={"/"}>
              <Home />
              </Route>
              <Route  path={"/create"}>
              <Create />
              </Route>
            </Switch>
        
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
