import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';
import CreateProject from './components/projects/CreateProject';
import ProjectDetails from './components/projects/ProjectDetails';

class App extends Component{
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/createproject' component={CreateProject}/>
            <Route path='/project/:id' component={ProjectDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
