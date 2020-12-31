import { GET_TODO, ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO, EDITING } from './actionTypes';

export const getTodos = () => {
   return {
       type: GET_TODO
   }
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const editTodo = (todo) => {
    return {
        type: EDIT_TODO,
        payload: todo
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        id
    }
}

export const editing = (editState) => {
    return {
        type: EDITING,
        payload: editState
    }
}