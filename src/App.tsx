import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Calculadora da Independencia Financeira</h1>
      <h2>Você pode se aposentar com </h2>
      <div>Quantidade de dinheiro necessária para aposentadoria: </div>
      <form>
        <label>
          Com qual salario deseja se aposentar?
          <input type="number" />
        </label>
        <br />
        <label>
          Idade atual
          <input type="number" />
        </label>
        <br />
        <label>
          Patrimonio atual
          <input type="number" />
        </label>
        <br />
        <label>
          Aporte mensais
          <input type="number" />
        </label>
        <div>
          <h2>Ajustes das taxas de retorno para dev test</h2>
          <label>Taxa de retorno</label>
        </div>
      </form>
    </div>
  );
}

export default App;
