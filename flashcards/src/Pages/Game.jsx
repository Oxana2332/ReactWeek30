import React, { useState, useEffect } from 'react'
import Card from '../components/Card/Card.jsx'
import '../style/game.css'
import data from '../data/data.json'

function Game() {
    const [words, setWords] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(() => {
        setWords(data)
    }, [])

    function handlerPrev() {
        let copyCount = count
        copyCount--
        copyCount < 0 ? setCount(count) : setCount(copyCount)
    }

    function handlerNext() {
        let copyCount = count
        copyCount++
        copyCount >= words.length ? alert('Карт больше нет.') : setCount(copyCount)
    }

    
    if (!words)
        return <h1>Loading...</h1>

    else return (
        <div className='conteinerCard'>
            <button className='button_prev' onClick={handlerPrev}>&#8249;</button>
            <Card key={words.id} item={words[count]} />
            <button className='button_next' onClick={handlerNext}>&#8250;</button>
        </div>
    )
}

export default Game

