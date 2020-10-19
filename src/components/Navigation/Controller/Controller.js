import React, {useContext} from 'react'
import {AppContext} from "../../../context/app/appContext";
import {IN_CATEGORY, OUT_CATEGORY} from "../../../context/types";
import {CATEGORY, NEW_CATEGORY} from "../../../const";
import {useHistory} from "react-router-dom";
import {connect} from 'react-redux'
import {deleteCategory} from "../../../redux/actions/actions";

const Controller = ({deleteCategory}) => {

    const appContext = useContext(AppContext)
    const history = useHistory();

    if (appContext.type === OUT_CATEGORY && appContext.context.name === NEW_CATEGORY) {
        return null
    }

    if (appContext.type === OUT_CATEGORY && appContext.context.name === CATEGORY) {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" onClick={() => history.push('/new')} className="btn">New Category</button>
            </div>
        )
    }

    if (appContext.type === IN_CATEGORY) {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" onClick={()=>deleteCategory(appContext.context.id)} className="btn">Delete</button>
                <button type="button" onClick={() => history.push('/edit')} className="btn">Edit</button>
                <button onClick={() => history.push('/view')} type="button" className="btn">View</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    deleteCategory
}


export default connect(null, mapDispatchToProps)(Controller)
