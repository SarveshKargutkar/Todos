export const todos = (state = [value=' ',completed='false'], action) => {
    // switch (action.type) {
    // case 'ADD_TODO':
    return Object.assign({}, state, {
        todos: [
            ...state.todos,
            {
                text: action.text,
                completed: false
            }
        ]
    })
}
// break;
// case 'CANCEL_TODO':
//     return Object.assign({}, state, {
//         todos: state.todos.filter((todo) => (todo != action.text))
//     })
//     break;
// case 'TOGGLE_TODO':
//     return Object.assign({}, state, {
//         todos: state.todos.map((todo, index) => {
//             if (index === action.index) {
//                 return Object.assign({}, todo, {
//                     completed: !todo.completed
//                 })
//             }
//             return todo
//         })
//     })
//     break;
// default:
//     return state;
// }
// }
export default todos
