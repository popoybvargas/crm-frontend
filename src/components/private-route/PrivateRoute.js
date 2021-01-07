import { Route, Redirect } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';

const isAuthorized = true;

const PrivateRoute = ({ children, ...rest }) =>
{
  const content = () => isAuthorized ? <DefaultLayout>{ children }</DefaultLayout> : <Redirect to="/" />;

  return <Route { ...rest } render={ content } />;
};

export default PrivateRoute;