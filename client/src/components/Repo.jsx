import React from 'react'

const Repo = (props) => (
    <div className="repo">
        Visit repo <a href={props.repo.url} >{props.repo.repoName} </a>by {props.repo.userName}
    </div>
)

export default Repo;