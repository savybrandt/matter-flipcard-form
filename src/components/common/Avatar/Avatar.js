import React from 'react';
import styled from 'styled-components';

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

export default StyledAvatar;