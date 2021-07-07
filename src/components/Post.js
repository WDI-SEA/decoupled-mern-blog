import React from 'react'
import { Modal, Button } from 'react-bootstrap';

export default function Post(props) {console.log("hello")
    console.log(props)
    return(
      <Modal.Dialog>
  <Modal.Header>
    <Modal.Title>{props.name}</Modal.Title>
  </Modal.Header>

  <Modal.Body>

        <h4>By:{props.author}</h4>
        <br></br>
        <p>{props.content}</p>
      
  </Modal.Body>

  <Modal.Footer>
    <Button href="/blog" variant="secondary">Close</Button>
  </Modal.Footer>
</Modal.Dialog>
      
  
    )
  }