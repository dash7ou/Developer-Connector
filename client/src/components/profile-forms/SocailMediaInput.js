import React, {Fragment, useState} from "react";
import {
    Button,
    Animation
} from "rsuite";

const SocailMediaInput = ()=>{
    const [ show , setShow ] = useState(false)
    return(
        <Fragment>
        <Button 
            appearance="primary"
            onClick={() => setShow(!show)}
        >
            Show
        </Button>
        <Animation.Collapse in={show}>
            <p> this is fucken things</p>
        </Animation.Collapse>
        </Fragment>
    )
};


export default SocailMediaInput;
