import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import Main from './Main';
import Articles from './Articles';
import SweetSleep from './helpers/SweetSleep'
import Pace from './helpers/Pace'
import Aging from './helpers/Aging'
import Medications from './helpers/Medications'

render(<Router history={browserHistory}>
  <Route path="/" component={Main} >
    <IndexRoute component={Articles} />
    <Route path="/articles" component={Articles}>
      <Route path="/sweetsleep" component={SweetSleep} />
      <Route path="/pace" component={Pace} />
      <Route path="/aging" component={Aging} />
      <Route path="/medications" component={Medications} />
    </Route>s
  </Route>
</Router>, document.getElementById('application'))
