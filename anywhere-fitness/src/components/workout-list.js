import React { useState} from 'react'
import CreateClass from './create-class'
import ClassCard from ''

const WorkoutCard = () => {
    const [classes, setClasses] = useState([]);
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