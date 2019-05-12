import React, {Component} from 'react'
import Header from './components/Header'

class App extends Component {
  state = {
    isNavbarExpanded: ""
  }

  handleNavbarToggle = () => {
    if(this.state.isNavbarExpanded) {
      this.setState({
        isNavbarExpanded: ""
      })
    } else {
      this.setState({
        isNavbarExpanded: "is-active"
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header 
          onNavbarToggle={this.handleNavbarToggle}
          isNavbarExpanded={this.state.isNavbarExpanded}
        />
      </React.Fragment>
    )
  }
}

export default App;