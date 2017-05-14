import React from 'react'
import './styles.css';

export default class MadlibQuestions extends React.Component {
  render() {

    // start question counter at 1
    let questionNumber = 1;

    return (
      <div className="madlib-form__questions" style={{height: this.props.height}}>
        {
          React.Children.map(this.props.children, (child, index) => {
            if (child.type.displayName == "MadlibQuestion") {
              // increment question counter
              const number = questionNumber++;

              return (
                React.cloneElement(child,
                  {
                    number: number,
                    active: this.props.active,
                    onClick: () => this.props.questionClicked(number)
                  }
                )
              );
            } else if (child != null) {
              return React.cloneElement(child, {numberOfQuestions: questionNumber});
            }
          })
        }
      </div>
    );
  }
}
