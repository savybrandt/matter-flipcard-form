import React, { Fragment, useState } from 'react';
import ImageUploader from 'react-images-upload'
import styled from 'styled-components';
import Avatar from '../Avatar';

const Preview = styled(Avatar)`
  margin-top: 12px;
  .avatar {
    height: 300px;
    width: 300px;
    border: solid 3px #05bb87;
    box-shadow: 2px 2px 3px 0 #dadada;
  }
`;

const ImageUploaderField = ({setFieldValue, value, ...rest}) => {
  const [url, setUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const onUpload = (file, url) => {
    setUrl(url);
    setFileName(file.name);
    setFieldValue('photoUrl', url);
  };
  return (
    <Fragment>
      <Preview src={url} alt={fileName}/>
      <ImageUploader
        type="file"
        withIcon={false}
        withLabel={false}
        buttonText="Choose Image"
        onChange={(files, urls) => onUpload(files[0], urls[0])}
      />
    </Fragment>
  )
}

export default ImageUploaderField;