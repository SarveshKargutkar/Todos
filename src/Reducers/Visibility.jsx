export const Visibility_Filters = (state=[], action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return Object.assign({}, state, {
                Visibility_Filters: [action.filter]
            })
            break;
        default:
            return state;
    }
}
export default Visibility_Filters