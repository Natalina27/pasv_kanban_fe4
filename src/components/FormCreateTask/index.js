import React from 'react';
import {ModalFooter, Button, ModalBody, Modal, ModalHeader} from "reactstrap";

export const FormCreateTask = () => {
    return (
        <Modal isOpen={true}>
            <ModalHeader > Add new task </ModalHeader>
            <ModalBody>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" >Add</Button>{' '}
                <Button color="secondary">Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};
