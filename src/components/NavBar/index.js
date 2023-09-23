// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="nav-con">
      <div className="bg-conn">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="nav-image"
            alt="emoji logo"
          />
          <h1 className="title"> Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="score-con">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
