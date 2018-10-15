import React from 'react'
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.js'

const toolbar = props => (

  <header className='toolbar'>

    <nav className='toolbar_navigation'>
      <div> <DrawerToggleButton click={props.drawerClickHandler}/> </div>
      <div className='toolbar_logo'><a rel="noopener noreferrer" href="http://www.rohito.com/" target="_blank" >Flex Box [ ] Responsive Navbar </a> </div>
      <div className='spacer'/>
        <div className="toolbar_navigation-items">
          <ul>
            <li><a href='http://www.rohito.com/' rel="noopener noreferrer" target="_blank">Products</a></li>
            <li><a href='http://www.rohito.com/' rel="noopener noreferrer" target="_blank">Users</a></li>
          </ul>
        </div>
    </nav>

  </header>


)


export default toolbar;
