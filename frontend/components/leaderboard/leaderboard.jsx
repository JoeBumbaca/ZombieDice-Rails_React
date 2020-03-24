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
            <section className='fastest-win'>
              <h1>Fastest Wins</h1>
              <div className='fastest-win-grid'>
                <section className='grid-header'>Player</section>
                <section className='grid-header'># of Rounds</section>
                {this.props.leaders.fastPlayer} : {this.props.leaders.fastestWin}
              </div>
            </section>
            <section className='most-brains'>
              <h1>Most Brains in 1 Round</h1>
              <div className='fastest-win-grid'>
                <section className='grid-header'>Player</section>
                <section className='grid-header'># of Brains</section>
                {this.props.leaders.mostPlayer} : {this.props.leaders.mostBrains}
              </div>
            </section>
          </section>
        </div>
      );
    }
  }
}


export default LeaderBoard;