import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({category}) => {
    const {category_name} = category;

    return (
      <div>
        <Link to={`category/${category_name}`} className="text-2xl font-bold font-serif text-black hover:text-orange-200"> {category_name}</Link>
      </div>
    );
};

export default Categories;