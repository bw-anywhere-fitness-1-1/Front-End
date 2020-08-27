import React from 'react'
import CreateClass from './create-class'
import EditClasses from './edit-class'

const IDashboard = () => {

    return (
        <div>
            <h2>Create A Class</h2>
            <CreateClass />
            <h2>Edit Class</h2>
            <EditClasses />
        </div>
    )
}

export default IDashboard