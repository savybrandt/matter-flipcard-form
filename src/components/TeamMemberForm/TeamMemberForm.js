import React, { useEffect } from 'react';
import useAxios from 'axios-hooks';
import { fields } from './formConfig';
import { StyledForm } from '../common/Form';

const TeamMemberForm = ({ flipCard }) => {
  const [{data, loading, error}, executePost] = useAxios({
    url: '/teamMember',
    method: 'POST'
  },{ manual: true });

  useEffect(() => {
    // if (error) return error;
    // if (loading) return 'Loading';
    if (data) flipCard();
  }, [data, error, loading]);


  return (
    <StyledForm
      pageCount={3}
      fields={fields}
      onCancel={flipCard}
      onSubmit={data => executePost({ data })}
    />
  );
}

export default TeamMemberForm;