import "../styleSheets/App.scss";

function App() {
  return (
    <div className="App">
      <label htmlFor="tranlator" className="App__label">
        Escribe lo que quieras traducir
        <textarea
          className="App__label--text"
          name="tranlator"
          id="tranlator"
          cols="60"
          rows="20"
        ></textarea>
      </label>
    </div>
  );
}

export default App;
