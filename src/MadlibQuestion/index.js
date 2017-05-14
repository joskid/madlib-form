import React from 'react'
import './styles.css';

export default class MadlibQuestion extends React.Component {
  render() {

    const {active, number, onClick} = this.props;

    const offset = active - number;
    const inactive = offset < 0;
    const completed = offset > 0;

    // decrease each completed question by 0.25 opacity
    const opacity = 1 - (offset/4);
    // decrease each completed question by 0.25 scale
    const scale = 1 - (offset/4);
    // move each completed question up extra 60px
    const yTranslation = offset * -60;

    const questionStyle = {
      // if question is active set opacity to 1
      // if its completed decrease opacity by amount above
      // if its inactive question set opacity to 0
      opacity: active == number && 1 || completed ? `${opacity}` : 0,
      // if its completed use translation and scale above
      // its its active or inactive start with default scale and y position
      transform: completed ? `translateY( ${yTranslation}px ) scale( ${scale} )` : 'translateY(0) scale(1)',
      // if its inactive question ignore click events
      pointerEvents: inactive && 'none'
    };

    return (
      <div
        className='madlib-form__question'
        style={questionStyle}
        onClick={onClick}>
        {
          React.Children.map(this.props.children, (child, index) => {
            return (
                React.cloneElement(child, {
                number: number,
                active: active
              })
            )
          })
        }
      </div>
    );
  }
}

MadlibQuestion.displayName = "MadlibQuestion";