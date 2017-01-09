import React, { Component } from 'react';
import texts from './texts';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: localStorage.getItem('language') || 'en'
    }
  }
  setLanguage(e) {
    e.preventDefault();
    let language = e.target.id;
    localStorage.setItem('language', language)
    this.setState({language: language});
  }
  render() {
    let text = texts[this.state.language];
    return (
      <div className="App">
        <div className="App-header">
          <p className="App-title">{text.title}</p>
          <h1 className="App-title App-name">{text.name}</h1>
        </div>
        <p className="App-text">{text.text}</p>
        <p className="App-text">
          <a href="mailto:me@juhg.hu">
            {text.link}
          </a>
        </p>
        <div className="language-switcher">
          <a id="en" href="#" className={'en' === this.state.language ? 'active' : ''} onClick={this.setLanguage.bind(this)}>EN</a>
          <div>/</div>
          <a id="hu" href="#" className={'hu' === this.state.language ? 'active' : ''} onClick={this.setLanguage.bind(this)}>HU</a>
        </div>
      </div>
    );
  }
}

export default App;
