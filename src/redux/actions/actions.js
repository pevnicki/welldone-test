import {CREATE_CATEGORY, DELETE_CATEGORY, GET_CATEGORY, UPDATE_CATEGORY} from "../types";
import axios from '../../axios/axios-locations'

export function createCategory(category) {
    return async dispatch => {
        try {
            const res = await axios.post(`/categories.json`, category)
            const payload = {
                ...category,
                id: res.data.name
            }
            dispatch({
                type: CREATE_CATEGORY,
                payload
            })
        } catch (e) {
            throw new Error(e.message)
        }
    }
}

export function fetchCategory() {
    return async dispatch => {
        try {
            const res = await axios.get(`/categories.json`)
            const payload = res.data === null ? [] : Object.keys(res.data).map(key => {
                return {
                    ...res.data[key],
                    id: key
                }
            })
            dispatch({
                type: GET_CATEGORY,
                payload
            })
        } catch (e) {
            throw new Error(e.message)
        }
    }
}


export function deleteCategory(id) {
    return async dispatch => {
        try {
            await axios.delete(`/categories/${id}.json`)
            dispatch({
                type: DELETE_CATEGORY,
                payload: id
            })
        } catch (e) {
            throw new Error(e.message)
        }
    }
}

export function updateCategory({id, name}) {
    const newCategory = {name:name}
    return async dispatch => {
        try {
            await axios.put(`/categories/${id}.json`, newCategory)
            const payload = {
                id,
                name
            }
            dispatch({
                type: UPDATE_CATEGORY,
                payload
            })
        } catch (e) {
            throw new Error(e.message)
        }
    }
}

