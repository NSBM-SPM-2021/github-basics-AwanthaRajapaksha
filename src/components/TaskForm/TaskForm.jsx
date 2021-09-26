import React, { useState } from 'react';
import {useFormik} from 'formik';
import axios from 'axios';
import { v4 as uuid4} from 'uuid';
import {Link} from 'react-router-dom';

function TaskForm() {

  const [message, setMessage] = useState('');

  const initialValues = {
      title : '',
      description: '',
      dueDate: '',
      sex : '',
      age: '',
      address: '',
      district : '',
      moh: '',
      mphone: '',
      nic : '',
      designation: '',
      Allergies: '',
  };

  const onSubmit =(values,{resetForm}) => {

    const taskid = uuid4();
    const apiUrl =`https://reacttaskmanager-1bb4a-default-rtdb.firebaseio.com/tasks/${taskid}.json`;
    const task = {...values, states : 'New', createdDate: new Date(), id: taskid,};

    axios.put(apiUrl, task).then((response)=>{
      if (response.status === 200){
        setMessage('Task has bee saved');
        resetForm({ values : ''});
      }
    })
    .catch((error) => {
      setMessage ('There was an error while saving data');
    });

  };
  const validate= (values) =>{
    let errors = {};
      if (!values.title){
        errors.title =" Title cannot be blank";
      }
      if (!values.description){
        errors.description ="You must enter description";
      }
      if (!values.dueDate){
        errors.dueDate =" DueDate cannot be blank";
      }
      if (!values.sex){
        errors.sex =" sex cannot be blank";
      }
      if (!values.age){
        errors.age ="You must enter age";
      }
      if (!values.address){
        errors.address =" address cannot be blank";
      }
      if (!values.district){
        errors.district =" district cannot be blank";
      }
      if (!values.moh){
        errors.moh ="You must enter moh";
      }
      if (!values.mphone){
        errors.mphone =" mphone cannot be blank";
      }
      if (!values.nic){
        errors.nic =" nic cannot be blank";
      }
      if (!values.designation){
        errors.designation ="You must enter designation";
      }
      if (!values.Allergies){
        errors.Allergies =" Allergies cannot be blank";
      }
      return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <div className="container col-sm-6 mt-4">
      <h4 className="mb-4">Add Genaral Information</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label for="title">Name</label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value = {formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? <div className="small text-danger">{ formik.errors.title}</div>: null}
        </div>
        <div className="form-group">
          <label for="sex">Sex</label>
          <input
            type="text"
            className="form-control"
            id="sex"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value = {formik.values.sex}
          />
          {formik.touched.sex && formik.errors.sex ? <div className="small text-danger">{ formik.errors.sex}</div>: null}
        </div>
        <div className="form-group">
          <label for="age">Age</label>
          <input
            type="text"
            className="form-control"
            id="age"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value = {formik.values.age}
          />
          {formik.touched.age && formik.errors.age ? <div className="small text-danger">{ formik.errors.age}</div>: null}
        </div>
        <div className="form-group">
          <label for="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value = {formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? <div className="small text-danger">{ formik.errors.address}</div>: null}
        </div>
        <div className="form-group">
          <label for="district">District</label>
          <input
            type="text"
            className="form-control"
            id="district"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value = {formik.values.district}
          />
          {formik.touched.district && formik.errors.district ? <div className="small text-danger">{ formik.errors.district}</div>: null}
        </div>
        <div className="form-group">
          <label for="moh">MOH Area</label>
          <input
            type="text"
            className="form-control"
            id="moh"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value = {formik.values.moh}
          />
          {formik.touched.moh && formik.errors.moh ? <div className="small text-danger">{ formik.errors.moh}</div>: null}
        </div>
        <div className="form-group">
          <label for="mphone">phone (Mobile)</label>
          <input
            type="text"
            className="form-control"
            id="mphone"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value = {formik.values.mphone}
          />
          {formik.touched.mphone && formik.errors.mphone ? <div className="small text-danger">{ formik.errors.mphone}</div>: null}
        </div>
        <div className="form-group">
          <label for="nic">NIC Number</label>
          <input
            type="text"
            className="form-control"
            id="nic"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value = {formik.values.nic}
          />
          {formik.touched.nic && formik.errors.nic ? <div className="small text-danger">{ formik.errors.nic}</div>: null}
        </div>
        <div className="form-group">
          <label for="designation">Designation</label>
          <input
            type="text"
            className="form-control"
            id="designation"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value = {formik.values.designation}
          />
          {formik.touched.designation && formik.errors.designation ? <div className="small text-danger">{ formik.errors.designation}</div>: null}
        </div>
        <div className="form-group">
          <label for="Allergies">Allergies (Yes/No)</label>
          <input
            type="text"
            className="form-control"
            id="Allergies"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value = {formik.values.Allergies}
          />
          {formik.touched.Allergies && formik.errors.Allergies ? <div className="small text-danger">{ formik.errors.Allergies}</div>: null}
        </div>
        <div className="form-group">
          <label for="description">Allergies Description</label>
          <textarea
            rows="4"
            type="text"
            className="form-control"
            id="description"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value = {formik.values.description}
          />
           {formik.touched.description && formik.errors.description ? <div className="small text-danger">{ formik.errors.description}</div>: null}
        </div>
        <div className="form-group">
          <label for="dueDate">Due Date</label>
          <input
            type="Date"
            className="form-control"
            id="dueDate"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value = {formik.values.dueDate}
          />
           {formik.touched.dueDate && formik.errors.dueDate ? <div className="small text-danger">{ formik.errors.dueDate}</div>: null}
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      {message ? <div className="alert alert-primary mt-4">{message} -  Click Here To See
      <Link to="/"> all task </Link>
       </div> : null}
    </div>
  );
}

export default TaskForm;
