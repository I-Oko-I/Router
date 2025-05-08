import { useState,useContext, useMemo } from "react"
import { Link, useNavigate } from "react-router-dom"

import "./AddContainer.css"
import { Context_XportData } from "../../AppContext"

// import data from "../../DataFile/data.json"




export let AddContainer = ()=>{

    let {state_XportData, setState_XportData} = useContext(Context_XportData)
    let data = state_XportData
    let constId_data = useMemo(()=>(data.length),[])

    // console.log("перерендер")

    let initAddInput = [{"filter":"common"},{'article':undefined}]
    let [state_addInput,setState_addInput] = useState(initAddInput)



    let addInput = () => {
        console.log('добавить')

        let input_blank = {'text':undefined}

        let temp = [...state_addInput]
        temp.push(input_blank)


        setState_addInput(temp)
    }


    let submitBlank = () => {
        console.log(data)
       

        let temp = {
            id : Number(data.length+1),
            topic: Object.values(state_addInput[0])[0],
            content : state_addInput.slice(1, state_addInput.length)
        }

        let temp2 = [...state_XportData]
        temp2[constId_data] = temp
        setState_XportData(temp2)
    }


    let Blank = ({classNameProps, id}) => {


        let inputTypeTemp = Object.keys(classNameProps)[0].split(' ')
        inputTypeTemp.splice(0,0,'addinput')

        let stringClassNameProps = inputTypeTemp.join('_')

        // 
        //

        let typeFormat = 
        {
            'filter' : 'filter',
            'article' : 'text',
            'text' : 'text',}

        let pHFormat = {
            'text': "Впишите свой текст",
            'article' : 'О чем хотите поговорить?',
        }

        let typeProps = String(typeFormat[inputTypeTemp[1]])

        let pHProps = String(pHFormat[inputTypeTemp[1]])

        let method = (typeProps !== "filter") ? "input" : "filter"


        // let memoValueState_addInput = useMemo(()=>state_addInput,[Object.values(state_addInput[id])[0]])
        // console.log(Object.values(memoValueState_addInput[id])[0])
        // let valueProps = Object.values(memoValueState_addInput[id])[0]
        // Попробовал мемоизировать


        let saveInput = (e)=>{
            // let value = e.target.value
            // let id = e.target.id
            // let type = e.target.className.split('_')[1]
    
            // let tempResult= state_addInput
            // tempResult[id] = Object.assign({},{[type]:value})

            let tempResult = (prev)=> {

                let temp = [...prev]
                console.log(temp[id][Object.keys(temp[id])])
                temp[id][Object.keys(temp[id])] = e.target.value
                return temp
            }

            // console.log(tempResult)
    
            setState_addInput(tempResult)
    
        }


        switch(method) {
            case "input":
                return <div className="add_inputContainter">
                    <input type={`${typeProps}`} id={id} className={`${stringClassNameProps}`} placeholder={`${pHProps}`} onChange={saveInput} /*onBlur={saveInput}*/ value={Object.values(state_addInput[id])[0]} /*onChange={(e)=>{funcChange(e)}}*/></input>
                    <div className="status"></div>
                </div>
            case "filter":
                return <div className="add_FilterButton1" id={id}>фильтр</div>
        }


            
        }

        // Дружище, нужно сделать мемоизацию создания списка инпутов и изменения значения.
        // 1.1 Найти нужные переменные хука для создания списка, мемоизируй по типу изменения числа элементов в массиве
        // 2.1 Сделай мемоизацию внутри Blank для хука по типу изменения значения для его типа данных

        let memoMapState_addInput = useMemo(()=>state_addInput,[state_addInput.length])
        // console.log(memoMapState_addInput.length)

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