import React, { useState } from 'react'
import './CategoryTabs.css'
import { developerInfo } from '../Dashboard/Dashboard'

const CategoryTabs = () => {
  const categories = developerInfo.categories
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const handleCategoryClick = (category) => {
    setActiveCategory(category)
  }

  return (
    <div className="bodyWrapper">
      <ul
        className="navbar"
        style={{ display: 'flex', listStyle: 'none', padding: 0 }}
      >
        {categories.map((category, index) => (
          <div
            className="categoryItemView"
            key={index}
            style={{
              borderColor:
                activeCategory.title === category.title ? '#E0D48E' : '#3c3c3c',
            }}
            onClick={() => handleCategoryClick(category)}
          >
            <img
              className="categoryImage"
              src={
                activeCategory.title === category.title
                  ? category.activeImage
                  : category.inactiveImage
              }
              alt="CategoryTabs"
            />
            <span
              className="categoryTitle"
              style={{
                color:
                  activeCategory.title === category.title ? 'white' : '#3c3c3c',
              }}
            >
              {category.title}
            </span>
          </div>
        ))}
      </ul>

      <div>{React.createElement(activeCategory.componentName)}</div>
    </div>
  )
}

export default CategoryTabs
