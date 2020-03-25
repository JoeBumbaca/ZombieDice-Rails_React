import React from 'react';


class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.getLeaders();
  }

  render() {
    if (!this.props.leaders.fastPlayer) {
      return null;
    } else {
      return (
        <div className='leaderboard-container'>
          <h1 className='leaderboard-header'>Leader Board</h1>
          <section className='leaderboard'>
            <section className='most-wins'>
              <h1>Most Wins</h1>
              <div className='fastest-win-grid'>
                <section className='grid-header'>Player Name</section>
                <section className='grid-header'># of Wins</section>
                <div className='leader-board-item'>
                  {this.props.leaders.winTotalPlayer}
                </div>
                <div className='leader-board-item'>
                  {this.props.leaders.mostWins}
                </div>
              </div>
            </section>
            <section className='fastest-win'>
              <h1>Fastest Win</h1>
              <div className='fastest-win-grid'>
                <section className='grid-header'>Player Name</section>
                <section className='grid-header'># of Rounds</section>
                <div className='leader-board-item'>
                  {this.props.leaders.fastPlayer}
                </div> 
                <div className='leader-board-item'>
                  {this.props.leaders.fastestWin}
                </div>
              </div>
            </section>
            <section className='most-brains'>
              <h1>Most Brains in 1 Round</h1>
              <div className='fastest-win-grid'>
                <section className='grid-header'>Player Name</section>
                <section className='grid-header'># of Brains</section>
                <div className='leader-board-item'>
                  {this.props.leaders.mostPlayer}
                </div>
                <div className='leader-board-item'>
                  {this.props.leaders.mostBrains}
                </div>
              </div>
            </section>
          </section>
        </div>
      );
    }
  }
}


export default LeaderBoard;