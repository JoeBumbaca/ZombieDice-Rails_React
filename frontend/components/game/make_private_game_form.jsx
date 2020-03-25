import React from 'react';


class MakePrivateGameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {
    e.preventDefault();
    this.setState({
      password: e.currentTarget.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    localStorage.setItem('roomPassword', this.state.password)
    this.props.closeModal();
  };

  render() {
    console.log(this.state.password)
    return (
      <div className='private-session'>
        <h1 className='session-header'>Please Enter a Password</h1>
        <form className='session-form'>
          <input type="text" className='session-input' onChange={this.handleChange}/>
          <input type="submit" className='session-button' onClick={this.handleSubmit} value='Create Password'/>
        </form>
      </div>
    )
  };
};

export default MakePrivateGameForm;