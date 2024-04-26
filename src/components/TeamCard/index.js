// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeamDetails} = props
  const {name, teamImageUrl, id} = eachTeamDetails

  return (
    <Link className="item-link" to={`/team-matches/${id}`}>
      <li className="each-team-container">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
