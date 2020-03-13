import React from 'react';

const LeaderBoard = (props) => {
  return (
    <div className='leaderboard-container'>
      <h1 className='leaderboard-header'>Leader Board</h1>
      <section className='leaderboard'>
          <section className='fastest-win'>
            <h1>Fastest Wins</h1>
          </section>
          <section className='most-brains'>
            <h1>Most Brains in 1 Round</h1>
          </section>
      </section>
    </div>
  );
};

export default LeaderBoard;