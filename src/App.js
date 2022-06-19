import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer/Index";
import SelectWrapper from "./components/Select";
import { Card } from "./components/Card";
import { FormLogin } from "./components/Formularios/FormLogin";
import { FormCadastro } from "./components/Formularios/FormCadastro";

function App() {
  return (
    <div className="app">
      <FormCadastro/>
    </div>
  );
}

export default App;
