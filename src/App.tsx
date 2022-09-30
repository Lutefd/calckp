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
  const [postVGYield, setPostVGYield] = useState(initialPostVGYield);

  return (
    <div className="App">
      <h1>Calculadora da Independencia Financeira</h1>
      <h2>Você pode se aposentar em {retirementAge} anos</h2>
      <div>
        Quantidade de dinheiro necessária para aposentadoria: {retirementAmount}
      </div>
      <br />
      <form className="calcForm">
        <label>
          Com qual salario deseja se aposentar?
          <input
            type="number"
            value={retirementSalary}
            onChange={(e) => setRetirementSalary(parseInt(e.target.value) || 0)}
          />
        </label>
        <br />
        <label>
          Idade atual
          <input
            type="number"
            value={currentAge}
            onChange={(e) => setCurrentAge(parseInt(e.target.value) || 0)}
          />
        </label>
        <br />
        <label>
          Patrimonio atual
          <input
            type="number"
            value={currentAmount}
            onChange={(e) => setCurrentAmount(parseInt(e.target.value) || 0)}
          />
        </label>
        <br />
        <label>
          Aporte mensais
          <input
            type="number"
            value={contributions}
            onChange={(e) => setContributions(parseInt(e.target.value) || 0)}
          />
        </label>
        <div>
          <h2>Ajustes das taxas de retorno para dev test</h2>
        </div>
        <label>
          Taxa de retorno sem VG
          <input
            type="number"
            value={preVGROR}
            onChange={(e) => setPreVGROR(parseInt(e.target.value) || 10.5)}
          />
        </label>
        <br />
        <label>
          Yield sem VG
          <input
            type="number"
            value={preVGYield}
            onChange={(e) => setPreVGYield(parseInt(e.target.value) || 4)}
          />
        </label>
        <br />
        <label>
          Taxa de retorno com VG
          <input
            type="number"
            value={postVGROR}
            onChange={(e) => setPostVGROR(parseInt(e.target.value) || 12.5)}
          />
        </label>
        <br />
        <label>
          Yield com VG
          <input
            type="number"
            value={postVGYield}
            onChange={(e) => setPostVGYield(parseInt(e.target.value) || 8)}
          />
        </label>
      </form>
    </div>
  );
}

export default App;
