import React, { lazy, Suspense, FC } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AppWrapper, MainContentSection } from './styles';
import { TopNavBar } from '../../containers/TopNavBarContainer';
const Home = lazy(() => import('../Home'));
const Search = lazy(() => import('../Search'));
const AddMedia = lazy(() => import('../AddMedia'));
const Messages = lazy(() => import('../Messages'));
const Profile = lazy(() => import('./Profile/Profile'));
const PageNotFound = lazy(() => import('../PageNotFound'));

interface Props {

}

export const App: FC<Props> = () => {
  return (
    <AppWrapper>
      <TopNavBar />
      <MainContentSection>
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
                <PageNotFound />
              </Suspense>
            </Route>
          </Switch>
        </Router>
      </MainContentSection>
    </AppWrapper>
  );
}