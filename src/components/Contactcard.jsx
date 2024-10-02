import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteContactApi } from '../services/allApi';
import { toast } from 'react-toastify';
import { editContactApi } from '../services/allApi';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Contactcard({contact,res,viiw}) {

  const [show, setShow] = useState(false);
  const [updatedContact, setUpdatedContact] = useState({ ...contact });


  const handleDelete = async()=>{
    const result = await deleteContactApi(contact.id)
    if (result.status==200){
      res()
      toast.success("contact.removed")
      
  }
}

    const handleEdit = async()=>{
      const result = await editContactApi(contact.id,updatedContact)
      if (result.status==200){
        toast.success("Contact updated successfully");
        viiw()
        handleClose()
      }
      else{
        toast.error("Failed to update contact");
      }
    }

const handleClose = () => setShow(false);
const handleShow = () => {
    setUpdatedContact({ ...contact });
    setShow(true);
  }

  return (
   <>
   <div>
   <Card style={{ width: '18rem' }} className='mb-4' >
      <Card.Img variant="top" src={contact?.imageUrl} 
       height={'200px'} />
      <Card.Body>
        <Card.Title>{contact?.name}</Card.Title>
        <Card.Text>
          {contact?.phone}
        </Card.Text>
        <Button className='btn btn-light ' onClick={handleDelete}><i className="fa-solid fa-trash-can" style={{color: "#ed071e",}} /></Button>
        <Button  className='btn btn-info ms-3' onClick={handleShow}><i className="fa-solid fa-pen-to-square" style={{color: "#02052c",}} /></Button>
      </Card.Body>
    </Card>
   </div>



    
   <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingname" label="Full Name" className="mb-3">
            <Form.Control
              type="text"
              value={updatedContact.name}
              onChange={(e) => setUpdatedContact({ ...updatedContact, name: e.target.value })}
              placeholder="John Wick"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingnumber" label="Phone Number" className="mb-3">
            <Form.Control
              type="tel"
              value={updatedContact.phone}
              onChange={(e) => setUpdatedContact({ ...updatedContact, phone: e.target.value })}
              placeholder="9123546798"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingimg" label="Image URL">
            <Form.Control
              type="text"
              value={updatedContact.imageUrl}
              onChange={(e) => setUpdatedContact({ ...updatedContact, imageUrl: e.target.value })}
              placeholder="Image URL"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



   </>
  )
}

export default Contactcard
