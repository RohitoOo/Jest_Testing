import React from 'react'

import './SideDrawer.css'

const SideDrawer = props => {

let drawerClasses = 'side-drawer';
if(props.show){
  drawerClasses = 'side-drawer open'
}

  return (
    <nav className={drawerClasses}>
      <ul>
        <li ><a href="http://www.rohito.com/" rel="noopener noreferrer" target="_blank">Products</a></li>
        <li><a href="http://www.rohito.com/" rel="noopener noreferrer" target="_blank">Users</a></li>
      </ul>
    </nav>
  )
}





export default SideDrawer;
