import React, {Component} from 'react'
import 'bulma'
import '../App.css'

class Navbar extends Component {
  render() {
    const {onNavbarToggle, isNavbarExpanded} = this.props

    return(
      <nav className="navbar is-primary">
        <div className="navbar-brand">
          <a className="navbar-item" href="#placeholder" target="_blank" rel="noopener noreferrer">
            <h1 className="title" style={{color: "white"}}>ALINSG</h1>
          </a>
          <div 
            onClick={onNavbarToggle}
            className={`navbar-burger burger ${isNavbarExpanded}`}
            data-target="navbarElements"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarElements" className={`navbar-menu ${isNavbarExpanded}`}>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-info"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/alinsg"
                  >
                    <span className="icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                    <span>
                      Tweet Quote
                    </span>
                  </a>
                </p>
                <p className="control">
                  <a 
                    className="button is-link" 
                    href="https://www.freecodecamp.org/alinsg"
                  >
                    <span className="icon">
                      <i className="fab fa-tumblr"></i>
                    </span>
                    <span>Share on Tumblr</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar