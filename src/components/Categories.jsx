import React from 'react';
function Categories({value, onChangeCategory}) {
  const categories = ['Все', 'Диваны', 'Стулья', 'Столы', 'Шкафы', 'Кресло'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
