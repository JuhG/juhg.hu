import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';

import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';

import './index.css';

ReactDOM.render(
	<Router history={browserHistory}>
  	<Route path="/" component={App}>
  		<IndexRoute component={Home} />
  		<Route path="/resume" component={Resume} />
  		<Route path="/projects" component={Projects} />
    	<Route path="*" component={Home} />
  	</Route>
  </Router>,
  document.getElementById('root')
);
