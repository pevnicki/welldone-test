import React from "react";
import './category.css'

export default ({category,index, active,isChoose}) => {

    const classes = ['list-group-item']
    if (active) {
        classes.push('list-group-item-secondary')
    }else{
        classes.push('todo-list-item')
    }

    return (
        <div key={category.id}>
            <li onClick={()=>isChoose(category.name,category.id)}  className={classes.join(' ')}>
                <strong>{index+1} &nbsp;</strong>
                <span>{category.name}</span>
            </li>
        </div>
    )
}
