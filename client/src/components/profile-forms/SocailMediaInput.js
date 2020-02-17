import React, {Fragment, useState} from "react";
import {
    Button,
    Animation,
    InputGroup,
    Input,
    Icon
} from "rsuite";

const SocailMediaInput = ()=>{
    const [ show , setShow ] = useState(false)
    return(
        <Fragment>
        <Button 
            appearance="primary"
            onClick={() => setShow(!show)}
            block
        >
            Add Social Media Links{"    "}<Icon icon="arrow-down"/>
        </Button>
        <Animation.Collapse in={show}>
            <div className="social-media-inputs">
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
                <InputGroup>
                    <InputGroup.Addon>
                        <Icon icon="twitter-square" />
                    </InputGroup.Addon>
                    <Input placeholder="Twitter" />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Addon>
                        <Icon icon="linkedin-square" />
                    </InputGroup.Addon>
                    <Input placeholder="LinkedIn" />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Addon>
                        <Icon icon="instagram" />
                    </InputGroup.Addon>
                    <Input placeholder="Instagram" />
                </InputGroup>
            </div>
        </Animation.Collapse>
        </Fragment>
    )
};

// linkedin-square instagram


export default SocailMediaInput;
