import {Navigation} from 'react-native-navigation';
import withRedux from '../hoc/withRedux';
import {lazy} from 'react';

const Loader = lazy(() => import('../containers/common/loader'));
const LoginContainer = lazy(() => import('../containers/auth/login'));
const DashboardContainer = lazy(() => import('../containers/dashboard'));
const AddNote = lazy(() => import('../containers/notes'));

export const registerScreens = (store, Provider) => {
  const withReduxStore = withRedux(store);
  Navigation.registerComponentWithRedux('Loader', withReduxStore(Loader));

  Navigation.registerComponentWithRedux(
    'Login',
    withReduxStore(LoginContainer),
  );
  Navigation.registerComponentWithRedux(
    'Dashboard',
    withReduxStore(DashboardContainer),
  );
  Navigation.registerComponentWithRedux('AddNote', withReduxStore(AddNote));
};
