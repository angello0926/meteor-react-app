import React from 'react';
import { Router, Route, IndexRoute, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
// route components
import AppContainer from '../../ui/containers/AppContainer.js';
import UploadICOsPage from '../../ui/pages/UploadICOsPage.js';
import NotFoundPage from '../../ui/pages/NotFoundPage.js';
const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
<Router history={browserHistory}>
    <Switch>
    <Route exact path="/" component={AppContainer}/> 
    <Route path="/upload-icos" component={UploadICOsPage}/>
    <Route path="*" component={NotFoundPage}/>
    </Switch>
</Router>
);

