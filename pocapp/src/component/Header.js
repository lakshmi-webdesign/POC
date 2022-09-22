import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import { Outlet, Link } from 'react-router-dom';
import { SidebarData } from './Sidebar';
import '../style/Header.css';
import { IconContext } from 'react-icons';

import { Nav, Button, Navbar, Form, FormControl } from 'react-bootstrap'

import "react-bootstrap/dist/react-bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  //const [isloggedin, setLoginstate] = useState(true);
  //const loggedinorout = () => setLoginstate(!isloggedin);

  return (
    <>
      <Navbar expand="md" className="scrolled shadow p-2 mb-1 bg-white rounded" >
        <Navbar.Brand href="/" style={{ marginLeft: '20px', color: '#1a2553', fontWeight: '900' }}>
          <MdIcons.MdDashboard style={{width:"30px",height:"30px",verticalAlign:"bottom"}}/>
          HBOS Bank
        </Navbar.Brand>

        <div className="d-flex search" style={{ width: '-webkit-fill-available', marginRight: '15px' }}>
          <Form className="d-flex " style={{ width: '95.666667%', margin: 'auto' }}>
          <button className="input-group-text" id="basic-addon1" style={{ fontWeight: 'bold' }}>⌕</button>
            <FormControl type="search" placeholder="Search for Products and Services" className="mr-sm-2" aria-label="Search"></FormControl>
           
          </Form>
        </div>

        <Nav className="account ms-auto" id="account" >
          <Button variant="cart outline-success" style={{ backgroundColor: '#1a2553', color: 'white' }}>Login</Button>
        </Nav>

        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar' style={{ marginLeft: '20px', flex: 'none', marginRight: '10px' }}>
          {/* <div className="navbar-brand name " id="name">Sign In</div> */}
            <Link to='#' className='menu-bars ' onClick={showSidebar} >
              <FaIcons.FaBars style={{ color: 'black', marginRight: '10px' ,height:"30px"}} />
            </Link>
          </div>
        </IconContext.Provider>

        

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{ overflowX: 'hidden' ,zIndex: '2'}}>
          <ul className='nav-menu-items' onClick={showSidebar} style={{ paddingLeft: '0rem' }}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose style={{ color: 'black' }} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                  <Outlet />
                </li>
              );
            })}
          </ul>
        </nav>

      </Navbar>
    
    </>
  )
}

export default Header