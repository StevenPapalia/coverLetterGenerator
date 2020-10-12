import React, { FC } from 'react';
import { ProfileSection } from './styles';
import { Jumbo } from '../styles';
import { ProfilePicture } from '../../../containers/ProfilePictureContainer';
import { ProfilePersonalDetails } from '../../../containers/ProfilePersonalDetailsContainer';

interface Props {
}

const Profile: FC<Props> = () => {
  return (
    <>      
      <Jumbo message="Your Profile" />
      <ProfileSection>
        <ProfilePicture />
      </ProfileSection>
      <ProfileSection>
        <ProfilePersonalDetails />
      </ProfileSection>
      {/* // make submit */}
    </>
  );
}

export default Profile;