import React from 'react';

function TaskItem(props) {
  const borderColor =
   props.taskInfo.status === 'Completed' ? 'border-success' : '';
  return (
    <div className="row" >
    <div className="col ml-2 mb-2">
      <div className={'card border ' + borderColor}>
        <div className="card-header">
        
            <span className="card-title">{props.taskInfo.title}</span>
          <br />
          <span className="budge badge-pill badge-primary">
            {props.taskInfo.createdDate}
          </span>
        </div>
        <div className="card-body d-flex flex-column">
        <p className="card-text">{props.taskInfo.description}</p>
        <div className="mt-auto text-right">
        <button className="btn btn-success btn-sm mr-2" onClick={()=>props.onComplete(props.taskInfo.id)} >
          Complete
        </button>
        <button className="btn btn-danger btn-sm " onClick={() => props.onDelete(props.taskInfo.id)}>
          Delete
        </button>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default TaskItem;
