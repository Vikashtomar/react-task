//  import React, { useEffect, useState } from 'react'
//  import axios from 'axios'
 
//  function Main2() {
//     const [mydata,setMydata] = useState({});
//     const [inputVal,setInpuVal] = useState('')


  
        
//         useEffect(()=>{
//             axios.get(`https://jsonplaceholder.typicode.com/photos/${inputVal}`)
//             .then((res)=>{
//                 console.log(res)
//                 setMydata(res.data.url)
//                 // setInpuVal
//             })
            
//         },[inputVal])

//         // console.log(mydata)
        
//         return (
//             <div>

//         <label htmlFor="">Id Number</label>
//         <input type="number" placeholder='Enter Id'  onChange={ e=> setInpuVal(e.target.value)} value={inputVal} />

//         {
//             (mydata) ? " "  : <img src={mydata.url} alt='someything misssing' />
//         }

//      </div>
//    )
// }
 
 
//  export default Main2