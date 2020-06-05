import React, { useState } from 'react'
import { history } from '../redux'

const Main = () => {
  const [value, setValue] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onClick = () => {
    history.push(`/${value}`)
  }

  return (
    <div>
      <div>{value}</div>
      <div className="flex bg-gray-200 items-center justify-center h-screen">
        <div className="bg-white text-black font-bold rounded-lg border shadow-lg p-10">
          <input
            id="input-field"
            value={value}
            onChange={onChange}
            type="text" className="h-10 bg-gray-300 rounded-sm p-2 m-2" />
          <button
            type="button"
            id="search-button"
            className="bg-green-500 p-2 text-white font-bold rounded-sm"
            onClick={onClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}


export default React.memo(Main)