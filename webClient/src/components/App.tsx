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
  const pages = [<Home />, <Search />, <AddMedia />, <Messages />, <Profile />];
  return (
    <div>
      <TopTabBar />
      <div>{pages[currentPage]}</div>
    </div>
  );
}