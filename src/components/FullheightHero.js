import React, {Component} from 'react'
import Body from './Body'
import 'bulma'
import '../App.css'

class FullheightHero extends Component {
  render() {
    return(
      <section className="hero is-link is-fullheight-with-navbar header-image">
        <Body />
      </section>
    )
  }
}

export default FullheightHero