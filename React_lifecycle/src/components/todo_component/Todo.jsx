import React from 'react';

const styling = {
        "textDecoration": "line-through red"
}

function Todo ({todoData:{id,title,description,completed},editStatus,handleChange,handleClick}) {
    return(
        <div>
            <input type="checkbox" name="completed" id={title} onChange={handleChange} checked={completed} data-id={id}/>
            <label htmlFor={title}>{title}</label>
            <button onClick={handleClick.bind(null,id,false)} disabled={editStatus}>X</button>
            <button onClick={handleClick.bind(null,id,true)}>Edit</button>
            <p style={completed ? styling : null}>{description}</p>
            <hr />
         </div>
    )
}

export default Todo;
