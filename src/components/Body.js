import React, {Component} from 'react'
import '../App.css'
import 'bulma'

class Body extends Component {
  render() {
    return(
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="card">
            <header className="card-header has-text-centered">
              <p className="card-header-title">
                <em>Author name here</em>
              </p>
            </header>
            <div className="card-content">
              <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque quis nisl et aliquam. Integer porttitor sapien augue, id posuere diam sollicitudin et. Pellentesque imperdiet ac odio eu blandit
              </div>
            </div>
            <footer className="card-footer has-text-centered">
              <a className="card-footer-item button is-link is-outlined">
                <span><i className="fas fa-random"></i></span>Random quote
              </a>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}

export default Body