import React, { useState } from 'react';
import Input from './Input';
import * as yup from 'yup';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux'
import { login } from '../store/actions/index'
import { useHistory } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

const Login = props => {
  const defaultState = {
    username: '',
    password: '',
  };
  const [formState, setFormState] = useState(defaultState);
  const [errors, setErrors] = useState({ ...defaultState});
  // const [buttonDisabled, setButtonDisabled] = useState(true);
const history = useHistory()
  let formSchema = yup.object().shape({
    username: yup.string().required('Please provide name.'),
    email: yup
      .string()
      .required('Please provide a email.')
      .email('This is not a valid email.'),
    password: yup
      .string()
      .required('That was an incorrect password. Try again.'),
    position: yup.string(),
  });

  // useEffect(() => {
  //   if (formState.terms) {
  //     setButtonDisabled(!formState.terms);
  //   }
  // }, [formState]);

  const formSubmit = (e) => {
    e.preventDefault();
    props.login({ username: formState.username, password: formState.password })
    const { authCode } = jwt_decode(localStorage.getItem('token'));
    console.log(authCode)
             if (authCode === 222) {
                        history.push('/instructor-dashboard')
                    } else if (authCode === 111) {
                        history.push('/client-dashboard')
                    }
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
        type='text'
        name='username'
        onChange={inputChange}
        value={formState.username}
        label='username'
        errors={errors}
      />
      <Input
        type='password'
        name='password'
        onChange={inputChange}
        value={formState.password}
        label='Password'
        errors={errors}
      />
      <button>Submit</button>
    </form>
  );
}

const mapStateToProps = state => {
  return{
    classes: state.classes,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps,{login})(Login)
