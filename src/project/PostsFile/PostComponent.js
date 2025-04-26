import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import './Posts.css'

import data from "../../DataFile/data.json"


export let Post = ()=>{

    let error = useNavigate()

    let {id} = useParams()

    let content = data.find((val)=>{return val.id === Number(id)})

    if(content==undefined) {error('/error')}

    console.log(content)


    return (
        <>
            {(content===undefined)? <h1>content=undefined</h1> :
            <div className="Post">
            <h1>{content.content.h1}</h1>
            <h2>{content.content.h1}</h2>
            <Outlet></Outlet>
        </div>
        }
        </>
    )
}