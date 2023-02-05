import React, {useState} from 'react'
import './card.css'
import '../../style/variables.css'


function Card({item}) {
    const {english, transcription, russian} = item;

    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
    setPressed(!pressed);
};

return (
    <div>
{item ? (
        <div className='card'>
        <h1 className='card_title'>{english}</h1>
        <p className='card_text'>{transcription}</p>
        <h2 onClick={handleChange} className={pressed ? 'card_text__ru' : 'card_button'}>{pressed ? russian :"Показать перевод"}</h2>
    </div>
) : (
<div className='card'>
            <h1 className='card_title'>turquoise</h1>
            <p className='card_text'>[ ˈtɜːkwɔɪz ]</p>
            <h2 onClick={handleChange} className={pressed ? 'card_text__ru' : 'card_button'}>{pressed ? 'бирюзовый' :"Показать перевод"}</h2>
        </div>
    )
}
</div>)
}

export default Card