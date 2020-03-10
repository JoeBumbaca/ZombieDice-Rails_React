import React from 'react';
import HeaderContainer from '../header/header_container';

class Profile extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.getUser(this.props.currentUser.id)
  };

  render() {
    if (!this.props.stats) {
      return null;
    } else {
      let stats = this.props.stats
      let winPercent = ((stats.num_wins / stats.num_games) * 100);
      if (!winPercent) {
        winPercent = '100'
      }
      return (
        <div className='profile-container'>
          <HeaderContainer className='nav' />
          <div className='profile'>
            <div className='stats'>
              <h1 className='profile-name'>
                {this.props.currentUser.username}'s Stats
              </h1>
              <ul className='stat-list'>
                <li className='stat-item'>
                  Number of Games Played:
                  <p>{stats.num_games}</p>
                </li>
                <li className='stat-item'>
                  Win Total / Win %:
                  <p>
                    {stats.num_wins} / {winPercent} %
                  </p>
                </li>
                <li className='stat-item'>
                  Fastest Win:
                  <p>
                    {stats.fastest_win === 0 ? 'N/A' : stats.fastest_win} Rounds
                  </p>
                </li>
                <li className='stat-item'>
                  Most Brains in 1 Round:
                  <p>{stats.best_round}</p>
                </li>
              </ul>
              <section className='profile-images'>
                <img
                  className='profile-zombie'
                  src={window.images.zombie1}
                  alt='zombie'
                />
                <img
                  className='profile-zombie'
                  src={window.images.zombie2}
                  alt='zombie'
                />
                <img
                  className='profile-zombie'
                  src={window.images.zombie3}
                  alt='zombie'
                />
                <img
                  className='profile-zombie'
                  src={window.images.zombie4}
                  alt='zombie'
                />
                <img
                  className='profile-zombie'
                  src={window.images.zombie5}
                  alt='zombie'
                />
                <img
                  className='profile-zombie'
                  src={window.images.zombie6}
                  alt='zombie'
                />
                <img
                  className='profile-zombie'
                  src={window.images.zombie1}
                  alt='zombie'
                />
                <img
                  className='profile-zombie'
                  src={window.images.zombie2}
                  alt='zombie'
                />
                <img
                  className='profile-zombie'
                  src={window.images.zombie3}
                  alt='zombie'
                />
                <img
                  className='profile-zombie'
                  src={window.images.zombie4}
                  alt='zombie'
                />
                <img
                  className='profile-zombie'
                  src={window.images.zombie5}
                  alt='zombie'
                />
                <img
                  className='profile-zombie'
                  src={window.images.zombie6}
                  alt='zombie'
                />
              </section>
            </div>
          </div>
        </div>
      );
    }
  };
};

export default Profile;