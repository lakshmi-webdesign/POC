import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import { Outlet, Link } from 'react-router-dom';
import { SidebarData } from './ManagerSideBar';
import '../style/Manager.css';
import { IconContext } from 'react-icons';

import { Nav, Button, Navbar} from 'react-bootstrap'

function ManagerHeader() {
      const [sidebar, setSidebar] = useState(false);
      const showSidebar = () => setSidebar(!sidebar);
  return (
    
    // <div>ManagerHeader</div>
    <Navbar expand="md" className="scrolled shadow p-2 mb-1 rounded " >
      
    <IconContext.Provider value={{ color: '#fff' }} style={{marginLeft: '20px'}}>
      <div className='navbar' style={{ flex: 'none' , marginLeft: "20px"}}>
        {/* <div class="navbar-brand name " id="name">Sign In</div> */}
        <Link to='#' className='menu-bars ' onClick={showSidebar} >
          <FaIcons.FaBars style={{ color: 'black', height: "30px" }} />
        </Link>
      </div>
    </IconContext.Provider>


    <Navbar.Brand href="/manager" style={{ color: '#1a2553', fontWeight: '900' , marginLeft:'20px'}}>
      <MdIcons.MdDashboard style={{ width: "30px", height: "30px", verticalAlign: "bottom" }} />
      HBOS Bank
    </Navbar.Brand>


    <Nav className="account ms-auto" id="account" style={{marginRight:"20px"}}>
      <Button variant="cart outline-success" style={{ backgroundColor: '#1a2553', color: 'white' }}>Login</Button>
    </Nav>



    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{ overflowX: 'hidden', zIndex: '2' }}>
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
  )
}

export default ManagerHeader