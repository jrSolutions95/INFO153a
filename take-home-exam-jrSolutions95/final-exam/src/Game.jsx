import React from 'react'
import { useState } from 'react'

function Game() {
    const [number,setNumber] = useState(0)
    
    const fetchNewNumber = () => {//fetching new number from API
        fetch(`https://www.randomnumberapi.com/api/v1.0/random?min=0&max=10`)
        .then(response => response.json())
        .then(data => {
            console.log("Data:",data[0])//used for debugging
            checkSum(data[0])
        }).catch(error => {
            console.log("Error wehn fetching next number",error)
        })
    }
    const checkSum = (newNumber) => {
        const sum = number + newNumber
        if(sum >100){
            alert(`Unfortunately you lost: the sum ${sum}  is greater than 100`)
            setNumber(0)//reset number in state to 0
        } else{
            setNumber(sum)//update the state
        }
    }
    const stopGame = () => {
        alert(`Congratulations: your score is ${number}`)
        setNumber(0)
    }

  return (
    <div className="container">
      <div className="current-sum">
        Current Sum
      </div>
        <h1 className="sum">{number}</h1>
      <div className="button-container">
        <button className="start-button" onClick={fetchNewNumber}>Add another number</button>
        <button className="stop-button" onClick={stopGame}>Stop </button>
      </div>
    </div>
  )
}

export default Game
