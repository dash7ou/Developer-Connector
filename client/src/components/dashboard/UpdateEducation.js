import React from "react";
import {
    Modal,
    Button,
    Icon,
    Form,
    FormGroup,
    FormControl,
    DatePicker,
    Button,
    ControlLabel,
    Toggle
} from "rsuite";

//show={show} onHide={this.close}

const UpdateEducation = ()=>{
    return(
        <div>
            <Modal overflow={true} >
                <Modal.Header>
                    <Modal.Title>
                        Add An Education
                    </Modal.Title>
                    <p className='form__main-para--small'>Add any school or bootcamp that you have attended.</p>
                    <p className='form__para'> * = required field</p>
                </Modal.Header>
                <Modal.Body>
                    <Form fluid onChange={(formValue) => onChange(formValue)}>
                        <FormGroup>
                            <FormControl name='school' placeholder='*School or Bootcamp'  />
                        </FormGroup>
        
                        <FormGroup>
                            <FormControl name='degree'  placeholder='*Degree or Certificate'  />
                        </FormGroup>
        
                        <FormGroup>
                            <FormControl name='fieldofstudy'  placeholder='*Field Of Study'  />
                        </FormGroup>
        
                        <FormGroup>
                            <ControlLabel>Start Date</ControlLabel>
                            <DatePicker
                                oneTap
                                size="md"
                                style={{"width": "50%"}}
                                format="YYYY-MM-DD"
                                onChange={(value)=>{setDataForm({...dataForm, from:value.toDateString()})}}
                            />
                        </FormGroup>
        
                        <FormGroup>
                            <ControlLabel>Current Job</ControlLabel>
                            <Toggle onChange={value => setDataForm({...dataForm, current: value})}/>
                        </FormGroup>
        
        
                        <FormGroup>
                            <ControlLabel>End Date</ControlLabel>
                            <DatePicker
                                oneTap
                                size="md"
                                style={{"width": "50%"}}
                                format="YYYY-MM-DD"
                                onChange={(value)=>{setDataForm({...dataForm, to:value.toDateString()})}}
                            />
                        </FormGroup>
        
                        <FormGroup>
                            <FormControl
                                name='description'
                                rows={5}
                                placeholder='Program Description'
                                componentClass='textarea'
                            />
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close} appearance="primary">
                        Ok
                    </Button>
                    <Button onClick={this.close} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default UpdateEducation;