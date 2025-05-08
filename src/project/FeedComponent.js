import { BrowserRouter, NavLink, useLocation, Routes, Route, useNavigate, useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import { useContext } from "react";

import "./Feed.css"
// import data from "../DataFile/data.json"
import { PostTemplate } from "./PostsFile/PostTemplate";
import { Context_XportData } from "../AppContext.js"



export let Feed = (props)=>{

    let {state_XportData, setState_XportData} = useContext(Context_XportData)
    let data = state_XportData

    let site_status = useParams()
    site_status = site_status.topic

    let fltData = (site_status === 'common') ? data : data.filter((val) =>  val.topic == site_status)




    return (

        <>
        {(site_status !== "/firstre/") ?

            (<div className="Feed_tape">

                

                {fltData.map((val,id,array)=>{

                    console.log(val)
                    return(

                        <Link to={`./${val.id}/`} key={id}>
                            <PostTemplate data={val}></PostTemplate>
                        </Link>
                )
                    
                })}
                
            </div>)

            :

            (<></>)
        }
        </>



    )
}