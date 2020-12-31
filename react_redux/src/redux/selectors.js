//ls -- localstorage

export const getTodosLs = (reduxState) => {
    let todos = JSON.parse(localStorage.getItem("TODOS")) || [];
    return {
        ...reduxState,
        todos 
    };
};

export const toggleTodoLs = (reduxState,id) => {
    const todos = reduxState.todos.map(todo => {
        if(todo.id === id){
            todo.completed = !todo.completed;
        }
        return todo;
    });
    return {
        ...reduxState,
        todos
    };
};

export const removeTodoLs = (reduxState,id) => {
    const todos = reduxState.todos.filter(todo => todo.id !== id);
    return {
        ...reduxState,
        todos
    };
};

export const addTodoLs = (reduxState,data) => {
    return {
        ...reduxState,
        todos: [...reduxState.todos, data]
    };
};

export const editTodoLs = (reduxState,data) => {
    const todos = reduxState.todos.map(todo => {
        if(todo.id === data.id){
            todo.title = data.title;
            todo.description = data.description;
        }
        return todo;
    });
    return {
        ...reduxState,
        editing:{
            status: false,
            id: ""
        },
        todos
    };
};

export const editStatus = (reduxState,data) => {
    return {
        ...reduxState,
        editing: data
    }
}