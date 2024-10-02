import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <>
      <div className='container-fluid d-flex flex-row'style={{height:"85vh"}}>
        <Row>
            <Col  className='d-flex flex-column justify-content-center'  xs={12} md={6}>


                <h1 className='text-center'>My Contact</h1>
                 <p style={{textAlign: "justify"}} className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                         labore est adipisci sapiente magni, amet quis aliquam quaerat nostrum
                         tenetur sequi tempore, porro laboriosam inventore harum, quos repellat corrupti nesciunt.</p>
                <div className='d-grid'>
                         <Link to={'/dash'} className='btn btn-success'>Go TO Contact</Link>
                </div>
            </Col>
            <Col  className='d-flex flex-column justify-content-center'   xs={12} md={6}>

                 <img src="https://static.vecteezy.com/system/resources/thumbnails/007/067/602/small/businessman-shows-outstretched-hand-with-social-icon-on-virtual-screen-contact-us-free-photo.jpg"
                 alt="Contact Us" className='img-fluid' width={'100%'} height={'100%'}/>
            </Col>
        </Row>

      </div>
    </>
  )
}

export default Landing
