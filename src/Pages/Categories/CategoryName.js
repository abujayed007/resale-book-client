import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

const CategoryName = () => {
    const [CategoryName, SetCategoryName] = useState([])
    useEffect(()=>{
        fetch('https://resale-market-assaignment-server.vercel.app/categories')
        .then(res => res.json())
        .then(data => {
            SetCategoryName(data)
        })
    },[])
    
    return (
        <div>
            {
                CategoryName.map(category => <Categories key={category._id} category={category}></Categories>)
            }
        </div>
    );
};

export default CategoryName;