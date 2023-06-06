import React, { useEffect } from 'react';
import Dice from "./components/Dice";
import "./App.css";
import {nanoid} from 'nanoid';
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function App() {
  const [arrNum, setArrNum] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [rolls, setRolls] = React.useState(0);

  React.useEffect(() => {
    const allHeld = arrNum.every(n => n.isHeld);
    const firstValue = arrNum[0].value
    const allValues = arrNum.every(num => num.value === firstValue)

    if(allHeld && allValues) {
      setTenzies(true);
    }

  }, [arrNum]);

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random()* 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const newArr = []
    for(let i = 0; i < 10;i++) {
      newArr.push({
        value: Math.ceil(Math.random()* 6),
        isHeld: false,
        id: nanoid()
      });
    }  
    return newArr;
  }
  
  function rollDice() {
    setArrNum(dice => dice.map(data => {
      if(tenzies) {
        setArrNum(allNewDice);
        setTenzies(false);
        setRolls(0)
      }
      return data.isHeld ? data : generateNewDice()
    }));

    //updaring rolls
    setRolls(rolls + 1);
  } 

  function holdDice(id) {
    setArrNum(prevArrNum => prevArrNum.map(data => data.id === id ? {...data, isHeld: !data.isHeld} : {...data}))
  }

  let diceElements = arrNum.map(num => <Dice key={num.id} id={num.id} value={num.value} isHeld={num.isHeld} holdDice={holdDice} />);

  return (
    <div className="App">
      <main>
          <p className='title-information'>Roll untill all dice are the same. Click each dice to freeze it at its current value between rolls</p>
        <div className="dice-container">
          {diceElements}
          {tenzies && <Confetti />}
          <button className='roll-dice' onClick={rollDice}>{tenzies ? 'New Game' : 'Roll'}</button>
        </div>
          <div>Current rolls: {rolls}</div>
      </main>
    </div>
  );
}

export default App;
