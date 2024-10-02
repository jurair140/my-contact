import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addContactApi } from '../services/allApi';
import { toast } from 'react-toastify';




function Add({setresult}) {

    const [show, setShow] = useState(false);
    const [contact,setContact]=useState({
      name:"",phone:"",imageUrl:""
    })

    const handleAdd = async () =>{
      console.log(contact);
      const {name,phone,imageUrl}=contact

      if(!name || !phone ||  !imageUrl){
        toast.warning("Please fill all the fields");
    }
    else{
      const result = await addContactApi(contact)
       if(result.status==201){
        toast.success("contact upload successfuly")
        setContact({
          name:"",phone:"",imageUrl:""
        })
        handleClose()
        setresult(result)
       }
       else{
        toast.error("contact upload failed")
        console.log(result)
    }
  }
  }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
     <button className='btn ' onClick={handleShow}>
     <i className="fa-solid fa-square-plus fa-2xl" style={{color: "#74C0FC",}} />
     </button>



     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingname" label="full name" className="mb-3" >
        <Form.Control type="text" onChange={(e)=>setContact({...contact,name:e.target.value})} placeholder="john wick" />
        </FloatingLabel>
         <FloatingLabel controlId="floatingnumber" label="phone number" className="mb-3">
        <Form.Control type="tel" onChange={(e)=>setContact({...contact,phone:e.target.value})} placeholder="9123546798" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingimg" label="image url">
        <Form.Control type="text" onChange={(e)=>setContact({...contact,imageUrl:e.target.value})} placeholder="" />
        </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>upload</Button>
        </Modal.Footer>
          </Modal>

    </>
  )
}

export default Add
