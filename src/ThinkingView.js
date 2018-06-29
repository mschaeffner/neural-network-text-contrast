import React from 'react'
import MyColorPicker from './MyColorPicker'

export default class ThinkingView extends React.Component {

  state = {
    bgColor: '#CCCCFF',
    textColor: 'black'
  }

  handleChange(color) {
    const input = [
      color.rgb.r / 256,
      color.rgb.g / 256,
      color.rgb.b / 256
    ]

    const output = this.props.brain.think(input)
    console.log('output: ', output)
    const textColor = (output > 0.42) ? 'white' : 'black'
    this.setState({
      bgColor: color.hex,
      textColor
    })
  }

  render() {
    return (
      <div>

        <div style={{ ...styles.preview, color: this.state.textColor, backgroundColor: this.state.bgColor}}>
          Text
        </div>

        <MyColorPicker
          color={this.state.bgColor }
          onChange={color => this.handleChange(color)}
        />


      </div>
    )
  }

}

const styles = {
  preview: {
    width: 100,
    height: 100,
    margin: '20px auto',
    border: '1px solid black',
    fontSize: 24,
    paddingTop: 35,
    textAlign: 'center',
    boxSizing: 'border-box',
  }
}
