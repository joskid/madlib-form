import React from 'react'
import {render} from 'react-dom'
import {MadlibQuestions, MadlibQuestion} from 'src';
import './styles.css';

export default class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 1
    };
  }

  nextQuestion() {
    this.setState({
      active: this.state.active + 1
    })
  }

  goToQuestion(number) {
    if (number < this.state.active) {
      this.setState({active: number})
    }
  }

  render() {

    return (
      <div className="demo-page">
        <MadlibQuestions
          active={this.state.active}
          questionClicked={(number) => this.goToQuestion(number)}>
          <MadlibQuestion>
            <span>{'My name is'}</span>
            <button onClick={() => this.nextQuestion()}>
              Continue
            </button>
          </MadlibQuestion>
          <MadlibQuestion>
            <span>{'My favorite color is'}</span>
            <button onClick={() => this.nextQuestion()}>
              Continue
            </button>
          </MadlibQuestion>
          <MadlibQuestion>
            <span>{'My favorite color is'}</span>
            <button onClick={() => this.nextQuestion()}>
              Continue
            </button>
          </MadlibQuestion>
          <MadlibQuestion>
            <span>{'My favorite color is'}</span>
            <button onClick={() => this.nextQuestion()}>
              Continue
            </button>
          </MadlibQuestion>
          <MadlibQuestion>
            <span>{'My favorite color is'}</span>
            <button onClick={() => this.nextQuestion()}>
              Continue
            </button>
          </MadlibQuestion>
        </MadlibQuestions>
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
