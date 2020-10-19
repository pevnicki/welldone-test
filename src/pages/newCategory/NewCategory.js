import React, {useContext, useState} from 'react'
import {connect} from 'react-redux'
import {createCategory} from '../../redux/actions/actions'
import './newCategory.css'
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

const NewCategory = ({createCategory}) => {

    const inputName = useInputValue('', 'name')
    const alert = useContext(AlertContext)

    const submitHandler = (event) => {
        event.preventDefault()

        const name = inputName.value()

        if (name.trim().length !== 0) {
            const newCategory = {
                name: name
            }
            createCategory(newCategory)
            inputName.clear()
        }
        else{
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
                <button className='btn btn-secondary' type={"submit"}>Create Category</button>
            </form>
        </div>
    );
}


const mapDispatchToProps = {
    createCategory
}

export default connect(null, mapDispatchToProps)(NewCategory)
