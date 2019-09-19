import React from 'react';
import { Formik} from 'formik';
import { ButtonSecondary } from '../Buttons';

const RegisterForm = () => (
  <div>
  <Formik
    initialValues={{ name: '', password: '', email: '', postcode: '', phone: '' }}
    validate={values => {
      let errors = {};
      if (!values.name) {
        errors.name = 'name is required';
      }
      if (!values.password) {
        errors.password = 'password is required';
      }
      if (!values.email) {
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
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
      handleBlur,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (
      <form onSubmit={handleSubmit}>
        <label>
        <input
          className="form-field"
          placeholder="text"
          type="name"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        </label>
        {errors.name && touched.name && errors.name}
        <label>
        <input
          className="form-field"
          placeholder="password"
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        </label>
        {errors.password && touched.password && errors.password}
        <label>
        <input
          className="form-field"
          placeholder="email"
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        </label>
        {errors.email && touched.email && errors.email}
        <label>
        <input
          className="form-field"
          placeholder="text"
          type="postcode"
          name="postcode"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.postcode}
        />
        </label>
        {errors.postcode && touched.postcode && errors.postcode}
        <label>
        <input
          className="form-field"
          placeholder="number"
          type="phone"
          name="phone"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phone}
        />
        </label>
        {errors.phone && touched.phone && errors.phone}
        <ButtonSecondary classname="submit-button" type="submit" disabled={isSubmitting}>
          Submit
        </ButtonSecondary>
      </form>
    )}
  </Formik>
</div>
);

export default RegisterForm;