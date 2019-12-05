import Yup from 'yup';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { PrimaryButton } from '../Button';
import {
  Field,
  Formik,
  ErrorMessage,
  Form as FormikForm,
} from 'formik';

const Form = ({
  fields,
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
        <Fragment key={name}>
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
        </Fragment>
      ))}
      <PrimaryButton type="submit">Submit</PrimaryButton>
    </FormikForm>
  </Formik>
);

Form.propTypes = {
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  initialValues: PropTypes.object,
  fields: PropTypes.arrayOf({
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    component: PropTypes.node,
    placeholder: PropTypes.string,
  }),
  validationSchema: PropTypes.instanceOf(Yup)
};

Form.defaultProps = {
  fields: [],
  initialValues: {},
  onSubmit: () => {},
  validationSchema: undefined
};

export default Form;