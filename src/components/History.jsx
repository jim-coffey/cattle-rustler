import React from 'react';
import PropTypes from 'prop-types';

function History(props) {
  const { guesses } = props;

  return (
    <div className="column"><br/>
      {guesses.length ? 
        <div className="column">
          <i>Guesses so far:</i>
          <ul>
            {guesses.map((guess, index) => {
              return <li key={index}>
                {guesses.length - index}.) 
                Guess: {guess.guess} -
                Bulls: {guess.score.bulls} -
                Cows: {guess.score.cows}
              </li>;
            })}
          </ul>
        </div> :
        <i>No guesses yet.</i>
      }
    </div>
  );
}

History.propTypes = {
  guesses: PropTypes.array.isRequired
}

export default History;
