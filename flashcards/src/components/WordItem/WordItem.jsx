import React, { useState } from 'react'
import { useEffect } from 'react';
import './wordItem.css'

function WordItem({ item, editWordItem }) {
    const { english, transcription, russian, tags, id } = item;
    const [openInput, setOpenInput] = useState(false);
    const [valueEnglish, setValueEnglish] = useState('');
    const [valueTranscription, setValueTranscription] = useState('');
    const [valueRussian, setValueRussian] = useState('');
    const [valueTags, setValueTags] = useState('');

    useEffect(()=>{
        setValueEnglish(english)
        setValueTranscription(transcription)
        setValueRussian(russian)
        setValueTags(tags)
    }, [item])

    function handlerEnglish(e){
        setValueEnglish(e.target.value)
    }
    function handlerTranscription(e){
        setValueTranscription(e.target.value)
    }
    function handlerRussian(e){
        setValueRussian(e.target.value)
    }
    function handlerTags(e){
        setValueTags(e.target.value)
    }

    function saveWordItem(){
        editWordItem(valueEnglish,valueTranscription,valueRussian,valueTags,id)
        setOpenInput(!openInput)
    }

    function cancelWordItem(){
        setOpenInput(!openInput)
        setValueEnglish(english)
        setValueTranscription(transcription)
        setValueRussian(russian)
        setValueTags(tags)
    }

    return (
        <div>
            {openInput ? (<div className='wordItem'>
                <input className='word_input' type="text" value={valueEnglish} onChange={handlerEnglish} />
                <input className='word_input' type="text" value={valueTranscription} onChange={handlerTranscription} />
                <input className='word_input' type="text" value={valueRussian} onChange={handlerRussian} />
                <input className='word_input' type="text" value={valueTags} onChange={handlerTags} />
                <button className='button save' onClick={saveWordItem}></button>
                <button className='button cancel' onClick={cancelWordItem}></button>
            </div>) : (
                <div className='wordItem'>
                    <div className='word'>{valueEnglish}</div>
                    <div className='word'>{valueTranscription}</div>
                    <div className='word'>{valueRussian}</div>
                    <div className='word'>{valueTags}</div>
                    <button className='button edit' onClick={()=>(setOpenInput(!openInput))}></button>
                    <button className='button del'></button>
                </div>)}
        </div>
    )
}

export default WordItem


