import React from 'react';
import PropTypes from 'prop-types';

import { isCodeValid } from '../game-logic/validateCode';
import History from './History';
import Status from './Status';
import Guess from './Guess';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secret: '',
      invalidSecret: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(event) {
    this.setState({
      secret: event.target.value
    });
  }

  handleBlur(event) {
    let userCode = event.target.value;

    if (isCodeValid(userCode)) {
      this.setState({invalidSecret: false});
      this.props.storeSecret(userCode);
    } else {
      this.setState({invalidSecret: true});
    }
  }

  componentWillReceiveProps(props) {
    if (this.props.player === 'User') {
      this.setState({secret: props.gameData.secret});
    }
    if (this.props.discovered) {
      this.setState({secret: props.gameData.secret});
    }
  }

  render(props) {
    const { player, gameData, storeSecret, makeGuess, gameComplete } = this.props;
    const { secret, invalidSecret } = this.state;
    const id = (player + "-secret").toLowerCase();

    return (
      <div className="column">
        <h2 className="centered">{player}</h2>
        <label htmlFor={id}>
          Secret code :
        </label>
        <input id={id}
               className={invalidSecret ? 'error' : ''}
               placeholder="XXXX"
               type="text"
               autoComplete="off"
               value={secret}
               disabled={player === 'Computer' ? true : false}
               onChange={this.handleChange}
               onBlur={this.handleBlur} />
        <Status discovered={gameData.discovered} secret={gameData.secret} />
        {player === 'User' &&
         <Guess makeGuess={makeGuess} gameComplete={gameComplete} />
        }
        <History guesses={gameData.history} />
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.string.isRequired,
  gameData: PropTypes.object.isRequired,
  storeSecret: PropTypes.func,
  makeGuess: PropTypes.func,
  gameComplete: PropTypes.bool
}

export default Player;
