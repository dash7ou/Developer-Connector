import React, { useState } from "react";
import {
    connect
} from "react-redux";
import {
    Modal,
    Button,
    Icon
} from "rsuite";

import {
    closeModel
} from "../../actions/modal";

const DeleteProfileModel = ({model: {show}, closeModel})=>{

    const close = ()=>{
        closeModel()
    }

    return (
        <div className="modal-container">
            <Modal backdrop="static" show={show} onHide={close} size="xs" backdrop={true}>
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
                <Button appearance="primary">
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

const mapStateToProps = state =>({
    model: state.model
})


export default connect(mapStateToProps,{
    closeModel
})(DeleteProfileModel);