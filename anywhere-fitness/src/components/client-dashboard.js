import React from 'react'
import ClassCard from './class-card'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getClasses, GET_CLASSES_SUCCESS } from '../store/actions/index'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const CDashboard = () => {
    const classes = useSelector(state => state.ClassesReducer.classes || [])
    const dispatch = useDispatch()
    // React.useEffect(()=> {
    //     getClasses()
    // }, [])
    React.useEffect(() => {
        axiosWithAuth()
            .get('/classes')
            .then((res) => {
   
                // setMyClasses(res.data.data)
                dispatch({type: GET_CLASSES_SUCCESS, payload: res.data.data})
            })
    }, [])
    console.log(classes)
    return (
        <div>
            <h1>Today's Classes</h1> 
            {classes.map((item) => {
                    return (
                        <>
                        <ClassCard key={item.id} details={item} />
                        </>
                        )
            })}
        </div>
    )
}
const mapStateToProps = state => {
    return {

    }
}
export default connect(mapStateToProps,{getClasses})(CDashboard)