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
      return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <div className="container col-sm-8 mt-4">
      <h4 className="mb-4">Add/Edit Task</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label for="title">Title</label>
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
          <label for="description">Description</label>
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
            type="text"
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
