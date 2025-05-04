import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import './Posts.css'

import data from "../../DataFile/data.json"


export let Post = ()=>{

    let error = useNavigate()

    let {id} = useParams()

    let content = data.find((val)=>{return val.id === Number(id)}).content

    if(content==undefined) {error('/error')}

    content = Object.entries(content)

    // console.log(content[0])

    let Blank = ({data})=>{


        let method = data[0]
        let value = data[1]

        switch(method){
            case "article":
            return <h1 className="article_PostC">{value}</h1>
            case "text":
            return <h3 className="text_PostC">{value}</h3>
            case "img":
            return <input className="photo_PostC" type="photo"></input>
        }
    }



    return (
        <>
            {(content===undefined)? <h1>content=undefined</h1> :
                <div className="PostT_PostC">
                <div className="filter_PostC">Фильтр</div>
                <Blank data={content[0]}></Blank>


                {content.map((_,id,array)=>{

                    let index = id+1

                    // console.log(val)

                    if(index <= array.length-1){

                        return <Blank data={array[index]} key={id}></Blank>
                    }
                    // else{
                    //     return
                    // }

                }
                )}


                </div>
            }
        </>
    )
}