import React, { FC } from 'react';
import { ProfileSection } from './styles';
import { Jumbo } from '../styles';
import { ProfilePicture } from '../../../containers/ProfilePictureContainer';
import { ProfilePersonalDetails } from '../../../containers/ProfilePersonalDetailsContainer';
import { DND_List as TechnicalSkills } from  '../../../containers/DND_ListContainer';

interface Props {
}

const Profile: FC<Props> = () => {
  return (
    <>      
      <Jumbo message="Your Profile" />
      <ProfileSection><ProfilePicture /></ProfileSection>
      <ProfileSection><ProfilePersonalDetails /></ProfileSection>
      <ProfileSection><TechnicalSkills headline="Top Technical Skills" /></ProfileSection>
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