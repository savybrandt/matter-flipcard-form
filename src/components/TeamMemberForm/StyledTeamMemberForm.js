import styled from 'styled-components';
import TeamMemberForm from './TeamMemberForm';

const StyledTeamMemberForm = styled(TeamMemberForm)`
  .photoUrl-field{
    width: 100%;
  }

  .circle-picker {
    margin-top: 12px;
  }

  .story-field {
    width: 100%;
  }

  textarea {
    border: none;
    font-size: 12px;
  }
`;

export default StyledTeamMemberForm;
