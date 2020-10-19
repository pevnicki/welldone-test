import React, {useContext, useState} from 'react'
import {NavLink} from "react-router-dom"

import './navigation.css'
import {AppContext} from "../../context/app/appContext";
import Controller from "./Controller/Controller";
import {CATEGORY} from "../../const";
import {OUT_CATEGORY} from "../../context/types";

const Navigation = () => {

    const [title, setTitle] = useState(CATEGORY);
    const context = useContext(AppContext)

    const contextHandler = (name)=>{
        context.outCategory({
            id:-1,
            name
        })
    }

    if(context.context.type === OUT_CATEGORY){
        setTitle(context.context.name)
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-light custom-nav-bar">

            <div className="navbar-nav">
                <ul className="navbar-nav">
                    <li onClick={()=>contextHandler(CATEGORY)} className="nav-item active">
                        <NavLink className="nav-link" to="/"
                                 >Categories
                        </NavLink>
                    </li>
                </ul>

                <div className="navbar-brand logo">
                    {title}
                </div>

            </div>

            <Controller/>
        </nav>
    )
}

export default Navigation
