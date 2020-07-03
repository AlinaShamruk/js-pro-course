
const doneChange = (ind) => {
    setToDos(toDos.map((toDo, index) => ind === index ? {...toDo, done: !toDo.done } : toDo))
}

const delChange = (ind) => {
    setToDos(toDos.filter((toDo, index) => ind !== index))
}

const completedTodos = toDos.filter((toDo) => toDo.done)