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

const LoginPage = ()=>{
    const [formData , setFormData ] = useState({
        email:"",
        password:""
    });


    const onChange = (formValue)=>{
        setFormData(formValue)
    }

    const handleSubmit = ()=>{
        const {email, password} = formData
        if(!email || !password){
            return Alert.error('There are required feild', 5000)
        }
        console.log(formData)
    }


    return(
        <section className="register-page">
            <h1 className="register-page--title">Sign In</h1>
            <p className="register-page--para"> <Icon icon="user" size="3x"/> Sign To Your Account</p>
            <Form 
                fluid
                onChange={formValue => onChange(formValue)}

            >
                <FormGroup>
                    <FormControl name="email" type="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <FormControl name="password" type="password" placeholder="Password"/>
                </FormGroup>
                <FormGroup>
                    <ButtonToolbar>
                        <Button appearance="primary" onClick={handleSubmit}>Login</Button>
                    </ButtonToolbar>
                </FormGroup>
            </Form>
            <p className="register-page--para__note">Don't have an account? <Link to="/register">Sign Up</Link></p>
        </section>
    )
}

export default LoginPage;