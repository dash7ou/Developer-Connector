import  React, {useState , useEffect }  from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Alert } from 'rsuite';
import { 
    Form,
    FormGroup, 
    FormControl, 
    Button,
    ButtonToolbar,
    Icon,
    Notification
} from 'rsuite';

import {
    loginUser,
    clearErrors,
    loadUser
} from "../../actions/auth"

const LoginPage = ( { clearErrors,loadUser, loginUser , auth:{ errors } } )=>{
    const [formData , setFormData ] = useState({
        email:"",
        password:""
    });


    const onChange = (formValue)=>{
        setFormData(formValue)
    }

    const handleSubmit = async ()=>{
        const {email, password} = formData
        if(!email || !password){
            return Alert.error('There are required feild', 5000)
        }
        await loginUser({
            email, password
        })
        await loadUser()

        Notification.success({
            title: `Welcome Again`,
            placement:"topEnd",
            description: "If you need any help you can conntact with admin and we hope you be happy with our service"
        })
        
    }

    useEffect(() => {
        if(errors){
            Alert.error(errors, 5000)
        }
        clearErrors();
    }, [errors])


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

LoginPage.propTypes ={
    clearErrors: PropTypes.func.isRequired,
    loadUser: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapstateToProps = state =>({
    auth: state.auth,
})

export default connect(mapstateToProps , {
    loginUser,
    clearErrors,
    loadUser,
})(LoginPage);