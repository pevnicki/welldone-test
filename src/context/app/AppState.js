import React, {useReducer} from "react"
import {appReducer} from "./appReducer";
import {IN_CATEGORY, OUT_CATEGORY} from "../types";
import {AppContext} from "./appContext";
import {CATEGORY} from "../../const";


export const AppState = ({children}) => {

    const initialState = {
        type: OUT_CATEGORY,
        context: {
            id:-1,
            name:CATEGORY
        },
    }
    const [state, dispatch] = useReducer(appReducer, initialState)


    const inCategory = (context) => {
        dispatch({
            type: IN_CATEGORY,
            payload: context
        })
    }

    const outCategory = (context) => {
        dispatch({
            type: OUT_CATEGORY,
            payload: context
        })
    }


    return (
        <AppContext.Provider
            value={{
                inCategory,
                outCategory,
                context: state.context,
                type:state.type

            }}
        >
            {children}
        </AppContext.Provider>
    )
}
