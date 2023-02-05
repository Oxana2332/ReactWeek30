import React, {useState} from 'react'
import { useEffect } from 'react'
import WordItem from '../components/WordItem/WordItem.jsx'
import AddNew from '../components/AddNew/AddNew.jsx'
import data from '../data/data.json'
import '../style/dictionary.css'
import '../style/variables.css'


function Home() {

const [words, setWords] = useState([]);

useEffect(() => {
    setWords(data)
}, [])

function editWordItem(english, transcription, russian, tags, id){
const resultEditWords = data.map(item=>{
    if (item.id === id){
        item.english = english
        item.transcription = transcription
        item.russian = russian
        item.tags = tags
        return item
    }
    return item
})
}

    return (
        <div className='dictionary'>
            <div className='dictionary_count'>
            <div className='dictionary_title' type="text" value='english'>english</div>
            <div className='dictionary_title' type="text" value='transcription'>transcription</div>
            <div className='dictionary_title' type="text" value='russian'>russian</div>
            <div className='dictionary_title' type="text" value='topic'>topic</div>
            </div>
            <AddNew/>
            {
                words.map((item)=>(
                    <WordItem key={item.id} item={{...item}} editWordItem={editWordItem} />
                )
                )
            }
        </div>
    )
}

export default Home
