import { NavLink, useLocation } from "react-router-dom"
import { Link, Outlet } from 'react-router-dom';

import "./LayOut.css"
import { useState } from "react";

export let Layout = ()=>{

  let opn_fltr = () => {
    console.log("Тык")
    setBlckFltr(!blckFltr)
  }
  let [blckFltr, setBlckFltr] = useState(false)
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
      <NavLink to='/add' className="addRouter">
       <button className="addRouter_button" onClick={()=>{console.log("работай")}}></button> 
      </NavLink>
      {/* <button onClick={()=>{console.log("работай")}} ></button> */}

      
      <div className="layout_template_center">
        
          <div className="filter_container">

            <button className="filter_button" onClick={opn_fltr}>Клик.Клик.Клик</button>
            {(blckFltr === false)? <></>
            :
            <div className="blockFltr">
              <NavLink to='/common/'><button className="filter_button filter_button_extra">common</button></NavLink>
              <NavLink to='/it/'><button className="filter_button filter_button_extra">it</button></NavLink>
            </div>}

          </div>
          <Outlet/>

      </div>

    </div>
  )
}