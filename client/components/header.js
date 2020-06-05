import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { user, repository } = useParams()

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6 text-white font-bold">
      <div id="repository-name">{repository || user || 'Git Browser'}</div>
    
      {user && (
        <Link to="/" id="go-back">Go Home</Link>
      )}
      {repository && (
        <Link to={`/${user}`} id="go-repository-list">
          Repository list</Link>
      )}

    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)