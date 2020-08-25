import React, { useState } from 'react';
import Input from './Input';
import * as yup from 'yup';
import axios from 'axios';

export default function CreateClass() {
  const defaultState = {
    name: '',
    date: '',
    time: '',
    classtype: '',
    terms: false
  };
  const [formState, setFormState] = useState(defaultState);
  const [errors, setErrors] = useState({ ...defaultState, terms: '' });

  
  let formSchema = yup.object().shape({
    name: yup.string().required('Class Name is Required.'),
    date: yup.string().required('Please provide a date.'),
    classtype: yup.string(),
    terms: yup.boolean().oneOf([true], 'Create The Event')
  });

  const createEvent = e => {
    e.preventDefault();
    console.log('form submitted!');
    axios
      .post('https://reqres.in/api/users', formState)
      .then(() => console.log('Class Created'))
      .catch(err => console.log(err));
  };

  const validdateChange = e => {
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
    validdateChange(e);
  };

  return (
    <form onSubmit={createEvent}>
      <Input
        type='text'
        name='name'
        onChange={inputChange}
        value={formState.name}
        label='Name'
        errors={errors}
      />
      <Input
        type='text'
        name='date'
        onChange={inputChange}
        value={formState.date}
        label='Date'
        errors={errors}
      />
      <Input
        type='text'
        name='time'
        onChange={inputChange}
        value={formState.time}
        label='Time'
        errors={errors}
      />
      <button>Create Class</button>
    </form>
  );
}
