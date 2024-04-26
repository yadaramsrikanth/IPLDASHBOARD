// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const bgColors = [
  'red',
  'blue',
  'pink',
  'orange',
  'brown',
  'yellow',
  'lightblue',
  'black',
][Math.ceil(Math.random() * 7)]

class TeamMatches extends Component {
  state = {teamData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamDetailsData()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamDetailsData = async () => {
    const {match} = this.props

    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()

    const updatedData = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMatchDetails: this.getFormattedData(
        fetchedData.latest_match_details,
      ),
      recentMatches: fetchedData.recent_matches.map(eachTeamMatch =>
        this.getFormattedData(eachTeamMatch),
      ),
    }

    this.setState({teamData: updatedData, isLoading: false})
  }
  renderRecentMatchesList = () => {
    const {teamData} = this.state
    const {recentMatches} = teamData
    return (
      <ul className="MatchCard-container">
        {recentMatches.map(recentMatch => (
          <MatchCard eachMatch={recentMatch} key={recentMatch.id} />
        ))}
      </ul>
    )
  }

  renderMatchDetails = () => {
    const {teamData} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamData
    return (
      <>
        <img src={teamBannerUrl} alt="team banner" />
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        {this.renderRecentMatchesList()}
      </>
    )
  }

  loader = () => {
    return (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    )
  }

  render() {
    const {teamData, isLoading} = this.state

    return (
      <div className={`bg-container ${bgColors}`}>
        {isLoading ? this.loader() : this.renderMatchDetails()}
      </div>
    )
  }
}
export default TeamMatches
