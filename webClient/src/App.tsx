import React from 'react';
import TopTabBar from './TopTabBar';

interface Props {
  age: number;
  name: string;
  onAgeButtonClick(): void;
  changeName(name: string): void;
}

export const App: React.FC<Props> = ({ age, name, onAgeButtonClick, changeName }) => {
  const handleNameChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    changeName(e.target.value);
  }
  return (
    <div>
      <TopTabBar />
      <h1>Age: {age}</h1>
      <h1>Name: {name}</h1>
      <button onClick={onAgeButtonClick}>Change Age</button>
      <form>
        <input 
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={handleNameChange}
        >
        </input>
      </form>
    </div>
  );
}