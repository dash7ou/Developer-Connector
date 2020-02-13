import  React, {useState }  from "react";
import { Link } from "react-router-dom";
import { Alert } from 'rsuite';
import { 
    Form,
    FormGroup, 
    FormControl, 
    HelpBlock,
    Button,
    ButtonToolbar,
    Icon
} from 'rsuite';

const RegisterPage = ({ history })=>{
    const [formData , setFormData ] = useState({
        name:"",
        email:"",
        password:"",
        password2:""
    });


    const onChange = (formValue)=>{
        setFormData(formValue)
    }

    const handleSubmit = ()=>{
        const {email , name, password2, password} = formData
        if(!email || !name || !password || !password2){
            Alert.error('There are required feild', 5000)
        }
        if(password !== password2){
            Alert.error('Password do not match.', 5000)
        }

        console.log(formData)
    }

    const cancelSubmit = ()=>{
        history.push("/")
    }


    return(
        <section className="register-page">
            <h1 className="register-page--title">Sign Up</h1>
            <p className="register-page--para"> <Icon icon="user" size="3x"/> Create Your Account</p>
            <Form 
                fluid
                onChange={formValue => onChange(formValue)}

            >
                <FormGroup>
                    <FormControl name="name" placeholder="Name"/>
                </FormGroup>
                <FormGroup>
                    <FormControl name="email" type="email" placeholder="Email"/>
                    <HelpBlock> This site user Gravatar so if you want a profile image, use a Gravatar email</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <FormControl name="password" type="password" placeholder="Password"/>
                </FormGroup>
                <FormGroup>
                    <FormControl name="password2" type="password" placeholder="Confirm Password"/>
                </FormGroup>
                <FormGroup>
                    <ButtonToolbar>
                        <Button appearance="primary" onClick={handleSubmit}>Register</Button>
                        <Button appearance="default" onClick={cancelSubmit}>Cancel</Button>
                    </ButtonToolbar>
                </FormGroup>
            </Form>
            <p className="register-page--para__note">Already have an account? <Link to="/login"> SignIn</Link></p>
        </section>
    )
}

export default RegisterPage;