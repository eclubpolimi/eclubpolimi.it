import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Hero.css'

export default class Hero extends Component {

    /* 
    Props:
        - (number) height: the height of the hero (in pixels)
        - (string) backgroundType: "img" or "video" based on backgroundAsset
        - (image/video) backgroundAsset: the asset for the background
        - (string) contentType: "img" or "string"
        - (image/string) content: the content of the hero
    */

    render() {
        return (
            <div className="hero" style={{height: this.props.height + "px"}}>
                <div className="hero-content">
                    {this.props.contentType === "img" ? <img className="hero-content-img" src={this.props.content} alt="Hero content"/> : <div class="hero-content-text">{this.props.content}</div>}
                </div>
                {this.props.backgroundType === 'img' ? <img className="hero-img" src={this.props.backgroundAsset} alt="Hero" /> : <div>Video soon</div>}
            </div>
        )
    }
}
