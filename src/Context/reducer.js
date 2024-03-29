import { ADD_TODO, REMOVE_TODO } from "./action.types";

export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return[...state, action.payload];
            break;
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload)
            break;
        default:
            return state;
            break;
    }
}