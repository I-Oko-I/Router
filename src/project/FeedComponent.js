import { BrowserRouter, NavLink, useLocation, Routes, Route, useNavigate, useParams } from "react-router-dom"
import { Link } from 'react-router-dom';

import "./Feed.css"
import data from "../DataFile/data.json"
import { useReducer } from "react";
import { PostTemplate } from "./PostsFile/PostTemplate";

// console.log(data)


export let Feed = (props)=>{

    let site_status = useParams()
    site_status = site_status.topic
    // console.log(site_status)

    // let fltData = (site_status === 'common') ? data :(data.filter((val) => {val.topic == site_status}))

    // let temp = `/first/common/${val.id}/`

    


    return (

        <>
        {(site_status !== "/firstre/") ?

            (<div className="Feed_tape">

                

                {data.map((val,id)=>{
                    return(

                        <Link to={`./1/`} key={id}>
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