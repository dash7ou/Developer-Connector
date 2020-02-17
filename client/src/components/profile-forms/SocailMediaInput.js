import React, {Fragment, useState} from "react";
import {
    Button,
    Animation,
    InputGroup,
    Input,
    Icon
} from "rsuite";

const SocailMediaInput = ({history})=>{
    const [ show , setShow ] = useState(false)
    return(
        <Fragment>
        <Button 
            appearance="primary"
            onClick={() => setShow(!show)}
        >
            Show Social Media Links
        </Button>
        <Button
            onClick={()=> history.push("/dashboard")}
        >
            Cancel
        </Button>
        <Animation.Collapse in={show}>
            <div>
                <InputGroup>
                    <InputGroup.Addon>
                        <Icon icon="github" />
                    </InputGroup.Addon>
                    <Input placeholder="Github" />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Addon>
                        <Icon icon="facebook" />
                    </InputGroup.Addon>
                    <Input placeholder="Facebook" />
                </InputGroup>
            </div>
        </Animation.Collapse>
        </Fragment>
    )
};


export default SocailMediaInput;
