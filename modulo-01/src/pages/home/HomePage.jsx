import React from 'react'
import { useHistory } from 'react-router-dom';

const HomePage = () => {

  const history = useHistory();
  const goTask = (path) => {
    history.push(path)
  }
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => goTask('tasks')}>Go to task</button>
      <button onClick={() => goTask('profile')}>Go to profile</button>
    </div>
  )
}

export default HomePage
