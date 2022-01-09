import { useState } from "react"
import Button from "./Button"
import Heading from "./Heading"

interface Props{

}

const Counter= ()=>{
    const [count,setCount]= useState(0)
    return(
        <div>
            <Heading text='Counter'/>
            <Heading text={count}/>
            <Button text='Add' onClick={()=>setCount((count)=>count+1)}/>
            <Button text='Reduce' onClick={()=>setCount((count)=>count-1)}/>
        </div>
    )
}

export default Counter