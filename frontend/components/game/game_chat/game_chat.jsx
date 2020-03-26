import React from 'react';
import ChatMessage from './chat_message';

class GameChat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      body: '',
      game_id: this.props.gameId,
      user_id: this.props.userId,
      user_name: this.props.userName
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setState = this.setState.bind(this);
  };

  handleChange(e) {
    e.preventDefault();
    this.setState({
      body: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage(this.state)
    this.setState({
        body: ''
      })
  }

  scrollToBottom() {
    let bottom = document.getElementById('bottom');
    bottom.scrollIntoView({behavior: 'smooth'})
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentDidMount() {
    this.props.getGame(this.props.gameId)
    this.scrollToBottom();
  }

  render() {
    let messages;
    if (this.props.messages) {
      messages = this.props.messages.map((message, idx) => {
        return <ChatMessage key={idx} message={message}/>
      })
    }
    return (
      <div className='game-chat'>
          <section className='messages'>
            {messages}
            <div id='bottom'></div>
          </section>
        <form className='chat-form' onSubmit={this.handleSubmit}>
          Chat!
          <input
            type='text'
            className='chat-box'
            onChange={this.handleChange}
            value={this.state.body}
          />
          <input type='submit' value='Send' className='chat-send' />
        </form>
      </div>
    );
  };
};

export default GameChat;