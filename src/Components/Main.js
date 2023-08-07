 import React, { useState } from 'react'
 import axios from 'axios'
 
 function Main() {

    const [mydata, setMydata] = useState({});
    const [inputVal, setInpuVal] = useState("")
    const [shuru, setShuru] = useState(false)


    function handleClick(){
        axios.get(`https://jsonplaceholder.typicode.com/photos/${inputVal}`)
        .then((res)=>{
            console.log(res.data)
            setMydata(res.data) 
             setShuru(true)
        })
    
    }
     
    
console.log(mydata)

   return (
       

     <div>   <input type='number' onChange={e => setInpuVal(e.target.value)} value={inputVal}/>
    <button onClick={handleClick}>click me</button>

   {
       
       (shuru) &&
       <div>         

        <img src={mydata.url} alt="error" />
    <h4>{mydata.title}</h4>
     </div> 
  }
      

     </div>
  
   )
 }
 
 export default Main