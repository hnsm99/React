//Dependencias
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Componentes
import App from './components/App';
import Contact from './components/Contact';
import Users from './components/Users';
import Home from './components/Home';
import Page404 from './components/Page404';

const AppRoutes = () =>
<App>
  <Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/Contact" component={Contact}/>
<Route exact path="/User" component={Users}/>
<Route component={Page404} />
</Switch>
</App>;

export default AppRoutes;
