import {Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Tools from '../pages/Tools';
import ToolDetail from '../pages/ToolDetail';
import About from '../pages/About';

import {useRecoilValue} from 'recoil';
import {loggedInState} from '../recoil/selectors';

const Routes = props => {
    const loggedIn = useRecoilValue(loggedInState);
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/tools' component={Tools} />
            <Route exact path='/about' component={About}/>
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