import React, {useContext} from 'react'
import {AppContext} from "../../context/app/appContext"
import {useHistory} from "react-router-dom";
import './view.css'

const View = () => {
    const appContext = useContext(AppContext)
    const history = useHistory();
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Category properties</h5>
                <p className="card-text">{appContext.context.name}</p>
                <button onClick={()=>history.push('/')} type="button" className="btn btn-link">Back to list</button>
            </div>
        </div>
    );
}
export default View
