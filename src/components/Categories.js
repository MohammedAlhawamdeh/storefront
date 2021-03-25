import React from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../store/category'
const Categories = props => {
  return (
    <>
      <div className="box">
        <h2 className="header">
          Browse Our Categories
      </h2>
        <div>
          {props.categories.map(category => (
            <button key={category.name} onClick={() => props.changeActiveCategory(category.name)}>
              {props.active === category.name}
              {category.displayName}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = store => ({
  categories: store.categoryReducer.categories,
  active: store.categoryReducer.activeCategory,
})

const mapDispatchToProps = { changeActiveCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);