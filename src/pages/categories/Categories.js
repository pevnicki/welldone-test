import React, {useContext, useEffect, useState} from 'react'
import {connect} from 'react-redux'
import Category from "./category/Category";
import {fetchCategory} from "../../redux/actions/actions";
import './categories.css'
import {AppContext} from "../../context/app/appContext";


const Categories = ({fetchCategory, categories}) => {

    const [active, setActive] = useState()
    const appContext = useContext(AppContext)

    useEffect(() => {
        fetchCategory()
    })

    if (!categories.length) {
        return <p className='text-center'>No categories</p>
    }

    const activeHandler = (name, id) => {
        appContext.inCategory({id, name})
        setActive(id)
    }

    const renderLi = categories.map((category, index) => {
        return (<Category
            key={category.id}
            category={category}
            index={index}
            active={category.id === active}
            isChoose={activeHandler}
        />)
    })


    return (
        <div className={'category'}>
            <ul className="list-group todo-list category-list">
                {renderLi}
            </ul>
        </div>
    )
}


const mapDispatchToProps = {
    fetchCategory
}

const mapStateToProps = state => ({
    categories: state.category.categories
})
export default connect(mapStateToProps, mapDispatchToProps)(Categories)
