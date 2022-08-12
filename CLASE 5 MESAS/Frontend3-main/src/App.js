import './App.css';
import Container from './Components/Conteiner';

function App() {
  const perritos = [
    {id: 1, nombre: "firulais", edad: "8", sexo: "f", raza: "caniche", tamaño: "pequeño"},
    {id: 2, nombre: "lasi", edad: "10", sexo: "m", raza: "doberman", tamaño: "grande"},
    {id: 3, nombre: "tobi", edad: "2", sexo: "f", raza: "chiguagua", tamaño: "pequeño"},
    {id: 4, nombre: "pequi", edad: "1", sexo: "m", raza: "pequines", tamaño: "pequeño"},
    {id: 5, nombre: "matias", edad: "5", sexo: "f", raza: "bulerrier", tamaño: "mediano"}
  ]


  return (
      <>
        <Container perritos={perritos}/>
      </>
  );
}

export default App;
