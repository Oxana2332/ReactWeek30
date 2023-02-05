import React, { useState } from 'react'
import TrainingMode from '../TrainingMode/TrainingMode.jsx'
import Dictionary from '../Dictionary/Dictionary.jsx'
import './mainPage.css'

function MainPage() {
    const [mainpage, setMain] = useState(true);
    const [dictionary, setDictionary] = useState(false);
    const [trainingMode, setTrainingMode] = useState(false);

    const openDictionary = () => {
        setMain(!mainpage);
        setDictionary(!dictionary);
    }

    const openTrainingMode = () => {
        setMain(!mainpage);
        setTrainingMode(!trainingMode);
    }

    
    if (mainpage) {
        return (
            <div className="main">
                <button className="main_element" onClick={openDictionary}>Dictionary</button>
                <button className="main_element" onClick={openTrainingMode}>TrainingMode</button>
            </div>
        )
    }
    if (dictionary) {
        return <Dictionary />
    }

    if (trainingMode) {
        return <TrainingMode />
    }
}

export default MainPage

