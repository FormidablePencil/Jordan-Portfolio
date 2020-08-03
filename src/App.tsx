import React from 'react';
import './styles/main.sass'
import ProjectLibrary from './pages/ProjectLibrary';
import Landing from './pages/Landing';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
      <Switch>
        <Route path='/project-library' component={ProjectLibrary} />
      </Switch>
    </Router>
  );
}



export default App;
