import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(this.props.closeModal()).then(this.props.history.push('/game'));
  }

  handleChange(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  render() {
    return (
      <div className='session'>
        <h4 className='session-header'>Login Form</h4>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              className='session-input'
              type='text'
              value={this.state.username}
              onChange={this.handleChange('username')}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              className='session-input'
              type='password'
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
          </label>
          <input className='session-button' type='submit' value='Login' />
        </form>
      </div>
    );
  }
};

export default withRouter(LoginForm);
