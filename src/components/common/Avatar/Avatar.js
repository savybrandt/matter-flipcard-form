import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MatterEmptyAvatar from '../../../assets/matter_empty_avatar.svg';

export const Avatar = ({src, alt, className}) => (
  <div className={className}>
    <img
      alt={alt}
      src={src}
      className="avatar"
    />
  </div>
);

const StyledAvatar = styled(Avatar)`
  margin-top: -64px;
  margin-bottom: 8px;

  .avatar {
    border-radius: 50%;
    vertical-align: middle;

    width: 128px;
    height: 128px;

    display: inline-block;
  }
`;

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

Avatar.defaultProps = {
  src: MatterEmptyAvatar,
  alt: 'avatar'
};

export default StyledAvatar;