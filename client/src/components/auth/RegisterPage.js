import  React, {useState , useEffect}  from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
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

// redux
import { connect } from "react-redux";
import { registerUser, clearErrors , loadUser} from "../../actions/auth"


const RegisterPage = ({ history, loadUser,registerUser,clearErrors, auth: { errors , isAuthenticated } })=>{
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
            return Alert.error('There are required feild', 5000)
        }
        if(password !== password2){
            return Alert.error('Password do not match.', 5000)
        }
        registerUser({
            name,
            email,
            password
        })
        loadUser()
    }

    const cancelSubmit = ()=>{
        history.push("/")
    }

    useEffect(()=>{
        if(errors){
            Alert.error(errors, 5000)
            clearErrors()
        }
    }, [errors])


    if(isAuthenticated){
        return <Redirect to="/dashbord" />
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

const mapStateToProps = state =>({
    auth: state.auth
});

RegisterPage.propTypes ={
    clearErrors: PropTypes.func.isRequired,
    loadUser: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

export default connect( mapStateToProps , {
    registerUser,
    clearErrors,
    loadUser
} )(RegisterPage);