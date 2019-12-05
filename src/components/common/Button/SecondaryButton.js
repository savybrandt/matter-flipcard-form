import styled from 'styled-components';
import Button from './Button';

const SecondaryButton = styled(Button)`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  height: 32px;
  color: rgb(7, 187, 135);
  border-radius: 4px;
  padding: 0px 16px;
  background: #0000;
  border: solid 2px rgb(7, 187, 135);
  font-weight: bold;
`;

export default SecondaryButton;
