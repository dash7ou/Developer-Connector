import React from "react";
import { Button,Icon, ButtonToolbar } from "rsuite";

const MainPage = ()=>{
    return(
        <section className="main">
            <div className="main-background"></div>
            <div className="main-para">
                <div className="main-para--header">
                    <h1 className="main-para--title">Developer Connector</h1>
                    <p className="para">Create a developer profile/portfoilo, share post and get help from other developers</p>
                </div>
                <ButtonToolbar>
                    <Button
                        appearance="primary"
                        color="cyan"
                        href="/register"
                        size="lg"
                    >
                    <Icon icon="user-plus"  /> sign Up
                    </Button>
                    <Button
                        size="lg"
                        href="/login"
                        appearance="default"
                    >
                    <Icon icon="sign-in" /> Login
                    </Button>
                </ButtonToolbar>
            </div>
        </section>
    )
};

export default MainPage;