import React from 'react';
import { Formik} from 'formik';
import { ButtonSecondary } from '../Buttons';
import { Box, Flex } from '../../components/Layout';

const RegisterFindComponent = () => (
  <div>
  <Formik
    initialValues={{ gooseberryCode: '', locationCode: ''}}
    validate={values => {
      let errors = {};
      if (!values.locationCode) {
        errors.locationCode = 'please enter the location code';
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
          Please enter the Location code
          </label>
          <input
          className="form-field"
          type="text"
          name="locationCode"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.locationCode}
          />
          {errors.locationCode && touched.locationCode && errors.locationCode}
          <label className="form-field-label-code">
          Please enter the Gooseberry code
          </label>
          <input
          className="form-field"
          type="text"
          name="gooseberryCode"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.gooseberryCode}
          />
          {errors.gooseberryCode && touched.gooseberryCode && errors.gooseberryCode}
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