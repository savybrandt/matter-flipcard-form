import Yup from 'yup';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import {
  Field,
  Formik,
  ErrorMessage,
  Form as FormikForm,
} from 'formik';

const Form = ({
  fields,
  onSubmit,
  initialValues,
  validationSchema,
}) => (
  <Formik
    onSubmit={onSubmit}
    initialValues={initialValues}
    validationSchema={validationSchema}
  >
    <FormikForm className="form">
      {fields.map(({
        name,
        type,
        label,
        component,
        placeholder,
        ...rest
      }) => (
        <Fragment>
          { label && (
            <label className="label" for={name}>
              { `${label}:` }
            </label>
            )
          }
          <Field
            name={name}
            type={type}
            htmlFor={name}
            as={component}
            className="field"
            placeholder={placeholder}
            {...rest}
          />
          <ErrorMessage className="error" name={name} />
        </Fragment>
      ))}
    </FormikForm>
  </Formik>
);

Form.propTypes = {
  onSubmit: PropTypes.func,
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