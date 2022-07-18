import React from 'react';

import './game-item.css';
import { GameCover } from '../../components/game-cover'
import { GameBuy } from '../../components/game-buy'
import { GameGenre } from '../../components/game-genre'

export const GameItem = ({ game }) => {
    console.log(game);
    return (
        <div className='game-item'>
            <GameCover image={game.image}/>
            <div className="game-iems_details">
                <span className='game-item_title'>{game.title}</span>
                <div className="game-item_genre">
                    {
                        game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)
                    }
                </div>
                <div className="game-item_buy">
                    <GameBuy game={game}/>
                </div>
            </div>
        </div>
    );
}
