import React, { useState } from "react";
import { connect } from "react-redux";
import {
    setTextFilter
} from "../../actions/filter";
import {
	Icon,
	InputGroup,
	Input
} from "rsuite";



const SearchInput = ({ setTextFilter })=>{
    const [filterText, setText] = useState("");
    const onFilterProfile = (text)=>{
        setText(text);
    }
    setTextFilter(filterText)
    return (
        <div>
            <InputGroup inside style={{"marginTop": "1rem"}}>
                <Input 
                    onChange={(text)=>onFilterProfile(text)} 
                    placeholder="Search Developer" 
                    size="lg" 
                    value={filterText}
                />
                <InputGroup.Button>
                    <Icon icon="search" />
                </InputGroup.Button>
            </InputGroup>
        </div>
    )
}

export default connect(null, {
    setTextFilter
})(SearchInput);