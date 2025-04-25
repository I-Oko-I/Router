import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import './Posts.css'

import data from "../../DataFile/data.json"


export let Post = ()=>{

    let {id} = useParams()

    let content = data.find((val)=>{return val.id === Number(id)})

    // let content = data[temp]

    let error = useNavigate()

    console.log(content)

    return (
        <>
            {(content!==undefined)?
                <div className="Post">
                    <h1>{content.content.article}</h1>
                    <h2>{content.content.article}</h2>
                    <Outlet></Outlet>
                </div>
            :
            error('/error')
            }
        </>
    )
}