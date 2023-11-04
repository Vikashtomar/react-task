 import React, { useEffect, useState } from 'react'
 import axios  from 'axios'
 
 function Main2() {
    const[mydata,setMydata] = useState({})
    const[inputVal,setInpuVal] = useState('')

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/photos/${inputVal}`)
    .then((res)=>{
        console.log(res)
        setMydata(res.data)
    })

  },[inputVal])

   return (
     <div>
        <input type="number" placeholder='Enter number' onChange={e=>setInpuVal(e.target.value)}  value={inputVal} />

        {

            (mydata.url) ? <div> 
             <img src={mydata.url} alt='error' />   <h2>{mydata.title}</h2>  </div> : " " 
            // (mydata.title) ? : ""
            
                      
        }


     </div>
   )
 }
 
 export default Main2