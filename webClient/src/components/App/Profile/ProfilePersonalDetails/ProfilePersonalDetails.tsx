import React, { useCallback, FC, ChangeEvent, memo } from "react";
import { PersonalDetail } from "./styles";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.US";

type ProfilePersonalDetails = {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  github: string;
  website: string;
};

interface Props {
  personalDetails: ProfilePersonalDetails;
  setPersonalDetails(personalDetails: ProfilePersonalDetails): void;
}

const ProfilePersonalDetails: FC<Props> = ({
  personalDetails,
  setPersonalDetails,
}) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setPersonalDetails({
        ...personalDetails,
        [event.target.name]: event.target.value,
      });
    },
    [personalDetails]
  );

  return (
    <form>
      <PersonalDetail>
        Name:
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={personalDetails.name}
          onChange={handleChange}
        />
      </PersonalDetail>
      <PersonalDetail>
        Email Address:
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={personalDetails.email}
          onChange={handleChange}
        />
      </PersonalDetail>
      <PersonalDetail>
        Phone Number:
        <Cleave
          options={{ phone: true, phoneRegionCode: "US" }}
          type="text"
          placeholder="Enter Phone"
          name="phone"
          value={personalDetails.phone}
          onChange={handleChange}
        />
      </PersonalDetail>
      <PersonalDetail>
        Location:
        <input
          type="text"
          placeholder="Enter Location"
          name="location"
          value={personalDetails.location}
          onChange={handleChange}
        />
      </PersonalDetail>
      <PersonalDetail>
        LinkedIn Profile:
        <input
          type="text"
          placeholder="Enter LinkedIn Profile URL"
          name="linkedIn"
          value={personalDetails.linkedIn}
          onChange={handleChange}
        />
      </PersonalDetail>
      <PersonalDetail>
        Github Profile:
        <input
          type="text"
          placeholder="Enter Github Profile URL"
          name="github"
          value={personalDetails.github}
          onChange={handleChange}
        />
      </PersonalDetail>
      <PersonalDetail>
        Personal Website:
        <input
          type="text"
          placeholder="Enter Personal Website URL"
          name="website"
          value={personalDetails.website}
          onChange={handleChange}
        />
      </PersonalDetail>
    </form>
  );
};

export const ProfilePersonalDetailsMemo = memo(ProfilePersonalDetails);
