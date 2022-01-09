interface Props{
    text:string|number
}

const Heading= ({text}:Props)=>{
    return(
        <h1>
            {text}
        </h1>
    )
}

export default Heading