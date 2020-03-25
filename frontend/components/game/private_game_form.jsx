import React from 'react';
import { withRouter } from 'react-router-dom';

class PrivateGameForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      password: '',
      errors: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };


  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password === this.props.passwordCheck) {
      this.props.closeModal();
      this.props.history.push(`/game/${this.props.currentGame}`)
    } else {
      this.setState({
        errors: true
      })
    }
  };

  handleChange(e) {
    e.preventDefault();
    this.setState({
      password: e.currentTarget.value
    })
  };

  render() {
    const errors = this.state.errors ? <div className='game-password-errors'>
      That Password is Incorrect!
    </div> : <div className='game-password-errors'>C'mon, let's eat some BRAINS! </div>;
    return (
      <div className='private-session'>
        <h1 className='session-header'>Please Enter the Game's Password</h1>
        <form className='session-form'>
          <input type="text" className='session-input' onChange={this.handleChange} />
          <input type="submit" className='session-button' onClick={this.handleSubmit} value='Join Game' />
        </form>
        {errors}
      </div>
    )
  }
};


export default withRouter(PrivateGameForm);