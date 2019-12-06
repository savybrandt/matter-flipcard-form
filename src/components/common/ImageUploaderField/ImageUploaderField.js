import React, { Fragment, useState } from 'react';
import ImageUploader from 'react-images-upload'
import styled from 'styled-components';
import Avatar from '../Avatar';

const Preview = styled(Avatar)`
  margin-top: 24px;
  .avatar {
    height: 290px;
    width: 290px;
    box-shadow: 2px 2px 3px 0 #dadada;
  }
`;

const ImageUploaderField = ({setFieldValue, ...rest}) => {
  const [url, setUrl] = useState();
  const [fileName, setFileName] = useState('');
  const onUpload = (file, url) => {
    if(!file) return;
    setUrl(url);
    setFileName(file.name);
    setFieldValue(rest.name, url);
  };
  return (
    <Fragment>
      <Preview src={url} alt={fileName}/>
      <ImageUploader
        type="file"
        withIcon={false}
        withLabel={false}
        maxFileSize={300000}
        buttonText="Choose Image"
        onChange={(files, urls) => onUpload(files[0], urls[0])}
      />
    </Fragment>
  )
}

export default ImageUploaderField;