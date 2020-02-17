import React , {useState } from "react";
import {
    Form , 
    SelectPicker,
    FormGroup,
    FormControl,
    HelpBlock,
    ButtonToolbar,
    Button
}  from "rsuite"

import SocailMediaInput from "./SocailMediaInput";

const CreateProfile = ({ history })=>{
    const [formData , setFormData] = useState({
        company: "",
        website: "",
        status: "",
        skills: "",
        githubusername: "",
        bio: "",
        twitter: "",
        facebook: "",
        linkedin: "",
        youtube: "",
        instagram: ""
    })

    const {
        company,
        website,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData;


    return(
        <div>
            <h1 className="header_form"> Create Your Profile </h1>
            <p className="form__main-para">Let's get some information to make your profile stand out</p>
            <p className="form__para"> * = required field</p>
            <Form fluid>
                <FormGroup>
                    <SelectPicker
                        data=""
                        block
                        placeholder="*Select Profession Status"
                        data={
                            [
                                {
                                    value: "Developer",
                                    label: "Developer"
                                },
                                {
                                    value: "Junior Developer",
                                    label: "Junior Developer"
                                },
                                {
                                    value: "Senior Developer",
                                    label: "Senior Developer"
                                },
                                {                            
                                    value: "Manger",
                                    label: "Manger"
                                },
                                {                         
                                    value: "Student / Learning",
                                    label: "Student / Learning"
                                },{
                                    value: "Instructor",
                                    label: "Instructor"
                                },
                                {
                                    value: "Intern",
                                    label: "Intern"
                                },{
                                    value: "Other",
                                    label: "Other"
                                }

                            ]                     
                        }
                        searchable={false}
                    />
                    <HelpBlock> Give as an idea of where you are at in your career </HelpBlock>
                </FormGroup>
                <FormGroup>
                    <FormControl name='company' type='company' placeholder='Company' />
                    <HelpBlock> Could be your company or one you work for</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <FormControl name='website' type='website' placeholder='Website' />
                    <HelpBlock> Could be your website or company website</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <FormControl name='location' type='location' placeholder='Location' />
                    <HelpBlock> City & state suggested (eg. Gaza, Khanyouns) </HelpBlock>
                </FormGroup>
                <FormGroup>
                    <FormControl name='skills' type='skills' placeholder='*Skills' />
                    <HelpBlock> Please add your skills (eg. HTML, CSS, Python)</HelpBlock>

                </FormGroup>
                <FormGroup>
                    <FormControl name='githubusername' type='githubusername' placeholder='Github Username' />
                    <HelpBlock> if you want your last repos and Github link, include your username</HelpBlock>

                </FormGroup>
                <FormGroup>
                    <FormControl 
                        name="textarea" 
                        rows={5}
                        placeholder="A short bio about your self"
                        componentClass="textarea" 
                    />
                    <HelpBlock>Tell us little about your self </HelpBlock>
                </FormGroup>
                <SocailMediaInput />
                <div className="form-button">
                    <ButtonToolbar>
                        <Button
                            appearance="primary"
                        >
                            Create Profile
                        </Button>
                        <Button
                            onClick={()=> history.push("/")}
                        >
                            Cancel
                        </Button>
                    </ButtonToolbar>
                </div>
            </Form>
        </div>
    )
}


export default CreateProfile;