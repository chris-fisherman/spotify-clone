/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import SingleItem from './SingleItem';

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  return (
    <div className='item-section'>
      <header className='item-section__header'>
        <h2>Popular {title}</h2>
        <a href={`/${path}`} title={`All ${path}`}>
          <p>Show all</p>
        </a>
      </header>
      <ul className='item-section__list'>
        {itemsArray
          .filter((currentValue, index) => index < items)
          .map((currObject, index) => (
            <SingleItem
              idPath={idPath}
              {...currObject}
              key={`${title}-${index}`}
            />
          ))}
      </ul>
    </div>
  );
};

export default ItemList;
