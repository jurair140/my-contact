import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Contact from '../components/Contact'
import Add from '../components/Add'
import { useState } from 'react'

function Dashboard() {

  const [result,setResult]=useState({})

  return (
    <>
     <div className='container-fluid p-4'>
        <h1 className='mb-5 text-center'>Contacts</h1>
        <Row>
            <Col md={1}>
                <Add setresult={setResult}/>
            </Col>
            <Col md={11}>
             <Contact result={result}/>
            </Col>
            
        </Row>
     </div>
    </>
  )
}

export default Dashboard
