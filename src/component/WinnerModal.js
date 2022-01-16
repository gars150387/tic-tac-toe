import React, {useState} from "react";
import {Button, Modal} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

export const WinnerModal=()=> {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      {}
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
  
        <Modal show={show} onHide={handleClose}>
        <iframe src="https://giphy.com/embed/9xt1MUZqkneFiWrAAD" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </Modal>
      </>
    );
  }