import styled from 'styled-components';
import Form from './Form';

const StyledForm = styled(Form)`
  .form {
    display: flex;
    padding: 32px;
    flex-direction: column;
    align-items: self-start;
  }
  .label {
    font-weight: bold;
    padding: 12px 0px 8px;
  }
  .field {
    margin: 0;
    max-width: 100%;
    flex: 1 0 auto;
    outline: 0;
    -webkit-tap-highlight-color: #fff0;
    text-align: left;
    padding: .67857143em 1em;
    border: 1px solid #22242626;
    border-radius: .28571429rem;
  }
  .error {
    color: red;
  }
`;

export default StyledForm;
