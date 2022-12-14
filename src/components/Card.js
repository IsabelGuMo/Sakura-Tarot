import React from 'react';
import { useState } from 'react';
import FrontCard from './FrontCard';
import BackCard from './BackCard';
import NotFound from './NotFound';
import NotfoundBack from './NotfoundBack';

export default function Card({card, selectedCards, setSelectedCards}) {
    const [showFront, setShowFront] = useState(true);

    const onClickCard = () => {
        setShowFront(!showFront);
        setSelectedCards([...selectedCards, card])  
    };

    return (
        <div className={showFront ? "card flip-exit" : "card flip-exit-done"}>
            <div className='card-front' onClick={onClickCard}>
            {
                card.cardsReverse.clowReverse ? (
                    <FrontCard card={card} />
                ) : <NotFound card={card} />
            }
                
            </div>
            <div className='card-back'>
            {
                card.clowCard ? (
                    <BackCard card={card} />
                ) : <div>
                        <NotfoundBack card={card} />
                        <p>{card.spanishName}</p>
                    </div>
            }
                
            </div>
        </div>
    )
}
