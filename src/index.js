import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Users from './users';
import Contact from './contact';
import NotFound from './NotFound';
import {Route,Link, BrowserRouter as Router , Switch} from 'react-router-dom';

const routing = (
    <Router>
    <div>
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contacts">Contact</Link>
        </li>
      </ul>
      <Switch>
    <Route exact path="/" component={App}/>
    <Route path="/users/" component={Users}/>
    <Route path="/contacts" component={Contact}/>
    <Route component={NotFound}/>
    </Switch>
    </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


