import React, { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode"
import {axiosWithAuth} from '../utils/axiosWithAuth'
import EditClasses from './edit-class'
import { connect } from 'react-redux'
import { getClasses } from '../store/actions/index'

function ClassCard(props) {

  const [editing, setEditing] = useState(false)
  const [classToEdit, setClassToEdit] = useState(props)
  const token = localStorage.getItem('token')
  const {authCode} = jwt_decode(token)

  const editClass = id => {
    setEditing(true)
    setClassToEdit(id)
    axiosWithAuth(classToEdit)
      .get('/classes/:classID')
      .then((res) => {
        console.log(res.data.data);
        setClassToEdit(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
    .put(`class.${classToEdit.id}`, classToEdit)
      .then(() => { window.location.reload() })
      .catch(err => console.log(err))
    setEditing(false)
  }
  const deleteClass = e => {
    axiosWithAuth().delete(`/classes/:classID`, classToEdit)
      .then((res) => { window.location.reload() })
      .catch((err) => console.log(err))
  }

  const addClass = e => {
    axiosWithAuth().post('/classes/:classID')
      .then((res) => { window.location.reload() })
      .catch(err => console.log(err))
  }

  const removeClass = e => {
    axiosWithAuth().delete('/classes/:classID')
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


       { authCode === 222 &&< button onClick={e => { editClass() }}> Edit </button>}
      {editing && <EditClasses details={props.details} saveEdit={saveEdit} />}
      
      { authCode === 111 &&<button onClick={e => { addClass() }}>Add Class</button>}
      { authCode === 111 &&<button onClick={e => { removeClass() }}>Remove Class</button>} 
      { authCode === 222 &&<button onClick={e => { deleteClass() }}>Delete</button>}
    </div>
  );
}
const mapStateToProps = state => {
  
  return{
    classes:state.classes,
    isFetching: state.isFetching

  }
}
export default connect(mapStateToProps, {getClasses})(ClassCard)