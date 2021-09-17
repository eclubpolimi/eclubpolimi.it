import React, { Component } from "react";
import "./Description.css";

function handleEmptiness(txt) {
  const example_text = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, qui dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore."
  if(typeof(txt) != "undefined"){
    return txt
  }
  return example_text
}

export default class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: handleEmptiness(this.props.text)
    };
  }
  render() {
    return (
      <div className="description_bar">
        <h1 className="description_title"> La nostra missione </h1>
        <p className="description_paragraph" >
          {this.state.text}
        </p>
      </div>
    );
  }
}
