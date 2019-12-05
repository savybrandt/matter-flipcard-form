import styled from 'styled-components';
import Button from './Button';

const PrimaryButton = styled(Button)`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  height: 32px;
  color: white;
  border-radius: 4px;
  padding: 0px 16px;
  background: rgb(7, 187, 135);
  border-color: #0000;
  font-weight: bold;
`;

export default PrimaryButton;
