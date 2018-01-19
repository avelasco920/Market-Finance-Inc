import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './homepage';

const App = () => (
  <div className="app">
    <Switch>
      <Route path="/" component={HomePage}/>
    </Switch>
  </div>
);

export default App;
