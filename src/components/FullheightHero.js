import React, {Component} from 'react'
import 'bulma'
import '../App.css'

class FullheightHero extends Component {
  render() {
    return(
      <section className="hero is-link is-fullheight-with-navbar header-image">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">
              Random Quote Here
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default FullheightHero