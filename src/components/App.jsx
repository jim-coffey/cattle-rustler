import React from 'react';

import Player from './Player';

function App() {
  return (
    <div className="container">
      <h1 className="centered">Bulls &amp; Cows</h1>
      <div className="row">
        <Player player="User" />
        <Player player="Computer" />
      </div>
    </div>
  );
}

export default App;
