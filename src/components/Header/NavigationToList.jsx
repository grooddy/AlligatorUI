import { Routes, Route, Link } from 'react-router-dom'


export default function NavigationToList({ name, position, url, subMenu }) {

  let content;

  if (subMenu != 0) {
    content = (
          <li className="dropdown"><a href="#services"><span>{name}</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              
              <li><a href={subMenu[0].url}>{subMenu[0].name}</a></li>
              <li><a href={subMenu[1].url}>{subMenu[1].name}</a></li>
              <li><a href={subMenu[2].url}>{subMenu[2].name}</a></li>
              <li><a href={subMenu[3].url}>{subMenu[3].name}</a></li>
              <li><a href={subMenu[4].url}>{subMenu[4].name}</a></li>
              <li><a href={subMenu[5].url}>{subMenu[5].name}</a></li>
              <li><a href={subMenu[6].url}>{subMenu[6].name}</a></li>
            </ul>
            </li>
    );
  } else {
    content = (
      <li><Link className="nav-link scrollto" to={url}>{name}</Link></li>  
    )
  }


  return (
      <div>
        {content}
      </div>
    );

  }