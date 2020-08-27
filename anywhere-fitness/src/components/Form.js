import React, { useState, useEffect } from 'react';
import Input from './Input';
import * as yup from 'yup';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

export default function Form() {
  const defaultState = {
    username: '',
    email: '',
    password: '',
    authCode: '',
    terms: false
  };
  const [formState, setFormState] = useState(defaultState);
  const [errors, setErrors] = useState({ ...defaultState, terms: '' });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const history = useHistory()

  
  let formSchema = yup.object().shape({
    username: yup.string().required('Please provide name.'),
    email: yup.string().required('Please provide a email.').email('This is not a valid email.'),
    motivation: yup.string().required('Please state why you are interested in volunteering.'),
    position: yup.string(),
    terms: yup.boolean().oneOf([true], 'Please agree to the terms and conditions')
  });

  useEffect(() => {
    if (formState.terms) {
      setButtonDisabled(!formState.terms);
    }
  }, [formState]);

  const correctFormState = { username: formState.username , password: formState.password, email: formState.email, authCode: formState.authCode }

  const formSubmit = e => {
    e.preventDefault();
    console.log('form submitted!');
    axios
      .post('/auth/register', correctFormState)
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.payload)
        history.push('/')
      })
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
  const roleChange = e => {
    setFormState({
      ...formState,
      authCode: parseInt(e.target.value, 10)
    })
  }

  return (
    <form onSubmit={formSubmit}>
      <Input
        type='text'
        name='username'
        onChange={inputChange}
        value={formState.username}
        label='Username'
        errors={errors}
      />
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
      <label htmlFor='position'>
        What role are you interested in?
        <select name='authCode' onChange={roleChange}>
          <option value='222'>Instructor</option>
          <option value='111'>Client</option>
        </select>
      </label>
      <label className='terms' htmlFor='terms'>
        <input name='terms' type='checkbox' onChange={inputChange} />
        Terms & Conditions
      </label>
      <button disabled={buttonDisabled}>Signup!</button>
    </form>
  );
}
