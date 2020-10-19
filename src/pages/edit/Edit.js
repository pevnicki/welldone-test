import React, {useContext, useState} from 'react'
import {useDispatch} from 'react-redux'
import {updateCategory} from '../../redux/actions/actions'
import './edit.css'
import {AppContext} from "../../context/app/appContext";
import {AlertContext} from "../../context/alert/alertContext";

//Custom hook
function useInputValue(defaultValue = '', id, type = 'text') {

    const [value, setValue] = useState(defaultValue)
    return {
        bind: {
            type,
            id,
            className: "form-control",
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

const Edit = () => {

    const appContext = useContext(AppContext)
    const inputName = useInputValue(appContext.context.name, 'name')
    const alert = useContext(AlertContext)

    const dispatch = useDispatch()


    const submitHandler = (event) => {
        event.preventDefault()

        const name = inputName.value()

        if (name.trim().length !== 0) {
            const newCategory = {
                name: name,
                id:appContext.context.id
            }
            dispatch(updateCategory(newCategory))
            inputName.clear();
        }else{
            alert.show('The field can not be empty', 'danger')
        }
    }

    return (
        <div className={'container'}>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Category</label>
                    <input {...inputName.bind}></input>
                </div>
                <button className='btn btn-secondary' type={"submit"}>Update Category</button>
            </form>
        </div>
    );
}


// const mapDispatchToProps = {
//     updateCategory
// }

export default Edit
