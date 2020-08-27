import React, {useState, useEffect} from 'react'
import CreateClass from './create-class'
import WorkoutCard from './workout-list'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const IDashboard = () => {
    const [myClasses, setMyClasses] = useState([])
    useEffect(() => {
        axiosWithAuth()
            .get('/classes')
            .then((res) => {
                setMyClasses(res.data.data)
            })
        
    }, [])

    return (
        <div>
           <WorkoutCard />
           <CreateClass />
        </div>
    )
}

export default IDashboard