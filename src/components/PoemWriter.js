import React from 'react';

const wordCounter = (line) => line.split(" ").filter(l => l).length

const isValidPoem = (poem) => {
  if (poem && poem.split("\n").length >= 3) {
    let lines = poem.split("\n")
    if (!(wordCounter(lines[0]) === 5 && wordCounter(lines[1]) === 3 && wordCounter(lines[2]) === 5)) {
      return false
    } else {
      return true
    }
  }
  return false
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: true
    };
  }

  poemSetter = (event) => {
    this.setState({
      content: event.target.value,
      isValid: isValidPoem(event.target.value)
    })
    let content = event.target
    .value
    console.log(this.state.isValid);
    console.log(content);
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.poemSetter}
        />
        {!this.state.isValid &&
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
