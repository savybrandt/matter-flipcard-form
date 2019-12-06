import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFlipCard = styled.div`
  background-color: transparent;
  perspective: 1000px;
  display: inline-flex;
  flex-direction: column;
  height: 612px;
  width: 359px;
  margin-bottom: 112px;

  @media screen and (min-width: 640px) {
    display: inline-flex;
    margin-right: 24px;
    margin-left: 24px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }

  &.flipped .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .flip-card-front {
    display: flex;
    flex-direction: column;
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }
`;

const FlipCard = ({ front: Front, back: Back, ...rest}) => {
  const [flipped, setFlipped] = useState(false);
  const flipCard = () => setFlipped(!flipped);
  return (
    <StyledFlipCard className={flipped ? 'flipped' : ''} >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Front flipCard={flipCard} {...rest}/>
        </div>
        <div className="flip-card-back">
          <Back flipCard={flipCard} {...rest}/>
        </div>
      </div>
    </StyledFlipCard>
  );
}


FlipCard.propTypes = {
  back: PropTypes.node.isRequired,
  front: PropTypes.node.isRequired,
}

export default FlipCard;