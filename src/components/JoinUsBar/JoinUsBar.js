import { opacify } from "polished";
import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { setOpacity } from "react"
import "./JoinUsBar.css";

/*Attributo "color" per visualizzare la barra rossa (red) o blu (blue)*/
/*Default: red*/

/*Sistemare opacità*/

const blue = {
  backgroundColor: "#120068"
}

const red = {
  backgroundColor: "#fc3f1a"
}

const white = {
  backgroundColor: "#ffffff"
}

function handleColor_bar(color) {
  var style_bar = red;
  if(color == "blue"){
    style_bar=blue;
  }
  return style_bar;
}

function handleColor_button(color) {
  var style_button = white;
  if(color == "blue"){
    style_button=red;
  }
  return style_button;
}

export default class JoinUsBar extends Component {
  render() {
    console.log("Il colore della barra JoinUs è:", this.props.color)
    return (
        <div className="join_us_bar" style ={handleColor_bar(this.props.color)} >
            <h1 className="JSB_call_to_action">Become one of us!</h1>
            <button className="JSB_button" 
                    style ={handleColor_button(this.props.color)}
                    // onMouseEnter={()=> setOpacity(0.5)}
                    // onMouseLeave={()=> setOpacity(1)}
            >
              <Link to="/JoinUs" ></Link>
              Join us
            </button>
        </div>
    );
  }
}
