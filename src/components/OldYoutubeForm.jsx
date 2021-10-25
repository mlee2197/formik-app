import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
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

// function for validating. Must return an errors object
/*const validate = (values) => {
  let errors = {};

  if(!values.name) errors.name = 'Required';
  if(!values.email) errors.email = 'Required';
  if(!values.channel) errors.channel = 'Required';

  return errors;
}*/

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().required('Required').email('Invalid Email Format'),
  channel: Yup.string().required('Required'),
});


/*
formik variables
  - formik.values
  - formik.errors
  - formik.touched (visited input fields)
*/

/*
formik functions
  - formik.handleChange -> handles state changes on inputs
  - formik.handleBlur -> handles tracking if an input has been visited

*/
export default function YoutubeForm() {

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    //validate: validate,
    validationSchema
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormControl>
        <label htmlFor='name'>Name</label>
        <Input 
          type='text' 
          id='name' 
          name='name' 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.name}/>
        {formik.touched.name ? <Error>{formik.errors.name}</Error> : null}
      </FormControl>

      <FormControl>
        <label htmlFor='name'>Email</label>
        <Input 
          type='email' 
          id='email' 
          name='email' 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.email}/>
        {formik.touched.email ? <Error>{formik.errors.email}</Error> : null}
      </FormControl>

      <FormControl>
        <label htmlFor='name'>Channel</label>
        <Input 
          type='text' 
          id='channel' 
          name='channel' 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlure}
          value={formik.values.channel}/>
        {formik.touched.channel ? <Error>{formik.errors.channel}</Error> : null}
      </FormControl>

      <button type="submit">Submit</button>
    </Form>
  )
}

const Form = styled.form`
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