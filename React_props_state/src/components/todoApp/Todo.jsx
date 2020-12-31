import React from 'react';
import styles from './todo.css';

const Todo = ({todoData:{id,text,completed},handleChange}) => (
    <div className={styles.todoitem}>
            <input type="checkbox" 
            checked={completed}  
            onChange={()=>handleChange(id)}
            />
            <p className={completed ? styles.checked : ""}>{text}</p>
        </div>
);

export default Todo;