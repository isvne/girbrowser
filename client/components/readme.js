import React from 'react'
import ReactMarkdown from 'react-markdown'

const Readme = (props) => {
  return <div className="flex p-20 bg-gray-200 items-center justify-center">
    <div id="description" className="m-50 w-3/4 bg-white text-black rounded-lg border shadow-lg p-10"><ReactMarkdown source={props.readme} /></div>
    </div>
}

Readme.propTypes = {}

export default React.memo(Readme)
