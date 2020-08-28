import React, { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode"
import {axiosWithAuth} from '../utils/axiosWithAuth'
import EditClasses from './edit-class'
import { connect } from 'react-redux'
import { getClasses } from '../store/actions/index'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

function ClassCard(props) {
  const id = useParams().id
  console.log(props)
  
  const [classToEdit, setClassToEdit] = useState(props)
  const token = localStorage.getItem('token')
  const {authCode} = jwt_decode(token)

  // const editClass = () => {
  //   setEditing(true)
  //   axiosWithAuth()
  //     .put(`/classes/${id}`, classToEdit)
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setClassToEdit(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const saveEdit = e => {
  //   e.preventDefault();
    
  //   axiosWithAuth()
  //   .put(`/classes/${classToEdit.id}`, classToEdit)
  //     .then(() => { window.location.reload() })
  //     .catch(err => console.log(err))
  //   setEditing(false)
  
  // }
  
  const deleteClass = (id) => {
    axiosWithAuth().delete(`/classes/${id}`)
      .then((res) => { window.location.reload() })
      .catch((err) => console.log(err))
  }

  const addClass = e => {
    axiosWithAuth().post('/classes')
      .then((res) => { window.location.reload() })
      .catch(err => console.log(err))
  }

  const removeClass = id => {
    axiosWithAuth().delete(`/classes/${id}`)
      .then((res) => { window.location.reload() })
      .catch(err => console.log(err))
  }
 
    return (
      
    <div>
      <h3>Class Name: {props.details.name}</h3>
      <p>Location: {props.details.location}</p>
      <p>Date: {props.details.classDate}</p>
      <p>Time: {props.details.startTime}</p>
      <p>Class Type: {props.details.type}</p>
      <p>Duration: {props.details.duration}</p>
      <p>IntensityLevel: {props.details.level_name}</p>
      <p>Current Attendees Number: {props.details.currentRegistered}</p>
      <p>Max Size: {props.details.maxClassSize}</p>
      <p>Instuctor: {props.details.Instructor}</p> 


       { authCode === 222 || authCode==='' ?
      <Link to = {`/edit-class/${props.details.id}`}>
          <button> Edit </button>
       </Link> : null
       }
      {/* {editing && <EditClasses details={props.details} saveEdit={saveEdit} />} */}
      
      { authCode === 111 &&<button onClick={e => { addClass(id) }}>Add Class</button>}
      { authCode === 111 &&<button onClick={e => removeClass(id) }>Remove Class</button>} 
      { authCode === '' &&<button onClick={e => { deleteClass(props.details.id) }}>Delete</button>}
    </div>
  );
}
// const mapStateToProps = state => {
  
//   return{
//     classes:state.classes,
//     isFetching: state.isFetching

//   }
// }
// export default connect(mapStateToProps, {getClasses})(ClassCard)
export default ClassCard