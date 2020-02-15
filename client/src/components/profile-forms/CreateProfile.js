import React , {useState } from "react";

const CreateProfile = ()=>{
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
            <h1> create profile </h1>
        </div>
    )
}


export default CreateProfile;