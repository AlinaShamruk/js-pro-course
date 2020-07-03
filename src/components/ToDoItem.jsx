import React from "react";

export const ToDoItem = ({ text, done, doneChange, delChange }) => {

    return <li>
        <input type="checkbox" checked={done} onChange={doneChange} />
        {text}
        <button onClick={delChange}>x</button>
    </li>
}