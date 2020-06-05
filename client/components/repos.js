import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Repos = (props) => {
  const { user } = useParams()

  return (
    <div>
      <div className="flex p-20 bg-gray-200 items-center justify-center h-screen">
        <div className="bg-white w-3/4 text-black font-bold rounded-lg border shadow-lg p-10">
        <div>{props.repos.map((repo) => (
        <div className="bg-gray-600 text-white rounded m-5 p-2 mb-2 hover:bg-green-500" key={repo.id}>
          <Link to={`/${user}/${repo.name}`}>{repo.name}</Link>
        </div>
        ))}
        </div>
        </div>
      </div>
    </div>
  )
}

Repos.propTypes = {}

export default React.memo(Repos)
