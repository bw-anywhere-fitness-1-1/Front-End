import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {connect} from 'react-redux' 


const formSchema = yup.object().shape({
    name: yup.string()
        .min(5, 'must include more than 5 characters')
        .required('must include class name'),
    startTime: yup.string()
        .min(1, 'must include atleast 1 characters')
        .required('Time is required'),
    classDate: yup.string()
        .required('must select a date'),
    duration: yup.string()
        .required('must select duration'),
    type: yup.string()
        .required('must select a type'),
    intensityLevel: yup.string()
        .required('must select an intensity'),
    location: yup.string()
        .required('must select a location'),
    currentRegistered: yup.number()
        .min(0, 'Number must be greater than 0').required(),
    maxClassSize: yup.number()
        .min(1, 'number must be greater than 0').required(),
    Instructor: yup.string()
    .min(1, 'must include at least 1 character'),
    Gender: yup.string()
    .min(1, 'minimum of 1 character')
})


const CreateClass = (props) => {
    const [isDisabled, setDisabled] = useState(true)
    const [formState, setformState] = useState({
        name: '',
        classDate: '',
        startTime: '',
        duration: '',
        type: '',
        intensityLevel: '',
        location: '',
        currentRegistered: 0,
        maxClassSize: 0,
        Instructor: '',
        Gender: ''
    })
    const savePost = e => {
        e.preventDefault()
        console.log(formState)
        axiosWithAuth()
        .post('https://bw-fitness-anywhere.herokuapp.com/api/classes',formState )
        .then( res => {
            console.log(res)
     })
        .catch( err => console.log(err))
    }
    const [errorState, setpState] = useState({
        name: '*',
        classDate: '*',
        startTime: '*',
        duration: '*',
        type: '*',
        intensityLevel: '*',
        location: '*',
        currentRegistered: 0,
        maxClassSize: 0,
        Instructor: '*',
        Gender: '*'
    })
    const validate = (e) => {
        yup.reach(formSchema, e.target.name).validate(e.target.value)
            .then(valid => {
                setpState({
                    ...errorState,
                    [e.target.name]: ''
                })
            }).catch(err => {
                console.log(err.errors)
                setpState({
                    ...errorState,
                    [e.target.name]: err.errors[0]
                })
            })
    }
    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setDisabled(!valid);
        })
    }, [formState])
    const inputChange = e => {
        e.persist()
        validate(e)
        setformState({ ...formState, [e.target.name]: e.target.value })
        
    }
    const roleChange = e => {
        setformState({
          ...formState,
          [e.target.name]: parseInt(e.target.value, 10)
        })
      }
    return (
        <div>
        {/* <pre>{JSON.stringify(formState, null, 2)}</pre> */}
            <form >
                <div>
                    <div>
                        <h2>Create Class</h2>
                    </div>
                    <label htmlFor='classname'>
                            Class name:
                        <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Create Class Name'
                                value={formState.name}
                                onChange={inputChange}
                            />
                            {errorState.name ? <p>{errorState.name}</p> : null}
     
                    </label>
                    <label htmlFor='date'>
                            Date:
                        <input
                                type='text'
                                name='classDate'
                                id='classDate'
                                placeholder='Enter Date'
                                value={formState.classDate}
                                onChange={inputChange}
                            />
                            {errorState.classDate ? <p>{errorState.classDate}</p> : null}
                    </label>
                    <label htmlFor='time'>
                            Time:
                        <input
                                type='text'
                                name='startTime'
                                id='startTime'
                                placeholder='Enter Time'
                                value={formState.startTime}
                                onChange={inputChange}
                            />
                            {errorState.startTime ? <p>{errorState.startTime}</p> : null}
                    </label>
                    <label htmlFor='duration'>
                            Duration:
                        <select
                                value={formState.duration}
                                name='duration'
                                id='duration'
                                onChange={inputChange}>
                                <option value=''>N/A</option>
                                <option value='.5h'>30 minutes</option>
                                <option value='1h'>1 hour</option>
                                <option value='1.5h'>1 1/5 hours</option>
                                <option value='2h'>2 hours</option>
                            </select>
                            {errorState.duration ? <p>{errorState.duration}</p> : null}
                    </label>
                    <label htmlFor='classtype'>
                            Type:
                        <select
                                value={formState.type}
                                name='type'
                                id='type'
                                onChange={inputChange}>
                                <option value=''>N/A</option>
                                <option value='Cardio'>Cardio</option>
                                <option value='Legs'>Legs minutes</option>
                                <option value='Arms'>Arms</option>
                                <option value='Chest'>Chest</option>
                                <option value='Yoga'>Yoga</option>
                                <option value='Zumba'>Zumba</option>
                                <option value='Turbo-Kick'>Turbo-Kick</option>
                            </select>
                            {errorState.type ? <p>{errorState.type}</p> : null}
                    </label>
                    <label htmlFor='intensityLevel'>
                            Intensity:
                        <select
                                value={formState.intensityLevel}
                                name='intensityLevel'
                                id='intensityLevel'
                                onChange={inputChange}>
                                <option value='0'>N/A</option>
                                <option value='1'>easy</option>
                                <option value='2'>Medium</option>
                                <option value='3'>Hard</option>
                            </select>
                            {errorState.intensityLevel ? <p>{errorState.Intensity}</p> : null}
                    </label>
                    <label htmlFor='location'>
                            Location:
                        <select
                                value={formState.location}
                                name='location'
                                id='location'
                                onChange={inputChange}>
                                <option value=''>N/A</option>
                                <option value='indoor'>Indoor</option>
                                <option value='Outdoor'>Outdoor</option>
                            </select>
                            {errorState.Location ? <p>{errorState.Location}</p> : null}
                    </label>
                    <label htmlFor='currentAttendeesNo'>
                            Current members:
                        <input
                                type='number'
                                name='currentRegistered'
                                id='currentRegistered'
                                placeholder='0'
                                value={formState.currentRegistered}
                                onChange={roleChange}
                            />
                            {errorState.currentRegistered ? <p>{errorState.currentRegistered}</p> : null}
                    </label>
                    <label htmlFor='maxsize'>
                            Maximum members:
                        <input
                                type='number'
                                name='maxClassSize'
                                id='maxClassSize'
                                placeholder='0'
                                value={formState.maxClassSize}
                                onChange={roleChange}
                            />
                            {errorState.maxClassSize ? <p>{errorState.maxClassSize}</p> : null}
                            
                    </label>
                    <label htmlFor='instructor'>
                            Instructor:
                        <input
                                type='text'
                                name='Instructor'
                                id='Instructor'
                                value={formState.Instructor}
                                onChange={inputChange}
                            />
                            {errorState.Instructor ? <p>{errorState.Instructor}</p> : null}
                            
                    </label>
                    <label htmlFor='gender'>
                           Gender:
                        <input
                                type='text'
                                name='Gender'
                                id='Gender'
                                value={formState.Gender}
                                onChange={inputChange}
                            />
                            {errorState.Gender ? <p>{errorState.Gender}</p> : null}
                            
                    </label>
                    
                </div>
                <button  disabled={isDisabled} onClick={savePost}>Submit</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {

    return {
        formState: state.ClassesReducer.formState


    }
}

export default connect(mapStateToProps, {})(CreateClass);