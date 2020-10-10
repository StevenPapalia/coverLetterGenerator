import React, { useCallback, ChangeEvent, FC } from 'react';
import { ProfilePicture } from '../containers/ProfilePictureContainer';

interface Props {
  age: number;
  name: string;
  onAgeButtonClick(): void;
  changeName(name: string): void;
}

export const Profile: FC<Props> = ({ age, name, onAgeButtonClick, changeName }) => {
  
  const handleNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    changeName(event.target.value);
  }, []);

  return (
    <>      
      <h1>Your Profile</h1>
      <ProfilePicture />

      <div>
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
    </>
  )
}