import React from 'react';
import PropTypes from 'prop-types';

import store from '../redux/store';
import { isCodeValid } from '../game-logic/validateCode';

class Guess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: '',
      invalidGuess: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const userGuess = event.target.value;

    if (isCodeValid(userGuess)) {
      this.setState({
        guess: userGuess,
        invalidGuess: false
      });
    } else {
      this.setState({invalidGuess: true});
    }
  }

  handleClick(event) {
    this.props.makeGuess(this.state.guess);
  }

  render(props) {
    const { guess, invalidGuess } = this.state;
    const { gameComplete } = this.props;
    const buttonDisabled = guess && !invalidGuess && !gameComplete;

    return (
      <div className="column">
        <label htmlFor="guess-input">
          Your guess :
        </label>
        <input id="guess-input"
               className={invalidGuess ? 'error' : ''}
               placeholder="XXXX"
               type="text"
               onChange={this.handleChange}
               autoComplete="off" />
        <button className={"button" + (buttonDisabled ? '' : ' disabled')}
                disabled={buttonDisabled ? false : true}
                onClick={this.handleClick}>
          Guess
        </button>
      </div>
    );
  }
}

Guess.propTypes = {
  makeGuess: PropTypes.func.isRequired,
  gameComplete: PropTypes.bool
}

export default Guess;
