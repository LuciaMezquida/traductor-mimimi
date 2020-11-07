import "../styleSheets/App.scss";
import React from "react";
import TextInput from "./TextInput";
import MIMIMITranslator from "./MIMIMITranslator";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.text = "";
    this.handleText = this.handleText.bind(this);
  }
  handleText(text) {
    this.text = text.replace(/[aáeéiíoóuú]/gi, "i");
    console.log("app: " + this.text);
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <TextInput handleInputText={this.handleText} />
        <MIMIMITranslator value={this.text} />
      </>
    );
  }
}

export default App;
