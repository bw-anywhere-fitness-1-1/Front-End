import React, { useState } from 'react'


const EditClasses = (props) => {
    const [formState, setFormState] = useState({
        id: props.details.id,
        classname: props.details.classname,
        date: props.details.date,
        time: props.details.time,
        duration: props.details.duration,
        classtype: props.details.classtype,
        intensityLevel: props.details.intensityLevel,
        location: props.details.location,
        currentAttendeesNo: props.details.currentAttendeesNo,
        maxsize: props.details.maxsize,
    })

    const inputChange = e => {
        e.persist()
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form >
                <div>
                    <div>
                        <h2>Edit Class</h2>
                    </div>
                    <label htmlFor="classname">
                            Class name:
                        <input
                                type="text"
                                name="classname"
                                id="classname"
                                placeholder="Create Class Name"
                                value={formState.classname}
                                onChange={inputChange}
                            />
                    </label>

                    <label htmlFor="date">
                            Date:
                        <input
                                type="text"
                                name="date"
                                id="date"
                                placeholder="Enter Date"
                                value={formState.date}
                                onChange={inputChange}
                            />
                    </label>
                    <label htmlFor="duration">
                            Duration:
                        <select
                                value={formState.duration}
                                name="duration"
                                id="duration"
                                onChange={inputChange}>
                                <option value="">N/A</option>
                                <option value=".5h">30 minutes</option>
                                <option value="1h">1 hour</option>
                                <option value="1.5h">1 1/5 hours</option>
                                <option value="2h">2 hours</option>
                            </select>
                    </label>
                    <label htmlFor="classtype">
                            Type:
                        <select
                                value={formState.classtype}
                                name="classtype"
                                id="classtype"
                                onChange={inputChange}>
                                <option value="">N/A</option>
                                <option value="Cardio">Cardio</option>
                                <option value="Legs">Legs minutes</option>
                                <option value="Arms">Arms</option>
                                <option value="Chest">Chest</option>
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
                                name="currentAttendeesNo"
                                id="currentAttendeesNo"
                                placeholder="0"
                                value={formState.currentAttendeesNo}
                                onChange={inputChange}
                            />
                    </label>
                    <label htmlFor="maxsize">
                            Maximum:
                        <input
                                type="number"
                                name="maxsize"
                                id="maxsize"
                                placeholder="0"
                                value={formState.maxsize}
                                onChange={inputChange}
                            />
                    </label>
                </div>
                <button disabled={false}>Confirm Edit</button>
                {/* <ToastsContainer store={ToastsStore} /> */}
            </form>

        </div>
    )
}
export default EditClasses