// Write your code here
import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  increaseSpeed = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(previousSpeed => ({
        speed: previousSpeed.speed + 10,
      }))
    }
  }

  applyBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(previousSpeed => ({
        speed: previousSpeed.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="main">
        <h1 className="h1">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="h2">Speed is {speed}mph</h1>
        <p className="p1">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttonsContainer">
          {
            // eslint-disable-next-line
            <button className="button1" onClick={this.increaseSpeed}>
              Accelerate
            </button>
          }
          {
            // eslint-disable-next-line
            <button className="button2" onClick={this.applyBrake}>
              Apply Brake
            </button>
          }
        </div>
      </div>
    )
  }
}

export default Speedometer
