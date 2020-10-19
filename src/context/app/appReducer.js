import {IN_CATEGORY, OUT_CATEGORY} from "../types";

const handlers = {

    [IN_CATEGORY]: (state, {payload}) => ({...state, context: payload, type: IN_CATEGORY}),

    [OUT_CATEGORY]: (state, {payload}) => ({...state, context: payload, type: OUT_CATEGORY}),

    DEFAULT: state => state
}

export const appReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}
