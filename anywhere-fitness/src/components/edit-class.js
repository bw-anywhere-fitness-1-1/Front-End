import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useParams, useHistory } from 'react-router-dom'
// make a get request to /classes/:classID
// setFormState() w/ the object you get as a response
// setFormState({id: res.data.id, name: res.data.name ...})

const initialForm = {
    
    name: '',
    classDate: '',
    startTime: '',
    duration: '',
    type: '',
    intensityLevel: '',
    location: '',
    currentRegistered: 0,
    maxClassSize: 0,
    instructor: ''
}

const EditClasses = (props) => {
    const id = useParams().id
    const history = useHistory()
    const [formState, setFormState] = useState(initialForm)
    const [editing, setEditing] = useState(false)

    const inputChange = e => {
        e.persist()
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }



    const submitForm = e => {
        if(editing) {
            axiosWithAuth()
            .put(`/classes/${id}`, formState)
            .then((res => {
                setEditing(false)
                //history.push('/instructor-dashboard')
            }
            ))
            .catch(err=> console.log(err))
        } else {
            axiosWithAuth()
            .post(`/classes/${id}`, formState)
            .then((res => {
                console.log(res)
            }))
           .catch(err=> console.log(err))
        }
        history.push('/instructor-dashboard')
    }

    useEffect(()=> {
    
        axiosWithAuth()
        .get(`/classes/${id}`)
        .then(res => {
            console.log(res.data.data)
            setFormState(res.data.data)
            setEditing(true)
        })
        .catch(err=>console.log(err))

        // axiosWithAuth.get('clases/:classID')
        // response --> {id, name, date, time ....}
        // .then(res => setFormState({id: res.id, name: res.name....}))
    }, [])



    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <div>
                        <h2>Edit Class</h2>
                    </div>
                    <label htmlFor="classname">
                            Class name:
                        <input
                                type="text"
                                name="name"
                                id="classname"
                                placeholder="Create Class Name"
                                value={formState.name}
                                onChange={inputChange}
                            />
                    </label>

                    <label htmlFor="date">
                            Date:
                        <input
                                type="text"
                                name="classDate"
                                id="date"
                                placeholder="Enter Date"
                                value={formState.classDate}
                                onChange={inputChange}
                            />
                    </label>
                    <label htmlFor="duration">
                            Duration:
                            <input
                                type="text"
                                name="duration"
                                id="date"
                                placeholder="Class Duration"
                                value={formState.duration}
                                onChange={inputChange}
                            />
                       
                    </label>
                    <label htmlFor="classtype">
                            Type:
                        <select
                                value={formState.type}
                                name="type"
                                id="classtype"
                                onChange={inputChange}>
                                <option value="">N/A</option>
                                <option value="cardio">Cardio</option>
                                <option value="legs">Legs minutes</option>
                                <option value="arms">Arms</option>
                                <option value="weightlifting">Strength</option>
                                <option value="Yoga">Yoga</option>
                                <option value="Zumba">Zumba</option>
                                <option value="Turbo-Kick">Turbo-Kick</option>
                            </select>
                    </label>
                    <label htmlFor="intensityLevel">
                            Intensity:
                        <select
                                value={formState.intensityLevel}
                                name="intensityLevel"
                                id="intensityLevel"
                                onChange={inputChange}>
                                <option value="">N/A</option>
                                <option value="Beginner">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                                <option value="Psychopath">Psychopath</option>
                            </select>
                    </label>
                    <label htmlFor="location">
                            Location:
                        <select
                                value={formState.location}
                                name="location"
                                id="location"
                                onChange={inputChange}>
                                <option value="">N/A</option>
                                <option value="Anywhere Fitness">Anywhere Fitness</option>
                                <option value="Somewhere Else">Somewhere Else</option>

                            </select>
                    </label>
                    <label htmlFor="currentAttendeesNo">
                            Current:
                        <input
                                type="number"
                                name="currentRegistered"
                                id="currentAttendeesNo"
                                placeholder="0"
                                value={formState.currentRegistered}
                                onChange={inputChange}
                            />
                    </label>
                    <label htmlFor="maxsize">
                            Maximum:
                        <input
                                type="number"
                                name="maxClassSize"
                                id="maxsize"
                                placeholder="0"
                                value={formState.maxClassSize}
                                onChange={inputChange}
                            />
                    </label>
                </div>
                <button disabled={false} type="submit">Confirm Edit</button>
                {/* <ToastsContainer store={ToastsStore} /> */}
            </form>

        </div>
    )
}
export default EditClasses