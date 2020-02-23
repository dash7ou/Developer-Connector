import React from "react";
import {
    Button
} from "rsuite";
import { connect } from "react-redux";

const Post = ({ history })=>{
    const backPostsPage = ()=>{
        history.push("/posts")
    }
    return(
        <section>
            <Button onClick={backPostsPage}>Back to posts page</Button>

        </section>
    )
};

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, {})(Post);