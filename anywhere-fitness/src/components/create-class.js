import React, { useState, useEffect } from 'react'
import * as yup from 'yup'

const formSchema = yup.object().shape({
    classname: yup.string()
        .min(5, 'must include more than 5 characters')
        .required('must include class name'),
    time: yup.string()
        .min(1, 'must include atleast 1 characters')
        .required('Time is required'),
    date: yup.string()
        .required('must select a date'),
    duration: yup.string()
        .required('must select duration'),
    classtype: yup.string()
        .required('must select a type'),
    intensityLevel: yup.string()
        .required('must select an intensity'),
    location: yup.string()
        .required('must select a location'),
    currentAttendeesNo: yup.number()
        .min(1, 'Number must be greater than 0').required(),
    maxsize: yup.number()
        .min(1, 'number must be greater than 0').required(),
})
const CreateClass = (props) => {
    const [isDisabled, setDisabled] = useState(true)
    const [formState, setFormState] = useState({
        classname: '',
        date: '',
        time: '',
        duration: '',
        classtype: '',
        intensityLevel: '',
        location: '',
        currentAttendeesNo: 0,
        maxsize: 0,
    })
    const [errorState, setErrorState] = useState({
        classname: '*',
        date: '*',
        time: '*',
        duration: '*',
        classtype: '*',
        intensityLevel: '*',
        location: '*',
        currentAttendeesNo: '*',
        maxsize: '*',
    })

    const validate = (e) => {
        yup.reach(formSchema, e.target.name).validate(e.target.value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: ''
                })
            }).catch(err => {
                console.log(err.errors)
                setErrorState({
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
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <Form onSubmit={formSubmit}>
                <FormAlign>
                    <HeaderDiv>
                        <h2>Create Class</h2>
                    </HeaderDiv>

                    <label htmlFor='classname'>
                        <SelectContainer>
                            Class name:
                        <Input
                                type='text'
                                name='classname'
                                id='classname'
                                placeholder='Create Class Name'
                                value={formState.classname}
                                onChange={inputChange}
                            />
                            {errorState.classname ? <Error>{errorState.classname}</Error> : null}
                        </SelectContainer>
                    </label>

                    <label htmlFor='date'>
                        <SelectContainer>
                            Date:
                        <Input
                                type='text'
                                name='date'
                                id='date'
                                placeholder='Enter Date'
                                value={formState.date}
                                onChange={inputChange}
                            />
                            {errorState.date ? <Error>{errorState.date}</Error> : null}
                        </SelectContainer>
                    </label>

                    <label htmlFor='time'>
                        <SelectContainer>
                            Time:
                        <Input
                                type='text'
                                name='time'
                                id='time'
                                placeholder='Enter Time'
                                value={formState.time}
                                onChange={inputChange}
                            />
                            {errorState.time ? <Error>{errorState.time}</Error> : null}
                        </SelectContainer>
                    </label>

                    <label htmlFor='duration'>
                        <SelectContainer>
                            Duration:
                        <Select
                                value={formState.duration}
                                name='duration'
                                id='duration'
                                onChange={inputChange}>
                                <option value=''>N/A</option>
                                <option value='.5h'>30 minutes</option>
                                <option value='1h'>1 hour</option>
                                <option value='1.5h'>1 1/5 hours</option>
                                <option value='2h'>2 hours</option>
                            </Select>
                            {errorState.duration ? <Error>{errorState.duration}</Error> : null}
                        </SelectContainer>
                    </label>

                    <label htmlFor='classtype'>
                        <SelectContainer>
                            Type:
                        <Select
                                value={formState.classtype}
                                name='classtype'
                                id='classtype'
                                onChange={inputChange}>
                                <option value=''>N/A</option>
                                <option value='Cardio'>Cardio</option>
                                <option value='Legs'>Legs minutes</option>
                                <option value='Arms'>Arms</option>
                                <option value='Chest'>Chest</option>
                                <option value='Yoga'>Yoga</option>
                                <option value='Zumba'>Zumba</option>
                                <option value='Turbo-Kick'>Turbo-Kick</option>
                            </Select>
                            {errorState.type ? <Error>{errorState.classtype}</Error> : null}
                        </SelectContainer>
                    </label>

                    <label htmlFor='intensityLevel'>
                        <SelectContainer>
                            Intensity:
                        <Select
                                value={formState.intensityLevel}
                                name='intensityLevel'
                                id='intensityLevel'
                                onChange={inputChange}>
                                <option value=''>N/A</option>
                                <option value='easy'>easy</option>
                                <option value='Medium'>Medium</option>
                                <option value='Hard'>Hard</option>
                                <option value='Psycho Path'>Psycho Path</option>
                            </Select>
                            {errorState.intensityLevel ? <Error>{errorState.Intensity}</Error> : null}
                        </SelectContainer>
                    </label>

                    <label htmlFor='location'>
                        <SelectContainer>
                            Location:
                        <Select
                                value={formState.location}
                                name='location'
                                id='location'
                                onChange={inputChange}>
                                <option value=''>N/A</option>
                                <option value='indoor'>Indoor</option>
                                <option value='Outdoor'>Outdoor</option>

                            </Select>
                            {errorState.Location ? <Error>{errorState.Location}</Error> : null}
                        </SelectContainer>
                    </label>

                    <label htmlFor='currentAttendeesNo'>
                        <SelectContainer>
                            Current members:
                        <Input
                                type='number'
                                name='currentAttendeesNo'
                                id='currentAttendeesNo'
                                placeholder='0'
                                value={formState.currentAttendeesNo}
                                onChange={inputChange}
                            />
                            {errorState.currentAttendeesNo ? <Error>{errorState.currentAttendeesNo}</Error> : null}
                        </SelectContainer>
                    </label>

                    <label htmlFor='maxsize'>
                        <SelectContainer>
                            Maximum members:
                        <Input
                                type='number'
                                name='maxsize'
                                id='maxsize'
                                placeholder='0'
                                value={formState.maxsize}
                                onChange={inputChange}
                            />
                            {errorState.maxsize ? <Error>{errorState.maxsize}</Error> : null}
                        </SelectContainer>
                    </label>

                </FormAlign>
                <Button disabled={isDisabled} onClick={() => ToastsStore.success(`Class Created`)}>Submit</Button>
                <ToastsContainer store={ToastsStore} />
            </Form>
        </div>
    )
}

export default CreateClass