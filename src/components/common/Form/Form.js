import Yup from 'yup';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Formik,
  ErrorMessage,
  Field as FormikField,
} from 'formik';
import { PrimaryButton, SecondaryButton } from '../Button';


const Field = ({
  name,
  type,
  label,
  page,
  component,
  currentPage,
  placeholder,
  setFieldValue,
  ...rest
}) => {
  if (page !== currentPage) return '';
  return (
    <div className={`${name}-field field-container`} key={name}>
      { label && (
        <label htmlFor={name}>{ `${label}:` }</label>
      )}
      <FormikField
        name={name}
        type={type}
        htmlFor={name}
        as={component}
        className="field"
        placeholder={placeholder}
        setFieldValue={setFieldValue}
        {...rest}
      />
      <ErrorMessage className="error" name={name} />
    </div>
  );
};

Field.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  component: PropTypes.node,
  placeholder: PropTypes.string,
  page: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

Field.defaultProps = {
  name: '',
  type: '',
  label: '',
  component: '',
  placeholder: '',
};

const Form = ({
  fields,
  onCancel,
  onSubmit,
  className,
  pageCount,
  initialValues,
  validationSchema,
}) => {
  const [page, setPage] = useState(1);
  const isLastPage = page === pageCount;
  return (
    <Formik
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
        setPage(1);
      }}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, setFieldValue, handleReset }) => (
        <form
          className={className}
        >
          <div className="counter">{`${page}/${pageCount}`}</div>
          {fields.map((props, index) => (
            <Field
              key={`${page}-${index}`}
              currentPage={page}
              setFieldValue={setFieldValue}
              {...props}
            />
          ))}
          <div className="button-bar">
            { page === 1 ? (
              <SecondaryButton
                type="button"
                onClick={() => {
                  handleReset();
                  onCancel();
                }}
              >
                Cancel
              </SecondaryButton>
            ) : (
              <SecondaryButton type="button" onClick={() => setPage(page - 1)}>
                  Back
              </SecondaryButton>
            )}
            { isLastPage ? (
              <PrimaryButton onClick={handleSubmit}>Submit</PrimaryButton>
            ) : (
              <PrimaryButton onClick={() => setPage(page + 1)} type="button">
                Next
              </PrimaryButton>
            )}
          </div>
        </form>
      )}
    </Formik>
  );
};

Form.propTypes = {
  fields: PropTypes.array,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  pageCount: PropTypes.number,
  className: PropTypes.string,
  initialValues: PropTypes.object,
  validationSchema: PropTypes.instanceOf(Yup),
};

Form.defaultProps = {
  fields: [{
    name: 'text',
    type: 'text',
    label: 'text',
    placeholder: 'text',
  }],
  pageCount: 1,
  className: '',
  initialValues: {},
  onSubmit: () => {},
  onCancel: () => {},
  validationSchema: undefined,
};

export default Form;
