import React, { useState, useEffect } from 'react';

import NavigationList from '../../api/NavigationListService'
import NavigationToList from './NavigationToList'
import { Link } from 'react-router-dom';


export default function ListingSection() {
  const menuItems = NavigationList();
  useEffect(() => {
    console.log(menuItems);
  }, [menuItems]);

  return (
    <>
      <nav id="navbar" className="navbar ">
        <ul>
        <li></li> 
          {
            (menuItems !== null) && menuItems.map((nav) => (
              <NavigationToList key={nav.name} {...nav} />
            ))}
        </ul>
        <i className="bi mobile-nav-toggle bi-list"></i>
      </nav>


    </>
  )
}