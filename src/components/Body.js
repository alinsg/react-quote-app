import React, {Component} from 'react'
import '../App.css'
import 'bulma'

class Body extends Component {
  render() {
    const {onRandomButtonClick, title, content} = this.props

    return(
      <div className="hero-body">
        <div className="container has-text-centered">
        <article className="message is-primary">
          <div className="message-header">
            <p>{title}</p>
            <a 
              className="button is-rounded"
              onClick={onRandomButtonClick}
              href="#placeholder"
            >
              <span><i className="fas fa-random"></i></span>New Quote
            </a>
          </div>
          <div className="message-body">
            {content}
          </div>
        </article>
        </div>
      </div>
    )
  }
}

export default Body