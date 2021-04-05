import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import routes from '../config/routes';
import User from '../pages/User';


interface IProps {}

const Routes = (props: IProps) => {

  return (
    <Router>
      <Switch>
        <Route path={routes.user} component={User} />
        <Route component={() => <div>Not Found</div>} />
      </Switch>
    </Router>
  );
};

export default Routes;
