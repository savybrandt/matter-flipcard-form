import React from 'react';
import PropTypes from 'prop-types';
import TeamMember from '../TeamMember';
import { FlipCard } from '../common/Card';
import { PrimaryButton } from '../common/Button';
import { TeamMemberForm } from '../TeamMemberForm';

const Front = ({ flipCard }) => (
  <TeamMember
    id="new"
    name="Join us!"
    title="New Teammate"
    story={<PrimaryButton onClick={flipCard}>Let's do it!</PrimaryButton>}
  />
);

const NewTeamMember = (props) => (
  <FlipCard
    front={Front}
    back={TeamMemberForm}
    {...props}
  />
);

Front.propTypes = {
  flipCard: PropTypes.func.isRequired,
};

export default NewTeamMember;
