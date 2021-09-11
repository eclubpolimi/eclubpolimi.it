import React, { Component } from "react";
import "./LessonsPIA.css";
import icon from '../../assets/img-lessons-pia-346x220.jpg';

export default class LessonsPIA extends Component {
  render () {
    return (
      <div> {/* External div */}
        <div className="lessons-pia-tabs">
          <h1 className="lessons-pia-title">Lezioni</h1>
          <Tabs>
            <Tab label="Lezione 1">
              <div>
                <h2>Lezione 1</h2>
                <div className="lessons-pia-description-container">
                  <div className="lessons-pia-image"><img src={icon} alt="Passion in Action lesson image" width="100%" height="100%"></img></div>
                  <div className="lessons-pia-description">TODO: Inserire descrizione</div>
                </div>
              </div>
            </Tab>
            <Tab label="Lezione 2">
              <div>
                <h2>Lezione 2</h2>
                <div className="lessons-pia-description-container">
                  <div className="lessons-pia-image"><img src={icon} alt="Passion in Action lesson image" width="100%" height="100%"></img></div>
                  <div className="lessons-pia-description">TODO: Inserire descrizione</div>
                </div>
              </div>
            </Tab>
            <Tab label="Lezione 3">
              <div>
                <h2>Lezione 3</h2>
                <div className="lessons-pia-description-container">
                  <div className="lessons-pia-image"><img src={icon} alt="Passion in Action lesson image" width="100%" height="100%"></img></div>
                  <div className="lessons-pia-description">TODO: Inserire descrizione</div>
                </div>
              </div>
            </Tab>
            <Tab label="Lezione 4">
              <div>
                <h2>Lezione 4</h2>
                <div className="lessons-pia-description-container">
                  <div className="lessons-pia-image"><img src={icon} alt="Passion in Action lesson image" width="100%" height="100%"></img></div>
                  <div className="lessons-pia-description">TODO: Inserire descrizione</div>
                </div>
              </div>
            </Tab>
            <Tab label="Lezione 5">
              <div>
                <h2>Lezione 5</h2>
                <div className="lessons-pia-description-container">
                  <div className="lessons-pia-image"><img src={icon} alt="Passion in Action lesson image" width="100%" height="100%"></img></div>
                  <div className="lessons-pia-description">TODO: Inserire descrizione</div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div> /* End external div */
    )
  }
}

class Tabs extends React.Component{
  state = {
    activeTab: this.props.children[0].props.label
  }
  changeTab = (tab) => {
    this.setState({activeTab: tab});
  };
  render () {
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, child => {
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}
        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
        <div className="lessons-pia-tab-content">{content}</div>
      </div>
    );
  }
}

const TabButtons = ({buttons, changeTab, activeTab}) => {
  return (
    <div className="lessons-pia-tab-buttons">
    {buttons.map(button => {
       return <button className={button === activeTab? 'lessons-pia-active': ''} onClick={()=>changeTab(button)}>{button}</button>
    })}
    </div>
  )
}

const Tab = props => {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}
