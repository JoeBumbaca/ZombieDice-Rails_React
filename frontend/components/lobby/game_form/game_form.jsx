import React from 'react';

class GameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      num_players: 2,
      private: false,
      creator_id: this.props.creator
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setState = this.setState.bind(this);
  };

  handleChange(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      }, () => {
          if (this.state.private === 'true') {
            this.props.openModal('make-private')
          }
      })
    }
  };

  handleSubmit() {
    if (this.state.private === 'true') {
      const password = localStorage.getItem('roomPassword')
      this.setState({
        password_digest: password
      }, () => this.props.createGame(this.state))
    }

    setTimeout(() => this.setState({
      name: '',
      num_players: 2,
      private: false,
      creator_id: this.props.creator
    }, () => localStorage.removeItem('roomPassword')), 10)
    
  };

  render() {
    return (
      <section className='game-form-container'>
        <h1>Start a New Game!</h1>
        <form className='game-form' onSubmit={this.handleSubmit}>
          <label>
            Game Room Name:
            <input
              type='text'
              className='form-input'
              value={this.state.name}
              onChange={this.handleChange('name')}
              placeholder='Room Name'
            />
          </label>
          <label>
            Number of Players:
            <select
              className='form-input'
              onChange={this.handleChange('num_players')}
              value={this.state.num_players}
            >
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
          </label>
          <div>
              <label>
                Make Game Private?
                <br/>
                <label>
                  Yes!  
                  <input
                    type='radio'
                    name='private'
                    value='true'
                    onChange={this.handleChange('private')}
                  />
                </label>
                <label>
                  No!  
                  <input
                    type='radio'
                    name='private'
                    value='false'
                    onChange={this.handleChange('private')}
                    
                  />
                </label>
              </label>
            </div>
          <input className='form-submit' type='submit' value='Create Game' />
        </form>
      </section>
    );
  }
};

export default GameForm;