import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({category, i}) => {
    const {name,  category_id } = category;

    return (
      <div>
        <Link to={`category/${category_id}`} class="text-2xl text-blue-400 hover:text-orange-200"> {name}</Link>
      </div>
    );
};

export default Categories;