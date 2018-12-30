import React, { Component } from 'react';
import Button from '../Buttons/button';
import Options from '../Options/options';

class HomePage extends Component {
  render() {
    return (
      <div className= "home-page">
        <div className= "home-page-header">
          <div className = "home-page-header-title">SEARCH PG</div>
          <div className = "home-page-header-options">
            <Button text = "LOGIN"/>
            <Button text = "SIGNUP"/>
            <Options />
          </div>
        </div>
        <div className= "home-page-body">
        </div>
        <div className="home-page-footer">
        </div>
      </div>
    )
  }
}

export default HomePage;