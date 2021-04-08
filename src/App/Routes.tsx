import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import routes from '../config/routes';
import Users from '../pages/Users';
import AddUser from '../pages/AddUser';


interface IProps {}

const Routes = (props: IProps) => {

  return (
    <Router>
      <Switch>
        <Route path={routes.addUser} component={AddUser} exact/>
        <Route path={routes.Users} component={Users} />
        <Route component={() => <div>Not Found</div>} />
      </Switch>
    </Router>
  );
};

export default Routes;
