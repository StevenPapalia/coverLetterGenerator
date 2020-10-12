import React, { FC } from 'react';
import { ProfilePicture } from '../../containers/ProfilePictureContainer';
import { ProfilePersonalDetails } from '../../containers/ProfilePersonalDetailsContainer';

interface Props {
}

const Profile: FC<Props> = () => {
  return (
    <>      
      <h1>Your Profile</h1>
      <ProfilePicture />
      <ProfilePersonalDetails />
    </>
  );
}

export default Profile;