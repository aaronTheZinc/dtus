import login from './components/SignIn'
import { Route , Switch} from 'react-router-dom'

export default () =>  (
    <Switch>
        <Route path="/Login">
            <Login />
        </Route>
       
    </Switch>
);
