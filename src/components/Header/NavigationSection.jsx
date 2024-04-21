import React, { useState, useEffect } from 'react';

import NavigationList from '../../ExampleDataFiles/NavigationList'
import NavigationToList from './NavigationToList'


export default function ListingSection() {
  const menuItems = NavigationList();
  useEffect(() => {
    console.log(menuItems);
  }, [menuItems]);

  return (
    <>
      <nav id="navbar" className="navbar ">
        <ul>
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