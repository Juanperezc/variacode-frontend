import React from 'react';
import { Button,
         Modal,
         ModalBody, 
         ModalFooter,
         ModalHeader } from 'reactstrap';

const modalLogin = (props)=> (
      
            <Modal isOpen={ props.modal } toggle={ props.toggleModal }
                     className={ props.className }>

                <ModalHeader toggle={props.toggle}> { props.title } </ModalHeader>
                <ModalBody>
                    { props.body }
                </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={ props.toggleModal }>Cerrar</Button>
                  </ModalFooter>
            </Modal>
)
export default modalLogin;