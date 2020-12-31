import { GET_TODO, ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO, EDITING } from './actionTypes';
import { getTodosLs, toggleTodoLs, removeTodoLs, addTodoLs, editTodoLs, editStatus } from './selectors';

const DEFAULT_STATE = {
    todos: [],
    editing: {status:false,id:""}
}

const rootReducer = (state=DEFAULT_STATE,action) => {
    switch(action.type){
        case GET_TODO:
            return getTodosLs(state);
        case TOGGLE_TODO:
            return toggleTodoLs(state,action.id);
        case ADD_TODO:
            return addTodoLs(state,action.payload);
        case EDIT_TODO:
            return editTodoLs(state,action.payload);
        case REMOVE_TODO:
            return removeTodoLs(state,action.id);
        case EDITING:
            return editStatus(state,action.payload);
        default:
            return state;
    }
}

export default rootReducer;