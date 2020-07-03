import React from 'react';
import { ToDos } from './components/ToDos';
import { AddToDo } from './components/AddToDo';
import { BrowserRouter, Route } from "react-router-dom";
import { Nav } from './components/Nav';
import { connect } from 'react-redux';



const AppComponent = ({ todos, addToDo }) => {
    return (
        <BrowserRouter>
            <Nav></Nav>
            <ToDos toDos={todos} doneChange={() => { }} delChange={() => { }} ></ToDos>
            <AddToDo addItem={(item) => addToDo({ text: item, done: false, del: false })}></AddToDo>
            {/* <Route path="/add" render={() => <AddToDo addItem={(item) => addToDo({ text: item })}></AddToDo>} ></Route>
            <Route path="/complete" render={() => <ToDos toDos={completedTodos} doneChange={doneChange} delChange={delChange}></ToDos>}></Route>
            <Route path="/delete" render={() => <ToDos toDos={toDos} doneChange={doneChange} delChange={delChange} ></ToDos>}></Route> */}
        </BrowserRouter>
    )
};
const mapDispatchToProps = (dispatch) => ({ addToDo: (todo) => dispatch({ type: 'ADD_TODO', todo }) })
const mapStateToProps = (state) => ({ todos: state.list });
export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)

