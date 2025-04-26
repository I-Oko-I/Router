import { NavLink, useLocation } from "react-router-dom"
import { Link, Outlet } from 'react-router-dom';

import "./LayOut.css"
import { useState } from "react";

export let Layout = ()=>{

  // let opn_fltr = () => {
  //   console.log("Тык")
  //   setBlckFltr(!blckFltr)
  // }
  // let [blckFltr, setBlckFltr] = useState(false)
  // let temp_extra = (
  //   <button className="filter" onClick={opn_fltr}></button>
  //   {(blckFltr === false)? <></>
  //   :
  //   <div className="blckFltr">
  //     <NavLink to='/common/' className="link_button"><button><h3>common</h3></button></NavLink>
  //     <NavLink to='it' className="link_button"><button><h3>it</h3></button></NavLink>
  //   </div>}
  // )
      

  return (
    <div className="layout_template">
      
      <div className="layout_template_center">
        
        <div className="filter_container">

        <NavLink to='./common/' className="link_button"><button><h3>common</h3></button></NavLink>
        <NavLink to='./it/' className="link_button"><button><h3>it</h3></button></NavLink>

        </div>
        <Outlet/>

      </div>
    </div>
  )
}