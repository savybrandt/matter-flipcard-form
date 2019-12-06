import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useAxios from 'axios-hooks';
import { StyledForm } from '../common/Form';
import { fields, validationScheama } from './formConfig';

const TeamMemberForm = ({ flipCard, refetchData, className }) => {
  const [{ data, loading, error }, executePost] = useAxios({
    url: '/teamMember',
    method: 'POST',
  }, { manual: true });

  useEffect(() => {
    // if (error) return error;
    // if (loading) return 'Loading';
    if (data) refetchData();
  }, [data, error, flipCard, loading, refetchData]);


  return (
    <StyledForm
      pageCount={3}
      fields={fields}
      onCancel={flipCard}
      className={className}
      validationScheama={validationScheama}
      onSubmit={(values) => {
        flipCard();
        executePost({ data: values });
      }}
    />
  );
};

TeamMemberForm.propTypes = {
  flipCard: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  refetchData: PropTypes.func.isRequired,
};

export default TeamMemberForm;
