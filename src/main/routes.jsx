import React from 'react'
import { Route, HashRouter, Redirect } from 'react-router-dom'

import Dashboard from '../dashboard/dashboard';
import Billing from '../billingCycle/billingCycle';

export default props => (
    <HashRouter>
        <Route path="/" component={Dashboard}/>
        <Route path="/billingCycles" component={Billing}/>
        <Redirect from="*" to="/dash"/>
    </HashRouter>
)