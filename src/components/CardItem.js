import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Set up for {@link Cards} components  
 * @param {*} props path, text, img src, label
 * @returns the HTML setup for a card Component.
 */
function CardItem(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img src={props.src} alt="Banking" 
                        className='cards__item__img'/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
