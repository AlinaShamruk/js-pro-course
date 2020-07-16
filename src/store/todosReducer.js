const initialState = { list: [{ text: 'one', done: false, del: false }, { text: 'two', done: true, del: true }] };

export const todos = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return { list: [...state.list, action.todo] };
        case 'COMPLETE_TODO':
            return { list: state.list.map((toDo, index) => index === action.index ? {...toDo, done: !toDo.done } : toDo) }
        case 'DELETE_TODO':
            return { list: state.list.filter((toDo, index) => action.index !== index) }
        default:
            return state
    }


}