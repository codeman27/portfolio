import React, { Component } from 'react'
import Home from './components/Home.js'
import {BrowserRouter as Switch, Route, Redirect} from 'react-router-dom'
import PortfolioDetail from './components/PortfolioDetail.js'
import textObject from './text_content.js'
import bestaurants from './images/bestaurants.png'
import matching from './images/memory_game.png'
import pomodoro from './images/pomodoro_clock.png'

class App extends Component {
  state = {
    links: ['About', 'Portfolio', 'Contact', 'Blog'],
    aboutRef: React.createRef(),
    portfolioRef: React.createRef(),
    contactRef: React.createRef(),
    projects: [{title:'Bestaurants', image:bestaurants, link:'bestaurants', text:textObject.bestaurants, outsideLink:'https://bestaurants.io/'}
              ,{title:'Matching Game', image:matching, link:'matching', text:textObject.matchingGame}
              ,{title:'Pomodoro Clock', image:pomodoro, link:'pomodoro', text:textObject.pomodoro}],
    currentProject: ''
  }

  findClickedProject = (project) => {
    this.setState({currentProject: project})
  }

  render() {
    return (
        <div>
          <Switch>
            <Route exact path='/' >
              <Home links={this.state.links}
                aboutRef={this.state.aboutRef}
                portfolioRef={this.state.portfolioRef}
                contactRef={this.state.contactRef}
                projects={this.state.projects}
                findClickedProject={this.findClickedProject}/>
            </Route>
            <Route path={`/${this.state.currentProject.link}`}>
              <PortfolioDetail currentProject={this.state.currentProject}/>
            </Route>
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
    )
  }
}

export default App
