import React, { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import TaskItem from './TaskItem';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskUpdated, setTaskUpdated] = useState(false);

  useEffect(() =>{
    const apiUrl = 'https://reacttaskmanager-1bb4a-default-rtdb.firebaseio.com/tasks.json';
    axios.get(apiUrl).then(response => {
      if(response.data){
       setTasks(Object.values(response.data));
      }
    });
  },[taskUpdated]);

  const handleComplete = (taskid) => {
    const apiUrl =`https://reacttaskmanager-1bb4a-default-rtdb.firebaseio.com/tasks/${taskid}.json`;
    axios.patch(apiUrl,{status:'Completed'}).then((response) => {
      setTaskUpdated(!taskUpdated);
    });
  };

  const handleDelete = (taskid) => {
    const apiUrl =`https://reacttaskmanager-1bb4a-default-rtdb.firebaseio.com/tasks/${taskid}.json`;
    axios.delete(apiUrl).then((response) => {
      setTaskUpdated(!taskUpdated);
    });
  };

  const displayTasks = () => {
    return tasks.map((task) => {
      return <TaskItem key={task.id} taskInfo={task} onComplete={handleComplete} onDelete={handleDelete} />;
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">{displayTasks()}</div>
    </div>
  );
}

export default TodoList;
