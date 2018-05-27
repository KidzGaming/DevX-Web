import React from 'react';
import axios from 'axios';

export default class Post extends React.Component {
  state = {
    text: '',
  }

  handleChange = event => {
    this.setState({ text: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const text = {
      text: this.state.text
    };

    axios.post(`http://localhost:3500/posts/new`, { text })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Post Text:
            <input type="text" name="text" onChange={this.handleChange} />
          </label>
          <button type="submit">Post</button>
        </form>
      </div>
    )
  }
}