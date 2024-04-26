// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {competingTeamLogo, matchStatus, result, competingTeam} = eachMatch
  const matchStatusClassName =
    matchStatus === 'Won' ? 'match-won' : 'match-lost'

  return (
    <li className="team-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="logo"
      />
      <p className="team-name">{competingTeam}</p>
      <p className="team-name">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
