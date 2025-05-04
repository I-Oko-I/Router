import { BrowserRouter, NavLink, useLocation, Routes, Route, useNavigate, useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import { useReducer } from "react";

import "./Feed.css"
import data from "../DataFile/data.json"
import { PostTemplate } from "./PostsFile/PostTemplate";

// console.log(data)


export let Feed = (props)=>{

    let site_status = useParams()
    site_status = site_status.topic

    let fltData = (site_status === 'common') ? data : data.filter((val) =>  val.topic == site_status)

    console.log(fltData)





    return (

        <>
        {(site_status !== "/firstre/") ?

            (<div className="Feed_tape">

                

                {fltData.map((val,id)=>{
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