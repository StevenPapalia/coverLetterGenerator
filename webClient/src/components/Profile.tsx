import React, { useCallback } from 'react';
import { ProfilePicture } from '../containers/ProfilePictureContainer';
import styled from "styled-components";

const ProfileWrapper = styled("div")`
  margin: 10px;
  width: 200px;
  height: 200px; 
`;

interface Props {
  age: number;
  name: string;
  onAgeButtonClick(): void;
  changeName(name: string): void;
}

export const Profile: React.FC<Props> = ({ age, name, onAgeButtonClick, changeName }) => {
  
  const handleNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    changeName(event.target.value);
  }, []);

  return (
    <>
    <ProfileWrapper>
      
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

      </ProfileWrapper>
    </>
  )
}