import React, {Component} from 'react'
import Header from './components/Header'

class App extends Component {
  state = {
    url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
    title: "Stan Lee",
    content: "If you have an idea that you genuinely think is good, don’t let some idiot talk you out of it.",
    isNavbarExpanded: "",
    error: ""
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

  async getQuote() {
    try {
      const proxyUrl = "https://big-okra.glitch.me/"
      const data = await fetch(proxyUrl + this.state.url)
      const jsonData = await data.json()
      if(jsonData.length === 0) {
        this.setState(()=> {
          return {error: "quote API not working at the moment"}
        })
      } else {
        this.setState({
          title: jsonData[0].title,
          content: jsonData[0].content
        })
        this.stripHtmlFromContent(this.state.content)
      }
    } catch(error) {
      console.log(error)
    }
  }

  handleRandomButtonClick = (event) => {
    event.preventDefault()
    this.getQuote()
  }

  stripHtmlFromContent = (content) => {
    const strippedContent = content.replace(/<(?:.|\n)*?>/gm, '')
                                    .replace(/(&#[0-9];)/g, '\'')
    this.setState({
      content: strippedContent
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header 
          title={this.state.title}
          content={this.state.content}
          onRandomButtonClick={this.handleRandomButtonClick}
          onNavbarToggle={this.handleNavbarToggle}
          isNavbarExpanded={this.state.isNavbarExpanded}
        />
      </React.Fragment>
    )
  }
}

export default App;