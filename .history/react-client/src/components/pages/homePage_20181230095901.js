import React, { Component } from 'react';
import Button from '../Buttons/button';
import Options from '../Options/options';
import Dropdown from '../Dropdown/dropdown';

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
          <div>
            <span className = "home-page-body-title">Find PG's Near You</span>
            <div className = "home-page-body-title-subtitle">Get a comfortable stay with all Ameneties</div>
          </div>
          <div className= "home-page-body-searchBar">
            <Dropdown text= "Location"/>
            <Dropdown text = "PG Type"/>
            <Dropdown text= "Guest"/>
            <Dropdown text = "Check-in"/>
            <Dropdown text = "Check-out"/>
          </div>

        </div>
        <div className="home-page-footer">
        </div>
      </div>
    )
  }
}

export default HomePage;