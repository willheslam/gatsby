import React from 'react';
import { Formik} from 'formik';
import { ButtonSecondary } from '../Buttons';
import { Box, Flex } from '../../components/Layout';
import api from '../../utils/api';

const LoginFormComponent = () => (
  <div>
  <Formik
    initialValues={{ username: '', password: '' }}
    validate={values => {
      let errors = {};
      if (!values.username) {
        errors.username = 'username is required';
      }
      if (!values.password) {
        errors.password = 'password is required';
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        api.login(values);

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
        <Flex wrap={['wrap', 'nowrap', 'nowrap']}>
          <label className="form-field-label">
          Name or email:
          </label>
          <input
          className="form-field"
          type="text"
          name="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          />
          {errors.username && touched.username && errors.username}
        </Flex>

        <Flex wrap={['wrap', 'nowrap', 'nowrap']}>
        <label className="form-field-label">
        Password:
        </label>
        <input
          className="form-field"
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password && errors.password}
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

export default LoginFormComponent;