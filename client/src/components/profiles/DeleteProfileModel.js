import React, { useState } from "react";
import {
    Modal
} from "rsuite";


const DeleteProfileModel = ()=>{
    // const [show , setShow] = useState(false)
    // const open = ()=>{
    //     setShow(true)
    // }

    // const close = ()=>{
    //     setShow(false)
    // }

    return (
        <div className="modal-container">
            <Modal backdrop="static" show={show} onHide={close} size="xs">
            <Modal.Body>
                <Icon
                icon="remind"
                style={{
                    color: '#ffb300',
                    fontSize: 24
                }}
                />
                {'  '}
                Are you sure you want to delete your account ?
                Worn: All you data posts, comments and likes deleted.
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={close} appearance="primary">
                    Ok
                </Button>
                <Button onClick={close} appearance="subtle">
                    Cancel
                </Button>
            </Modal.Footer>
            </Modal>
        </div>
    )
}


export default DeleteProfileModel;