import React from 'react'
import { rand } from './math'


export default class TrainingView extends React.Component {

  state = {
    trainings: 0,
    bgColor: {
      r: rand(0, 256),
      g: rand(0, 256),
      b: rand(0, 256)
    }
  }

  handleClick(value) {
    const input = [
      this.state.bgColor.r / 256,
      this.state.bgColor.g / 256,
      this.state.bgColor.b / 256
    ]
    this.props.brain.train({ input, output: value })

    const newBgColor = {
      r: rand(0, 256),
      g: rand(0, 256),
      b: rand(0, 256)
    }
    this.setState({
      trainings: this.state.trainings + 1,
      bgColor: newBgColor
    })
  }

  render() {
    const bgColor = `rgb(${this.state.bgColor.r},${this.state.bgColor.g},${this.state.bgColor.b})`
    return (
      <div>
        <div style={styles.container}>

          <div
            style={{ ...styles.preview, color: 'black', backgroundColor: bgColor}}
            onClick={() => this.handleClick(0)}
          >
            Black
          </div>

          <div
            style={{ ...styles.preview, color: 'white', backgroundColor: bgColor}}
            onClick={() => this.handleClick(1)}
          >
            White
          </div>

        </div>

        <div>
          Trainings: {this.state.trainings}
        </div>

      </div>
    )
  }

}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  preview: {
    width: 100,
    height: 100,
    margin: 20,
    border: '1px solid black',
    fontSize: 24,
    paddingTop: 35,
    textAlign: 'center',
    boxSizing: 'border-box',
    cursor: 'pointer'
  }
}
