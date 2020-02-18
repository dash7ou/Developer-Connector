import React, {useState} from "react";
import { connect } from "react-redux";
import {
    addEducation
} from "../../actions/profile"
import {
    Form,
    FormControl,
    FormGroup,
    ButtonToolbar,
    Button,
    Icon,
    DatePicker,
    ControlLabel,
    Toggle,
    Alert,
    Notification
} from "rsuite";

const AddEducation = ({history, addEducation})=>{
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

    const onAddEducation =async () =>{
        const { school, degree} = dataForm;
        if(!school || !degree){
			return Alert.error('There are some required feild you need to add it', 5000);
        }
        await addEducation(dataForm);
        history.push("/dashboard");
		Notification.success({
			title: "Add Education",
			placement:"topEnd",
			description: "Success add your education, you can show it in your profile"
		});
    }

    return(
        <section>
            <h1 className='header_form'>Add An Education</h1>
            <p className='form__main-para--small'>Add any school or bootcamp that you have attended.</p>
            <p className='form__para'> * = required field</p>
            
            <Form fluid onChange={(formValue) => onChange(formValue)}>
                <FormGroup>
                    <FormControl name='school' placeholder='*School or Bootcamp'  />
                </FormGroup>

                <FormGroup>
                    <FormControl name='degree'  placeholder='*Degree or Certificate'  />
                </FormGroup>

                <FormGroup>
                    <FormControl name='fieldofstudy'  placeholder='Field Of Study'  />
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

                <div className='form-button'>
                    <ButtonToolbar>
                        <Button onClick={() => history.push('/')}><Icon icon="back-arrow"/>Cancel</Button>
                        <Button appearance='primary' onClick={onAddEducation}>
                            <Icon icon="mortar-board"  />  Add Education
                        </Button>
                    </ButtonToolbar>
                </div>
            </Form>
        </section>
    )
}



export default connect(null, {
    addEducation
})(AddEducation)

