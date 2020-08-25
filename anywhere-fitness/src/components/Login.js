import React, { useState, useEffect } from 'react';
import Input from './Input';
import * as yup from 'yup';
import axios from 'axios';

export default function Login() {
  const defaultState = {
    name: '',
    email: '',
    password: '',
    position: '',
    terms: false
  };
  const [formState, setFormState] = useState(defaultState);
  const [errors, setErrors] = useState({ ...defaultState, terms: '' });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  let formSchema = yup.object().shape({
    name: yup.string().required('Please provide name.'),
    email: yup
      .string()
      .required('Please provide a email.')
      .email('This is not a valid email.'),
    password: yup
      .string()
      .required('That was an incorrect password. Try again.'),
    position: yup.string(),
    terms: yup
      .boolean()
      .oneOf([true], 'Please agree to the terms and conditions')
  });

  useEffect(() => {
    if (formState.terms) {
      setButtonDisabled(!formState.terms);
    }
  }, [formState]);

  const formSubmit = e => {
    e.preventDefault();
    console.log('form submitted!');
    axios
      .post('https://reqres.in/api/users', formState)
      .then(() => console.log('form submitted success'))
      .catch(err => console.log(err));
  };

  const validateChange = e => {

    e.persist();
    if (e.target.value.length === 0) {
      setErrors({
        ...errors,
        [e.target.name]: `${e.target.name} field is required`
      });
    }
  };
  const inputChange = e => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value
    });
    validateChange(e);
  };

  return (
    <form onSubmit={formSubmit}>
      <Input
        type='email'
        name='email'
        onChange={inputChange}
        value={formState.email}
        label='Email'
        errors={errors}
      />
      <Input
        type='password'
        name='password'
        onChange={inputChange}
        value={formState.motivation}
        label='Password'
        errors={errors}
      />
      <label className='terms' htmlFor='terms'>
        <input name='terms' type='checkbox' onChange={inputChange} />
        Terms & Conditions
      </label>
      <button disabled={buttonDisabled}>Submit</button>
    </form>
  );
}
