import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <NavBar /> */}
          <Route name="home" exact path="/" component={HomePage} />
          {/* <Footer /> */}
        </div>
      </Router>
    )
  }
}

export default App;