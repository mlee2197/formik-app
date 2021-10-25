import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// contains all form values
const initialValues = {
  name: '',
  email: '',
  channel: '',
}

// function for submitting
const onSubmit = (values) =>{
  console.log('Form data', values);
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().required('Required').email('Invalid Email Format'),
  channel: Yup.string().required('Required'),
});

export default function YoutubeForm() {

  /*components
  Formik - replaces using the useFormik hook
  Form -  automatically uses the Formik handleSubmit
  Field - renders input element and hooks it up to Formik value, handleChange, and handleBlur
    - NOTE: also passes through any other props
    - as='textarea' attribute renders textarea instead of input
    - component=<MyComponent/> renders a react component (unlikely to use)
    - can use render props to render the element (unlikely to use)
  ErrorMessage - renders just plain text as error message
    - to wrap message in element, use component='div' to wrap div (also works )
      - also works with components={MyComponent}
      - also works with render props
  */

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <FormControl>
          <label htmlFor='name'>Name</label>
          <Field type='text' id='name' name='name' />
          <ErrorMessage name='name'/>
        </FormControl>

        <FormControl>
          <label htmlFor='email'>Email</label>
          <Field type='email' id='email' name='email' />
          <ErrorMessage name='email'/>
        </FormControl>

        <FormControl>
          <label htmlFor='email'>Channel</label>
          <Field type='text' id='channel' name='channel' />
          <ErrorMessage name='channel'/>
        </FormControl>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

const myForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;  
  margin-bottom: 20px;  
`;

const Input = styled.input`
  padding: 10px;
`;

const Error = styled.div`
  margin:0;
  color: red;
  padding: 0;
`;