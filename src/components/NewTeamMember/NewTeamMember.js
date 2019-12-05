import React from 'react';
import TeamMember from '../TeamMember';
import { FlipCard } from '../common/Card';
import { PrimaryButton } from '../common/Button';
import { TeamMemberForm } from '../TeamMemberForm';

const Front = ({ flipCard }) => (
  <TeamMember
    id="new"
    name="Join us!"
    title="New Teammate"
    story={<PrimaryButton onClick={flipCard}>Join Team</PrimaryButton>}
  />
);

const NewTeamMember = (props) => (
  <FlipCard
    front={Front}
    back={TeamMemberForm}
  />
)

export default NewTeamMember;