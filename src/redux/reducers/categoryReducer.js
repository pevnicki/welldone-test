import {CREATE_CATEGORY, DELETE_CATEGORY, GET_CATEGORY, UPDATE_CATEGORY} from "../types";

const init = {
    categories: [],
    loading: true
}
export const categoryReducer = (state = init, action) => {
    switch (action.type) {
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter((category) => {
                    return category.id !== action.payload})
            }
        case CREATE_CATEGORY:
            return {...state, categories: [...state.categories, action.payload]}
        case GET_CATEGORY:
            return {...state, categories: action.payload}
        case UPDATE_CATEGORY:
            return {
                ...state,
                categories: state.categories.map(category => category.id === action.payload.id ? {
                    ...category,
                    name: action.payload.name
                } : category)
            }
        default:
            return state
    }
}
