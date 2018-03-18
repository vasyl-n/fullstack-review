import React from 'react';
import Repo from './Repo.jsx';
const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.

    {/* console.log({props.repos}) */}
    {props.repos.map(r =>
        <div key={r.id}>
          <Repo repo={r} />
        </div>
    )}

  </div>
)

export default RepoList;