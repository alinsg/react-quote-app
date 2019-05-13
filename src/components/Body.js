import React, {Component} from 'react'
import '../App.css'
import 'bulma'

class Body extends Component {
  render() {
    const {onRandomButtonClick, title, content} = this.props

    return(
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="card">
            <header className="card-header has-text-centered">
              <p className="card-header-title">
                <em>{title}</em>
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                {content}
              </div>
            </div>
            <footer className="card-footer has-text-centered">
              <a 
                className="card-footer-item button is-link is-outlined"
                onClick={onRandomButtonClick}
              >
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