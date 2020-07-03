import { createStore } from 'redux';
import { todos } from './todosReducer';


export const store = createStore(todos)