import React, {useState} from 'react'
import "./style.css"
import menu from "./menuApi"
import MenuCard from './MenuCard';

const Restaurant = () => {
  const [menuData,setmenuData] = useState(menu);

const filterItem = (category) =>{
  const updatedList = menu.filter((curElem)=>{
    return curElem.category === category;
  });
  setmenuData(updatedList);
};

  return (
    <>
    <nav className='navbar'>
      <div className='btn-group'>
        <button className='btn-group__item' onClick={() => filterItem("breakfast")}>Breakfast</button>
        <button className='btn-group__item' onClick={() => filterItem("lunch")}>Lunch</button>
        <button className='btn-group__item' onClick={() => filterItem("evening")}>Evening</button>
        <button className='btn-group__item' onClick={() => filterItem("dinner")}>Dinner</button>
        <button className='btn-group__item' onClick={() =>setmenuData(menu)}>All</button>
      </div>
    </nav>


     <MenuCard menuData={menuData}/>
    </>
  );
};

export default Restaurant;