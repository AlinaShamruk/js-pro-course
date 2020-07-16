export const completedTodos = (state) => {
    return state.list.filter((toDo) => toDo.done)
}