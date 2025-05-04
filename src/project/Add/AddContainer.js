import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import "./AddContainer.css"

import data from "../../DataFile/data.json"
import {getinfo, setinfo} from "../../DataFile/dataLocalStorage.js"
import { type } from "@testing-library/user-event/dist/type/index.js"


// setinfo({apple: 'green'})

// console.log(getinfo())


export let AddTemplate = ()=>{


    let saveInput = (propsThis)=>{
        let value = propsThis.target.value
        let id = propsThis.target.id
        let type = propsThis.target.className.split('_')[1]


        let tempResult= state_addInput
        tempResult[id] = Object.assign({},{[type]:value})

        setState_addInput(tempResult)


        console.log(tempResult)
    }

    let initAddInput = [{"filter":undefined},{'article':undefined}]
    let [state_addInput,setState_addInput] = useState(initAddInput)


    let addInput = () => {
        console.log('добавить')

        let input_blank = {'h1':undefined}

        let temp = state_addInput
        temp.push(input_blank)


        // console.log(temp)

        setState_addInput(temp)

    }

    
    // 
    // 
    // 
    // 
    let submitBlank = () => {
        console.log(data)
       
        let recompResult = new Object

        state_addInput.map((val,id,array)=>{
            return  recompResult[Object.keys(val)[0]] = Object.keys(val)[1]
        })

        console.log(recompResult)



        // let temp = {
        //     id : Number(data.length+1),
        //     topic: recompResult.topic,
        //     content : recompResult
        // }

        // console.log(temp)
        // закинь объект в массив
        // data.push(new Array({id:data.length, topic:result[Object.keys(result)[0]], content: object_temp}))
    }


    let Blank = ({classNameProps, id}) => {

        classNameProps = Object.keys(classNameProps)[0].split(' ')
        classNameProps.splice(0,0,'addinput')

        let stringClassNameProps = classNameProps.join('_')


        // console.log(id)

        let typeFormat = 
        {
            'filter' : 'filter',
            'article' : 'text',
            'text' : 'text',}

        let pHFormat = {
            'text': "Впишите свой текст",
            'article' : 'text',
        }

        let typeProps = String(typeFormat[classNameProps[1]])

        let pHProps = String(pHFormat[classNameProps[1]])

        let method = (typeProps !== "filter") ? "input" : "filter"

        // console.log(`tf:${typeProps}`)
        // console.log(`ph:${pHProps}`)
        // console.log(`cn:${classNameProps}`)
        // console.log(`scn:${stringClassNameProps}`)


        switch(method) {
            case "input":
                return <div className="add_inputContainter">
                    <input type={`${typeProps}`} id={id} className={`${stringClassNameProps}`} placeholder={`${pHProps}`} onChange={saveInput}></input>
                    <div className="status"></div>
                </div>
            case "filter":
                return <div className="add_FilterButton1">фильтр{/*Не забыть поставить id */}
                </div>
        }


            
        }

    return (
        <>
         <Link to={`/common/`}><button>Назад</button></Link>

         <div className="add_blank">

            {state_addInput.map((val,id)=>{
                return <Blank classNameProps={val} id={id} key={id}></Blank>
            })}
            <button className="addInput" onClick={addInput}>add</button>
         </div>

         <button className="Add_Submit" onClick={submitBlank}>submit</button>
        </>

)
}