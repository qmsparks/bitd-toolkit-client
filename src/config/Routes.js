import {Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Tools from '../pages/Tools';
import ToolDetail from '../pages/ToolDetail';

import {useRecoilValue} from 'recoil';
import {loggedInState} from '../recoil/selectors';

const Routes = props => {
    const loggedIn = useRecoilValue(loggedInState);
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/tools' component={Tools} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />

            {loggedIn && (
                <Switch>
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route path='/tools/:id' component={ToolDetail} />
                </Switch>
            )}
        </Switch>
    )
}

export default Routes;