import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LoginComponent } from './components/login' 
import { UserRegistComponent } from './components/reigster'

import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
      <Router>
        <div>
            <Switch>
                <Route exact={true} path="/" component={LoginComponent} />
                <Route path="/regist" component={UserRegistComponent} />
            </Switch>
        </div>
    </Router>
    );
}

export default App;
