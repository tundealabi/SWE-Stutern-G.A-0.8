import React from 'react';

function NewTodoForm ({handleSubmit,handleChange,stateTitle,stateDesc}) {
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" value={stateTitle} onChange={handleChange} id="title" />
            <label htmlFor="desc">Description: </label>
            <input type="text" name="description" value={stateDesc} onChange={handleChange} id="desc" />
            <button>Add</button>
            <br />
            <br />
            <br />
            <br />
        </form>
    )
}

export default NewTodoForm;