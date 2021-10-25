import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

export default function YoutubeForm() {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: '',
    }
  });

  return (
    <Form>
      <label htmlFor='name'>Name</label>
      <Input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}/>

      <label htmlFor='name'>Email</label>
      <Input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>

      <label htmlFor='name'>Channel</label>
      <Input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel}/>

      <button>Submit</button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

const Input = styled.input`
  margin-bottom: 20px;
`;
