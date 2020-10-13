import React, { useCallback, FC, ChangeEvent, memo } from "react";
import { PersonalDetail } from './styles';

interface Props {
  age: number;
  name: string;
  onAgeButtonClick(): void;
  changeName(name: string): void;
}

const ProfilePersonalDetails: FC<Props> = ({ age, name, onAgeButtonClick, changeName }) => {

  const handleNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    changeName(event.target.value);
  }, []);

  const handleAgeChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onAgeButtonClick();
  }, []);

  return (
    <form>
      <PersonalDetail>Name: {name}
        <input 
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={handleNameChange}
          >
        </input>
      </PersonalDetail>
      <PersonalDetail>Age: {age}
        <input 
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={handleAgeChange}
          >
        </input>
      </PersonalDetail>



      <PersonalDetail>Name:
        <input 
          type="number"
          placeholder="Enter Name"
          value={name}
          onChange={handleNameChange}
          >
        </input>
      </PersonalDetail>
      <PersonalDetail>Email Address:
        <input 
          type="number"
          placeholder="Enter Name"
          value={name}
          onChange={handleNameChange}
          >
        </input>
      </PersonalDetail>
      <PersonalDetail>Phone Number:
        <input 
          type="number"
          placeholder="Enter Name"
          value={name}
          onChange={handleNameChange}
          >
        </input>
      </PersonalDetail>
      <PersonalDetail>Location:
        <input 
          type="number"
          placeholder="Enter Name"
          value={name}
          onChange={handleNameChange}
          >
        </input>
      </PersonalDetail>
      <PersonalDetail>LinkedIn Profile:
        <input 
          type="number"
          placeholder="Enter Name"
          value={name}
          onChange={handleNameChange}
          >
        </input>
      </PersonalDetail>
      <PersonalDetail>GitHub Profile:
        <input 
          type="number"
          placeholder="Enter Name"
          value={name}
          onChange={handleNameChange}
          >
        </input>
      </PersonalDetail>
      <PersonalDetail>Personal Website:
        <input 
          type="number"
          placeholder="Enter Name"
          value={name}
          onChange={handleNameChange}
          >
        </input>
      </PersonalDetail>
      <input type="submit" value="Submit" />
    </form>   
  );
}

export const ProfilePersonalDetailsMemo = memo(ProfilePersonalDetails);
