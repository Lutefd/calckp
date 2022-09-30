import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const initialRetirementAge = Number(
    localStorage.getItem('retirementAge') || 0
  );
  const initialRetirementAmount = Number(
    localStorage.getItem('retirementAmount') || 0
  );
  const initialRetirementSalary = Number(
    localStorage.getItem('retirementSalary') || 0
  );
  const initialCurrentAge = Number(localStorage.getItem('currentAge') || 0);
  const initialCurrentAmount = Number(
    localStorage.getItem('currentAmount') || 0
  );
  const initialContributions = Number(
    localStorage.getItem('contributions') || 500
  );
  const initialPreVGROR = Number(localStorage.getItem('preVGROR') || 10.5);
  const initialPreVGYield = Number(localStorage.getItem('preVGYield') || 4);
  const initialPostVGROR = Number(localStorage.getItem('postVGROR') || 12.5);
  const initialPostVGYield = Number(localStorage.getItem('postVGYield') || 8);

  const [retirementAge, setRetirementAge] = useState(initialRetirementAge);
  const [retirementAmount, setRetirementAmount] = useState(
    initialRetirementAmount
  );
  const [retirementSalary, setRetirementSalary] = useState(
    initialRetirementSalary
  );
  const [currentAge, setCurrentAge] = useState(initialCurrentAge);
  const [currentAmount, setCurrentAmount] = useState(initialCurrentAmount);
  const [contributions, setContributions] = useState(initialContributions);
  const [preVGROR, setPreVGROR] = useState(initialPreVGROR);
  const [preVGYield, setPreVGYield] = useState(initialPreVGYield);
  const [postVGROR, setPostVGROR] = useState(initialPostVGROR);
  const [postVGYield, setPostVGYied] = useState(initialPostVGYield);

  return (
    <div className="App">
      <h1>Calculadora da Independencia Financeira</h1>
      <h2>Você pode se aposentar com </h2>
      <div>Quantidade de dinheiro necessária para aposentadoria: </div>
      <br />
      <form className="calcForm">
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
        </div>
        <label>
          Taxa de retorno sem VG
          <input type="number" />
        </label>
        <br />
        <label>
          Yield sem VG
          <input type="number" />
        </label>
        <br />
        <label>
          Taxa de retorno com VG
          <input type="number" />
        </label>
        <br />
        <label>
          Yield com VG
          <input type="number" />
        </label>
      </form>
    </div>
  );
}

export default App;
