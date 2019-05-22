import React, { Component } from "react";

export default class Form extends Component {
  state = {
    text: "",
    invalid: false,
    url: ""
  };
  render() {
    const { invalid, url } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleTyping} required />
          <button>submit</button>
          {invalid && <div>not web address!!!!</div>}
          {url && <div>finding all broken urls in {url}</div>}
        </form>
      </div>
    );
  }
  handleTyping = e => {
    this.setState({ text: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    if (
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/.test(
        text
      )
    ) {
      this.setState({ invalid: false, url: this.checkHTTPS(text) });
    } else {
      this.setState({ invalid: true });
    }
  };
  checkHTTPS = string => {
    if (/^https/.test(string)) {
      return string;
    } else {
      if (/^http/.test(string)) {
        return (string = string.slice(0, 4) + "s" + string.slice(4));
      } else {
        return (string = "https://" + string);
      }
    }
  };
}
