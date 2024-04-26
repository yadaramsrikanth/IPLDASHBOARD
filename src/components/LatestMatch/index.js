// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <div className="">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card-container">
        <div className="latest-match-details-1">
          <p className="competingTeam-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="venue">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-logo"
        />
        <div className="latest-match-details-2">
          <p className="match-details-label">First Innings</p>
          <p className="match-details-value">{firstInnings}</p>
          <p className="match-details-label">Second Innings</p>
          <p className="match-details-value">{secondInnings}</p>
          <p className="match-details-label">Man Of The Match</p>
          <p className="match-details-value">{manOfTheMatch}</p>
          <p className="match-details-label">Umpires</p>
          <p className="match-details-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
