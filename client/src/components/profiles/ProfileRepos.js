import React from "react";
import {
    Button,
    ButtonGroup
} from "rsuite"

const ProfileRepos = ({repos})=>{
    return(
        repos &&
            <article className="repos">
                <h1 className="repos-title">Github Repos</h1>
                {repos.map((repo, index)=>
                    (
                        <div className="repo" key={index}>
                            <div className="repo-info">
                                <p className="repo-name">{repo.name}</p>
                                <p className="repo-desc">{repo.description}</p>
                            </div>
                            <div className="repo-button">
                                <ButtonGroup vertical>
                                    <Button color="orange">Stars: {repo.stargazers_count}</Button>
                                    <Button color="green">Watchers: {repo.watchers_count}</Button>
                                    <Button color="red">Forks: {repo.forks_count}</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    )
                )
                }
            </article>
    )
}


export default ProfileRepos;