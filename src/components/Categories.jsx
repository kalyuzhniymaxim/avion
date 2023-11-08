import React from 'react'
function Categories() {
  const categories =['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
  const [activeIndex, setActivIndex] = React.useState(0)
  const onClicCategory = (index) =>{
    setActivIndex(index)
  }
  return (
    <div className="categories">
      <ul>
     { categories.map((value,index) => (
      <li onClick={() => onClicCategory(index)} className={activeIndex === index ? 'active' : ''}>{value}</li>
     ))}
        
      </ul>
    </div>
  );
}

export default Categories
