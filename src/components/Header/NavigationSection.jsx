import React, { useState, useEffect } from 'react';

import NavigationList from '../../ExampleDataFiles/NavigationList'
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
        <li><Link className="nav-link scrollto" to={"/"}>Link1 </Link></li> 
        <li><Link className="nav-link scrollto" to={"/"}>Link2</Link></li> 
        <li><Link className="nav-link scrollto" to={"/"}>Link2</Link></li> 
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