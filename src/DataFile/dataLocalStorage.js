
export let setinfo = (props)=>{
    localStorage.setItem('basic', JSON.stringify(props))
}

export let getinfo = ()=>{
    return JSON.parse(localStorage.getItem('basic'))
}