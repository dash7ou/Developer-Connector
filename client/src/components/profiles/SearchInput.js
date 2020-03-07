import React from "react";
import {
	Icon,
	InputGroup,
	Input
} from "rsuite"



const SearchInput = ()=>{
    return (
        <div>
            <InputGroup inside style={{"marginTop": "1rem"}}>
                <Input placeholder="Search Developer" size="lg"/>
                <InputGroup.Button>
                    <Icon icon="search" />
                </InputGroup.Button>
            </InputGroup>
        </div>
    )
}

export default SearchInput;