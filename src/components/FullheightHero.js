import React, {Component} from 'react'
import Body from './Body'
import 'bulma'
import '../App.css'

class FullheightHero extends Component {
  render() {
    const {onRandomButtonClick, title, content} = this.props

    return(
      <section className="hero is-link is-fullheight-with-navbar header-image">
        <Body 
          onRandomButtonClick={onRandomButtonClick}
          title={title}
          content={content}
        />
      </section>
    )
  }
}

export default FullheightHero