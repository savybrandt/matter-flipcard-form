import styled from 'styled-components';
import Form from './Form';

const StyledForm = styled(Form)`
  display: flex;
  padding: 32px;
  height: 100%;
  flex-direction: column;
  align-items: self-start;

  .counter {
    color: #07bb87;
    margin-left: auto;
  }

  label {
    font-weight: bold;
  }

  .field-container {
    width: 75%;
    margin: 12px 0px;
    text-align: left;
  }

  .field {
    margin-top: 8px;
    display: block;
  }

  textarea {
    height: 250px;
    max-width: 100%;
    max-height: 100%;
  }

  input, textarea {
    width: 100%;
    text-align: left;
    padding: .67857143em 1em;
    border: 1px solid #22242626;
    border-radius: .28571429rem;
  }

  .button-bar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-grow: 1;
    align-items: flex-end;

    button {
      margin-left: 12px;
    }
  }

  .error {
    color: red;
  }
`;

export default StyledForm;
