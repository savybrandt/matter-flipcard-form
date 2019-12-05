import styled from 'styled-components';
import Button from './Button';

const PrimaryButton = styled(Button)`
  margin: 24px 25% 0px auto;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  height: 32px;
  line-height: 28px;
  width: auto;
  position: relative;
  color: white;
  text-shadow: rgb(5, 161, 100) 0px -1px 2px;
  box-shadow: rgba(7, 187, 135, 0.25) 0px 2px 0px;
  border-radius: 4px;
  padding: 0px 16px;
  background: rgb(7, 187, 135);
`;

export default PrimaryButton;
