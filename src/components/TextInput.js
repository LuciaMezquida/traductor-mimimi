import React from "react";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.value = "";
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    console.log("textInput");
    this.value = ev.currentTarget.value;
    this.props.handleInputText(this.value);
    this.forceUpdate();
  }
  render() {
    return (
      <label htmlFor="tranlator" className="App__label">
        Expresa aquí tu opinión:
        <textarea
          className="App__label--text"
          name="tranlator"
          id="tranlator"
          cols="30"
          rows="10"
          onChange={this.handleChange}
        ></textarea>
      </label>
    );
  }
}

export default TextInput;
