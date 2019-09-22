import React from 'react';
import { Formik} from 'formik';
import { ButtonSecondary } from '../Buttons';
import { Box, Flex } from '../../components/Layout';

const RegisterFindComponent = () => (
  <div>
  <Formik
    initialValues={{ code: ''}}
    validate={values => {
      let errors = {};
      if (!values.code) {
        errors.code = 'code is required';
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        fetch('/beaconsproject.uk/api/', {
          method: 'POST',
          body: values,
        });
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleReset,
      handleBlur,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (
      <form onSubmit={handleSubmit}>
        <Flex wrap={['wrap', 'wrap', 'wrap']}>
          <label className="form-field-label-code">
          Please enter your Gooseberry or Location code
          </label>
          <input
          className="form-field"
          type="number"
          name="code"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.code}
          />
          {errors.code && touched.code && errors.code}
        </Flex>
      
      <Box width={[1, '100%', '100%']}>
        <ButtonSecondary classname="submit-button" type="submit" disabled={isSubmitting}>
          Submit
        </ButtonSecondary>
      </Box>
      </form>
    )}
  </Formik>
</div>
);

export default RegisterFindComponent;