import React from 'react';
import { Input, ModalFooter, Button, ModalBody, Modal, ModalHeader, Label} from 'reactstrap';



export const FormCreateTask = (
    {openModal,isModalOpen, newTitle, addNewTask, changeTitle }
    ) => {

    return (
        <>
            <Button onClick={() => openModal()}>Add new task</Button>
            <Modal isOpen={isModalOpen}>
                <ModalHeader> Add new task </ModalHeader>
                <ModalBody>
                    <Label>New Title</Label>
                    <Input
                        type='text'
                        value={newTitle}
                        onChange={changeTitle}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={()=>addNewTask(newTitle)}
                    >
                        Add
                    </Button>
                    {' '}
                    <Button
                        color="secondary"
                        onClick={openModal}
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};
