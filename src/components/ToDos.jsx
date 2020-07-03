import React from "react";
import { ToDoItem } from "./ToDoItem";


export const ToDos = ({ toDos, doneChange, delChange }) => {

    return (
        <ul>
            {toDos.map((toDo, index) => <ToDoItem text={toDo.text} done={toDo.done} doneChange={() => doneChange(index)} del={toDo.del} delChange={() => delChange(index)} />)}
        </ul>
    )
}