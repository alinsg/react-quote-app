import React, {Component} from 'react'
import 'bulma'
import Navbar from './Navbar'
import FullheightHero from './FullheightHero'

class Header extends Component {
  render() {
    const {
      onNavbarToggle, 
      isNavbarExpanded, 
      onRandomButtonClick,
      title,
      content
    } = this.props

    return(
      <React.Fragment>
        <Navbar 
          title={title}
          content={content}
          onNavbarToggle={onNavbarToggle}
          isNavbarExpanded={isNavbarExpanded}
        />
        <FullheightHero 
          title={title}
          content={content}
          onRandomButtonClick={onRandomButtonClick}
        />
      </React.Fragment>
    )
  }
}

export default Header;