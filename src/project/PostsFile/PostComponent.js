import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import './Posts.css'

import { Context_XportData } from "../../AppContext.js";
import { useContext } from "react";



export let PostComponent = ()=>{

    let {state_XportData, setState_XportData} = useContext(Context_XportData)
    let data = state_XportData

    let errorLink = useNavigate()

    let {id} = useParams()
    let content = data.find((val)=>{return val.id === Number(id)}).content
    if(content==undefined) {errorLink('/error')}



    return (
        <>
            {(content===undefined)? <h1>content=undefined</h1> :
                <div className="PostT_PostC">
                    <div className="filter_PostC">Фильтр</div>
                    <Blank data={content[0]}></Blank>

                    {content.map((_,id,array)=>{
                        let index = id+1

                        if(index <= array.length-1){
                            return <Blank data={array[index]} key={id}></Blank>
                        }

                    }
                    )}


                </div>
            }
        </>
    )
}


let Blank = ({data})=>{

    let tempData = Object.entries(data)[0]

    let method = tempData[0]
    let value = tempData[1]

    switch(method){
        case "article":
        return <h1 className="article_PostC">{value}</h1>
        case "text":
        return <h3 className="text_PostC">{value}</h3>
        case "img":
        return <input className="photo_PostC" type="photo"></input>
    }
}