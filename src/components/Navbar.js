import React, {Component} from 'react'
import 'bulma'
import '../App.css'

class Navbar extends Component {
  render() {
    const {onNavbarToggle, isNavbarExpanded, title, content} = this.props
    const textToTweet = `${content} - ${title}`
    const twitterIntentUrl = `https://twitter.com/intent/tweet?text=${textToTweet}`
    const tumblrIntentUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${title}&content=${content}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`

    return(
      <nav className="navbar is-primary">
        <div className="navbar-brand">
          <a className="navbar-item" href="#placeholder" target="_blank" rel="noopener noreferrer">
            <h1 className="title" style={{color: "white"}}>Quotes</h1>
          </a>
          <div 
            onClick={onNavbarToggle}
            className={`navbar-burger burger ${isNavbarExpanded}`}
            data-target="navbarElements"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarElements" className={`navbar-menu ${isNavbarExpanded}`}>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-info twitter-share-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={twitterIntentUrl}
                  >
                    <span className="icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                    <span>
                      Tweet Quote
                    </span>
                  </a>
                </p>
                <p className="control">
                  <a 
                    className="button is-link tumblr-share-button" 
                    href={tumblrIntentUrl}
                  >
                    <span className="icon">
                      <i className="fab fa-tumblr"></i>
                    </span>
                    <span>Share on Tumblr</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar