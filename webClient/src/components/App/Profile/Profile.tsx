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
      <ProfileSection>
        <div>Top Hard Skills</div>
      </ProfileSection>
      <ProfileSection>
        <div>Top Soft Skills</div>
      </ProfileSection>
      <ProfileSection>
        <div>top skills asked for in the job posting</div>
      </ProfileSection>
      <ProfileSection>
        <div>basic information about the company that you are applying to</div>
      </ProfileSection>
      {/* // make submit */}
    </>
  );
}

export default Profile;