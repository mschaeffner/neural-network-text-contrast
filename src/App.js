import React from 'react'
import Brain from './Brain'
import TrainingView from './TrainingView'
import ThinkingView from './ThinkingView'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.brain = new Brain({numberOfInputs: 3})
  }

  render() {
    return (
      <div style={{ width: 800, margin: '0 auto', display: 'flex' }}>

        <div style={{ flex: 1, margin: 20, backgroundColor: '#F3F3F3', border: '1px solid #CCC' }}>
          <div style={{ backgroundColor: '#DDD', height: 32, fontSize: 16, paddingTop: 10, textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial' }}>
            Train
          </div>
          <TrainingView brain={this.brain} />
        </div>

        <div style={{ flex: 1, margin: 20, backgroundColor: '#F3F3F3', border: '1px solid #CCC' }}>
          <div style={{ backgroundColor: '#DDD', height: 32, fontSize: 16, paddingTop: 10, textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial' }}>
            Think
          </div>
          <ThinkingView brain={this.brain} />
        </div>

      </div>
    )
  }

}
