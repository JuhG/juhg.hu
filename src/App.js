import React, { Component } from 'react';
import texts from './texts';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    let locale = navigator.language || navigator.userLanguage;
    let language = locale.toLowerCase().indexOf('hu') < 0 ? 'en' : 'hu';
    this.state = {
      language: (localStorage && localStorage.getItem('language')) || language || 'en',
    }
  }
  setLanguage(e) {
    e.preventDefault();
    let language = e.target.id;
    localStorage && localStorage.setItem('language', language);
    this.setState({language: language});
  }
  render() {
    let text = texts[this.state.language];
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">{text.header}</h1>
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
