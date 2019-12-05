import Yup from 'yup';
import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton, SecondaryButton } from '../Button';
import {
  Field,
  Formik,
  ErrorMessage,
  Form as FormikForm,
} from 'formik';

const Form = ({
  fields,
  onCancel,
  onSubmit,
  className,
  initialValues,
  validationSchema,
}) => (
  <Formik
    onSubmit={onSubmit}
    initialValues={initialValues}
    validationSchema={validationSchema}
  >
    <FormikForm className={className}>
      {fields.map(({
        name,
        type,
        label,
        component,
        placeholder,
        ...rest
      }, index) => (
        <div className={`${name}-field field-container`} key={name}>
          { label && (
            <label htmlFor={name}>
              { `${label}:` }
            </label>
            )
          }
          <Field
            name={name}
            type={type}
            htmlFor={name}
            as={component}
            placeholder={placeholder}
            {...rest}
          />
          <ErrorMessage className="error" name={name} />
        </div>
      ))}
      <div className="button-bar">
        <SecondaryButton onClick={onCancel} type="button">Cancel</SecondaryButton>
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </div>
    </FormikForm>
  </Formik>
);

Form.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  className: PropTypes.string,
  initialValues: PropTypes.object,
  fields: PropTypes.arrayOf({
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  validationSchema: PropTypes.instanceOf(Yup)
};

Form.defaultProps = {
  fields: [{
    name: 'text',
    type: 'text',
    label: 'text',
    placeholder: 'text',
  }],
  initialValues: {},
  onSubmit: () => {},
  onCancel: () => {},
  validationSchema: undefined
};

export default Form;