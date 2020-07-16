import React from 'react';
import { ToDos } from './components/ToDos';
import { AddToDo } from './components/AddToDo';
import { BrowserRouter, Route } from "react-router-dom";
import { Nav } from './components/Nav';
import { connect } from 'react-redux';
import { completedTodos } from './store/selectors';


const AppComponent = ({ todos, addToDo, completedTodos, doneChange, delChange }) => {

    return (

        <BrowserRouter>
            <Nav></Nav>
            <ToDos toDos={todos} doneChange={doneChange} delChange={delChange} ></ToDos>
            <AddToDo addItem={(item) => addToDo({ text: item, done: false, del: false })}></AddToDo>
            <Route path="/active" render={() => <ToDos toDos={completedTodos} doneChange={() => { }} delChange={() => { }} />}></Route>
            <Route path="/complete"></Route>
            {/* <Route path="/delete" render={() => <ToDos toDos={toDos} doneChange={doneChange} delChange={delChange} ></ToDos>}></Route> */}
        </BrowserRouter>
    )
};

// const completedTodos = todos.filter((toDo) => toDo.done)

const mapDispatchToProps = (dispatch) => ({ addToDo: (todo) => dispatch({ type: 'ADD_TODO', todo }), doneChange: (index) => dispatch({ type: 'COMPLETE_TODO', index }), delChange: (index) => dispatch({ type: 'DELETE_TODO', index }) })
const mapStateToProps = (state) => ({ todos: state.list, completedTodos: completedTodos(state) });
export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)

