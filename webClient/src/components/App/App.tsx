import React, { lazy, Suspense, FC } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AppWrapper } from './styles';
import { TopNavBar } from '../../containers/TopNavBarContainer';
const Home = lazy(() => import('../Home'));
const Search = lazy(() => import('../Search'));
const AddMedia = lazy(() => import('../AddMedia'));
const Messages = lazy(() => import('../Messages'));
const Profile = lazy(() => import('../../containers/ProfileContainer'));
const FourZeroFour = lazy(() => import('../FourZeroFour'));

interface Props {

}

export const App: FC<Props> = () => {
  return (
    <AppWrapper>
      <TopNavBar />
      <Router>
        <Switch>
          <Route exact path="/" >
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          </Route>
          <Route path="/search">
            <Suspense fallback={<div>Loading...</div>}>
              <Search />
            </Suspense>
          </Route>
          <Route path="/addmedia">
            <Suspense fallback={<div>Loading...</div>}>
              <AddMedia />
            </Suspense>
          </Route>
          <Route path="/messages">
            <Suspense fallback={<div>Loading...</div>}>
              <Messages />
            </Suspense>
          </Route>
          <Route path="/profile">
            <Suspense fallback={<div>Loading...</div>}>
              <Profile />
            </Suspense>
          </Route>
          <Route>
            <Suspense fallback={<div>Loading...</div>}>
              <FourZeroFour />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}