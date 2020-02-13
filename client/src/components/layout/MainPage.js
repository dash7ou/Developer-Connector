import React from "react";
import { Button, ButtonToolbar } from "rsuite";

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
                        active
                        href="/register"
                        size="lg"
                    >
                        sign Up
                    </Button>
                    <Button
                        size="lg"
                        active
                        href="/login"
                        appearance="primary"
                    >
                        Login
                    </Button>
                </ButtonToolbar>
            </div>
        </section>
    )
};

export default MainPage;