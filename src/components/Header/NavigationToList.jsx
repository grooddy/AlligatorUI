import { Routes, Route, Link } from 'react-router-dom'


export default function NavigationToList({ name, position, url, subMenu }) {

  let content;

  if (subMenu != 0) {
    content = (
          <li className="dropdown"><a href="#services"><span>{name}</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              
              <li><a href="/news">{subMenu[0].name}</a></li>
              <li><a href="/news">{subMenu[1].name}</a></li>
              <li><a href="/news">{subMenu[3].name}</a></li>
              <li><a href="/news">{subMenu[4].name}</a></li>
              <li><a href="/news">{subMenu[5].name}</a></li>
              <li><a href="/news">{subMenu[6].name}</a></li>
            </ul>
            </li>
    );
  } else {
    content = (
      <li><Link className="nav-link scrollto" to={"/news"}>{name}</Link></li>  
    )
  }


  return (
      <div>
        {content}
      </div>
    );

  }