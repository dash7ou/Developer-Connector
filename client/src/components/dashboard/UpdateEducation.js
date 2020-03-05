import React, {useState, useEffect} from "react";
import {
    Modal,
    Button,
    Form,
    FormGroup,
    FormControl,
    DatePicker,
    ControlLabel,
    Toggle
} from "rsuite";
import {
    connect
} from "react-redux";
import {
    closeModel
} from "../../actions/modal";

//show={show} onHide={this.close}

const UpdateEducation = ({ model: {showUpdateEdu}, closeModel, profile:{objUpdate} })=>{
    const [ dataForm , setDataForm ] = useState({
        school:"",
        degree:"",
        fieldofstudy:"",
        from:"",
        to:"",
        current:false,
        description:""
    })

    const onChange = formValue =>{
        setDataForm({
            ...dataForm,
            ...formValue
        })
    }

    const close = ()=>{
        closeModel()
    }

    useEffect(()=>{
        setDataForm({
            ...dataForm,
            ...objUpdate
        })
    }, []);

    const {
        school,
        degree,
        from,
        to,
        current,
        description,
        fieldofstudy
    } = dataForm

    return(
        objUpdate && (<div>
            <Modal overflow={true} show={showUpdateEdu} onHide={close}>
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
                            <FormControl name='school' placeholder='*School or Bootcamp'  value={school}/>
                        </FormGroup>
        
                        <FormGroup>
                            <FormControl name='degree'  placeholder='*Degree or Certificate'  value={degree}/>
                        </FormGroup>
        
                        <FormGroup>
                            <FormControl name='fieldofstudy'  placeholder='*Field Of Study'  value={fieldofstudy}/>
                        </FormGroup>
        
                        <FormGroup>
                            <ControlLabel>Start Date</ControlLabel>
                            <DatePicker
                                oneTap
                                size="md"
                                style={{"width": "50%"}}
                                value={from}
                                format="YYYY-MM-DD"
                                onChange={(value)=>{setDataForm({...dataForm, from:value.toDateString()})}}
                            />
                        </FormGroup>
        
                        <FormGroup>
                            <ControlLabel>Current Job</ControlLabel>
                            <Toggle  value={current} onChange={value => setDataForm({...dataForm, current: value})}/>
                        </FormGroup>
        
        
                        <FormGroup>
                            <ControlLabel>End Date</ControlLabel>
                            <DatePicker
                                oneTap
                                size="md"
                                style={{"width": "50%"}}
                                value={to}
                                format="YYYY-MM-DD"
                                onChange={(value)=>{setDataForm({...dataForm, to:value.toDateString()})}}
                            />
                        </FormGroup>
        
                        <FormGroup>
                            <FormControl
                                name='description'
                                value={description}
                                rows={5}
                                placeholder='Program Description'
                                componentClass='textarea'
                            />
                        </FormGroup>
                    </Form>
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
        </div>)
    )
}

const mapStateToProps = state =>({
    model: state.model,
    profile: state.profile
})


export default connect(mapStateToProps, {
    closeModel
})(UpdateEducation);