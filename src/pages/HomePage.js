import {Link} from 'react-router-dom'

const userID = 'ches'

export default function HomePage() {
  return (
    <div>
      <h1>Application</h1>
      <Link to={`/users/${userID}`}>Users</Link>
    </div>
  )
}

