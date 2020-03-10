import React from 'react';
import GameIndexItem from './game_index_item';

class GameIndex extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div>I am the Channel Index
        <GameIndexItem />
      </div>

    )
  };
};

export default GameIndex;