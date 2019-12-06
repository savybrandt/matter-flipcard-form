import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(79, 82, 177, 0.35);
  display: inline-flex;
  flex-direction: column;
  height: 612px;
  text-align: center;
  width: 359px;
  margin-bottom: 112px;

  @media screen and (min-width: 640px) {
    display: inline-flex;
    margin-right: 24px;
    margin-left: 24px;
  }
`;

export default Card;
