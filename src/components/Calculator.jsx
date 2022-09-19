import React, { useState } from "react";
import "./Calculator.css";
import { Container } from '@mui/material';

export default function Calculator() {
    const [num, setNum] = useState(0)
    const [oldNum, setOldNum] = useState(0)
    const [operator, setOperator] = useState(0)

    function inputNum(e) {
        if (num === 0) {
            setNum(e.target.value) // insere só o novo valor
        } else {
            setNum(num + e.target.value) // insere no 'num' os números anteriores + o novo valor
        }        
    }

    function clear() {
        setNum(0)
    }

    function porcentage() {
        setNum(num / 100)
    }

    function changeSign() {
        if(num > 0) {
            setNum(-num)
        } else {
            setNum(Math.abs(num))
        }
    }

    function operatorHandler(e) {
        let operatorInput = e.target.value
        setOperator(operatorInput) // insere no estado 'operator' qual operador
        setOldNum(num) // insere no estado oldNum o número atual(num)
        setNum(0) // insere no 'num' o '0'         
    }

    function calculate () {
        if (operator === '/') {
            setNum(oldNum / num)            
        } else if (operator === 'X') {
            setNum(oldNum * num)            
        } else if (operator === '-') {
            setNum(oldNum - num)            
        } else if (operator === '+') {
            setNum(parseFloat(oldNum) + parseFloat(num))            
        }
    }

  return (
    <Container maxWidth="xs">
      <div className="wrapper">
        <h1 id="result">{num}</h1>
        <button onClick={clear}>AC</button>
        <button onClick={changeSign}>+/-</button>
        <button onClick={porcentage}>%</button>
        <button className="orange" onClick={operatorHandler} value={'/'}>/</button>
        <button className="gray" onClick={inputNum} value={7}>7</button>
        <button className="gray" onClick={inputNum} value={8}>8</button>
        <button className="gray" onClick={inputNum} value={9}>9</button>
        <button className="orange" onClick={operatorHandler} value={'X'}>X</button>
        <button className="gray" onClick={inputNum} value={4}>4</button>
        <button className="gray" onClick={inputNum} value={5}>5</button>
        <button className="gray" onClick={inputNum} value={6}>6</button>
        <button className="orange" onClick={operatorHandler} value={'-'}>-</button>
        <button className="gray" onClick={inputNum} value={1}>1</button>
        <button className="gray" onClick={inputNum} value={2}>2</button>
        <button className="gray" onClick={inputNum} value={3}>3</button>
        <button className="orange" onClick={operatorHandler} value={'+'}>+</button>
        <button className="gray" id="zero" onClick={inputNum} value={0}>0</button>
        <button className="gray" onClick={inputNum} value={'.'}>,</button>
        <button onClick={calculate}>=</button>       
      </div>
    </Container>
  );
}
