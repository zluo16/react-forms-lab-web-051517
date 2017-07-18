import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  changeHandler = (event) => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.maxChars - this.state.tweet.length}</p>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.tweet}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}

export default TwitterMessage;
