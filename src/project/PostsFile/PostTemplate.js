import { Outlet, useLocation } from "react-router-dom"
import { Link } from 'react-router-dom';
import './Posts.css'




export let PostTemplate = ({data})=>{

    let content = data.content

    let article = Object.values(content[0])[0]

    return (
        <>
            <div className="Post">
                <h1>{article}</h1>
                <h2>{article}</h2>
                
            </div>
        </>
    )
}