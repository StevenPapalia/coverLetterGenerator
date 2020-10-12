import React, { useCallback, FC, ChangeEvent, memo } from "react";
// import { PersonalDetailsForm } from './styles';

interface Props {
  age: number;
  name: string;
  onAgeButtonClick(): void;
  changeName(name: string): void;
}

const ProfilePersonalDetails: FC<Props> = ({ age, name, onAgeButtonClick, changeName }) => {

  const handleNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    changeName(event.target.value);
  }, []);

  return (
    // turn into a proper form with proper fields and proper functions
    <div>
      TEst..
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
    </div>   
  );
}

export const ProfilePersonalDetailsMemo = memo(ProfilePersonalDetails);
