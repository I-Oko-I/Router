import { NavLink, useLocation } from "react-router-dom"
import { Link, Outlet } from 'react-router-dom';

import "./LayOut.css"

export let Layout = ()=>{



  return (
    <div className="layout_template">
      
      <div className="layout_template_center">
        
        <div className="topic_container">
        <NavLink to='/common/' className="link_button"><button><h3>common</h3></button></NavLink>
        <NavLink to='it' className="link_button"><button><h3>it</h3></button></NavLink>
        </div>
        <Outlet/>

      </div>
    </div>
  )
}