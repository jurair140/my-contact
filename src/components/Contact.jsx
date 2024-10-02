import React from 'react'
import Contactcard from './Contactcard'
import { getContactApi } from '../services/allApi'
import { useState,useEffect } from 'react'

function Contact({result}) {

  const [data,setData]=useState([])

  const [resp,setResp]=useState({})

  const [view,setView]= useState([])

  useEffect(()=>{
    getData()
  },[result,resp,view])

  const getData = async()=>{
    const result = await getContactApi()
    console.log(result)
    if(result.status==200){
      setData(result.data)
    }
  }

  return (
    <>
     <div className='container-fluid border border-3 shadow p-3'>

      {
        data.length>0 ? 
          <div className='d-flex flex-wrap justify-content-around'>
            {data.map(item=>(
              <Contactcard contact={item} res={setResp}  viiw={setView} />

            ))}
          </div>
        :
        <h3>no contact available</h3>
      }
        
     </div>
    </>
  )
}

export default Contact
