import React, {Component} from 'react'
import 'bulma'
import Navbar from './Navbar'
import FullheightHero from './FullheightHero'

class Header extends Component {
  render() {
    const {onNavbarToggle, isNavbarExpanded} = this.props

    return(
      <React.Fragment>
        <Navbar 
          onNavbarToggle={onNavbarToggle}
          isNavbarExpanded={isNavbarExpanded}
        />
        <FullheightHero />
      </React.Fragment>
    )
  }
}

export default Header;