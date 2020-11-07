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
      <div className="App">
        <label htmlFor="tranlator" className="App__label">
          Escribe lo que quieras traducir
          <textarea
            className="App__label--text"
            name="tranlator"
            id="tranlator"
            cols="60"
            rows="10"
            onChange={this.handleChange}
          ></textarea>
        </label>
      </div>
    );
  }
}

export default TextInput;
