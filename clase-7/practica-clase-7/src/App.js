import React from "react";

const listaHola = ["HOLA", "HOLA", "HOLA", "MUNDO"];

class App extends React.Component {
  render() {
    return (
      <div>
        {listaHola.map((h, index) => (
          <h1 style={{ color: "blue", textAlign: "center" }} key={`id${index}`}>
            {h}
          </h1>
        ))}
      </div>
    );
  }
}

export default App;