import React, { Component } from 'react';
import Link from './Link';

import texts from './texts';
import './menu.css';
import './language.css';

class App extends Component {
  constructor(props) {
    super(props);
    const locale = navigator.language || navigator.userLanguage;
    const language = locale.toLowerCase().indexOf('hu') < 0 ? 'en' : 'hu';
    this.state = {
      language: (localStorage && localStorage.getItem('language')) || language || 'en',
    }
  }

  setLanguage(e) {
    e.preventDefault();
    const language = e.target.id;
    localStorage && localStorage.setItem('language', language);
    this.setState({language: language});
  }

  getChildren() {
    return React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       text: this.getCurrentLanguage(),
     })
    );
  }

  getCurrentLanguage() {
    return texts[this.state.language];
  }

  render() {
    const text = this.getCurrentLanguage();
    document.title = text.title;

    return (
      <div>

        <div className="App">

          {this.getChildren()}

        </div>

        <div className="menu">
          {text.menus.map(m => <Link key={m.path} name={m.name} path={m.path} />)}
        </div>

        <div className="language-switcher">
          <a id="en" href="#" className={'en' === this.state.language ? 'active' : ''} onClick={this.setLanguage.bind(this)}>EN</a>
          <div className="separator">/</div>
          <a id="hu" href="#" className={'hu' === this.state.language ? 'active' : ''} onClick={this.setLanguage.bind(this)}>HU</a>
        </div>
        
      </div>
    );
  }
}

export default App;
