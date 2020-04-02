import React from 'react';

const GameScores = ({game}) => {
  if (game) {
    let players = game.players.map((player, idx) => {
    return <li className='score-list-item' key={idx}>{player.name}: {player.score}</li>
    })
    return (
      <section className='score-ticker'>
        <section className='ticker-header'>
          <p className='header-item'>Round Number: {game.round_num}</p>
        </section>
        <ul className='score-list'>
          {players}
        </ul>
      </section>
    )
  } else {
    return (
      <section className='score-ticker'>
        <p className='header-item'>"I love you… let me eat your br-a-a-a-a-a-a-i-n-s" -Return of the Living Dead</p>
      </section>
    )
  }
};

export default GameScores;