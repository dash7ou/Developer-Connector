import React, {useState} from "react";
import { connect } from "react-redux";
import {
    addExperience
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

const AddExperience = ({history, addExperience})=>{
    const [ dataForm , setDataForm ] = useState({
        title:"",
        company:"",
        location:"",
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

    const onAddExperience =async () =>{
        const { company, title} = dataForm;
        if(!company || !title){
			return Alert.error('There are some required feild you need to add it', 5000);
        }
        await addExperience(dataForm);
        history.push("/dashboard");
		Notification.success({
			title: "Add Experience",
			placement:"topEnd",
			description: "Success add your experience, you can show it in your profile"
		});
    }

    return(
        <section>
            <h1 className='header_form'>Add An Experience</h1>
            <p className='form__main-para--small'>Add any developer/programming positions that you have had in the past</p>
            <p className='form__para'> * = required field</p>
            
            <Form fluid onChange={(formValue) => onChange(formValue)}>
                <FormGroup>
                    <FormControl name='title' placeholder='*Job Title'  />
                </FormGroup>

                <FormGroup>
                    <FormControl name='company'  placeholder='*Company'  />
                </FormGroup>

                <FormGroup>
                    <FormControl name='location'  placeholder='Location'  />
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
                        placeholder='Job description'
                        componentClass='textarea'
                    />
                </FormGroup>

                <div className='form-button'>
                    <ButtonToolbar>
                        <Button onClick={() => history.push('/')}><Icon icon="back-arrow"/> Cancel</Button>
                        <Button appearance='primary' onClick={onAddExperience}>
                            <Icon icon="black-tie"  />  Add Experience
                        </Button>
                    </ButtonToolbar>
                </div>
            </Form>
        </section>
    )
}



export default connect(null, {
    addExperience
})(AddExperience)

