import styled from 'styled-components';
import Form from './Form';

const StyledForm = styled(Form)`
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: self-start;

  label {
    font-weight: bold;
    padding: 12px 0px 8px;
  }
  input {
    margin: 0;
    width: 75%;
    text-align: left;
    padding: .67857143em 1em;
    border: 1px solid #22242626;
    border-radius: .28571429rem;
  }
  .error {
    color: red;
  }
  button {
    margin: 24px 0px 0px 48%;
  }
`;

export default StyledForm;
