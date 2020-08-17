import React, {useState} from 'react';
import { Input, ModalFooter, Button, ModalBody, Modal, ModalHeader, Label} from 'reactstrap';

export const FormCreateTask = () => {
    const [isModalOpen, setModelOpen] = useState(false);
    return (
        <>
            <Button onClick={()=>setModelOpen(true)}>Add new task</Button>
            <Modal isOpen={isModalOpen}>
                <ModalHeader> Add new task </ModalHeader>
                <ModalBody>
                    <Label>New Title</Label>
                    <Input/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Add</Button>{' '}
                    <Button
                        color="secondary"
                        onClick={()=>setModelOpen(false)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};
