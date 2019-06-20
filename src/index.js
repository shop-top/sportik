import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, Redirect, browserHistory} from 'react-router'
import {Provider} from 'react-redux'

import reducers from 'reducers'
import Layout from 'containers/layout'
import News from 'containers/pages/news'
import Phones from 'containers/pages/phones'
import Phone from 'containers/pages/phone'
import Basket from 'containers/pages/basket'
import Contacts from 'containers/pages/contacts'
import NoMatch from 'containers/pages/NoMatch'
import WorkoutPlans from 'containers/pages/workout-plans'

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={Layout}>
        <Route path='/' component={Phones}/>
        <Route path='/categories/:id' component={Phones}/>
      </Route>
      <Route path='/news' component={News} />
      <Route path='/basket' component={Basket} />
      <Route path='/phones/:id' component={Phone}/>
      <Route path='/contacts' component={Contacts}/>
      <Route path='/workout-plans' component={WorkoutPlans}/>
      <Route component={NoMatch} />

      <Route path='/404' component={NoMatch} />
      <Redirect from='*' to='/404' />
    </Router>
  </Provider>,
  document.getElementById('root')
);
