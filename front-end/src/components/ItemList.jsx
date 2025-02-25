/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import SingleItem from './SingleItem';
import { Link, useLocation } from 'react-router-dom';

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const finalItems = isHome ? items : Infinity;
  const listClassName = isHome ? <></> : 'bigger-items';
  const listMobileClassName = isHome ? <></> : 'bigger-list-mobile';
  return (
    <div className='item-section'>
      <header className='item-section__header'>
        {isHome ? (
          <Link to={`/${path}`} className='item-section__header-title'>
            Popular {title}
          </Link>
        ) : (
          <h2 className='item-section__header-title--bigger'>
            Popular {title}
          </h2>
        )}

        {isHome ? (
          <Link to={`/${path}`} title={`All ${path}`}>
            <p>Show all</p>
          </Link>
        ) : (
          <></>
        )}
      </header>
      <ul
        className={`item-section__list ${listClassName} ${listMobileClassName}`}
      >
        {itemsArray
          .filter((currentValue, index) => index < finalItems)
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
