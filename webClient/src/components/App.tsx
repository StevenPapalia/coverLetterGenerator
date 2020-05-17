import React from 'react';
import { TopTabBar } from '../containers/TopTabBarContainer';
import { Profile } from '../containers/ProfileContainer';
import { Home } from './Home';
import { Search } from './Search';
import { AddMedia } from './AddMedia';
import { Messages } from './Messages';

interface Props {
  currentPage: number;
}

export const App: React.FC<Props> = ({ currentPage }) => {
  return (
    <div>
      <TopTabBar />
      <div>{
        currentPage === 0 ? <Home /> :
        currentPage === 1 ? <Search /> :
        currentPage === 2 ? <AddMedia /> :
        currentPage === 3 ? <Messages /> :
        <Profile />  
      }</div>
    </div>
  );
}