import React, { useState, useEffect } from 'react'
import ClassCard from './class-card'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const WorkoutCard = () => {
    const [classes, setClasses] = useState([]);
    useEffect(()=> {
        axiosWithAuth()
        .get("/classes")
        .then((res) => {
            setClasses(res.data.data)
        })
        .catch((err) => {
            console.log(err);
        })
    },[])
    return ( 
        <div>
            <h2>Welcome Back</h2>
            <div>
                {classes.map((item) => {
                    return <ClassCard key={item.id} details={item}></ClassCard>;
                })}
            </div>
        </div>
    )
}

export default WorkoutCard