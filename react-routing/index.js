import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from "react-router";
import { createHashHistory } from 'history'
import App from './src/App';
import Home from './src/pages/Home';
import Experience from './src/pages/Experience';
import Languages from './src/pages/Languages';
import Skills from './src/pages/Skills';
import Education from './src/pages/Education';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(
	<Router history={appHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="experience" name="experience" component={Experience}></Route>
      <Route path="languages" name="languages" component={Languages}></Route>
      <Route path="skills" name="skills" component={Skills}></Route>
      <Route path="education" name="education" component={Education}></Route>
    </Route>
  </Router>,
document.getElementById('app'))