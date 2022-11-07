import React from 'react';
import '../Style/cards.css';
const Card = ({item}) => {
    const { id, title, description, price, stock, brand, category, thumbnail } = item;
    return (
    <>
            <div className='cards'>
                <div className='image-box'>
                    <img src={item.thumbnail} alt="image" />
                </div>
                <div className='details'>
                    <div>
                        <p> {id}</p>
                        <p> {title}</p>
                        <p> {description}</p>
                        <p> {price}US$</p>
                        <p> {stock}</p>
                        <p>{brand}</p>
                        <p> {category}</p>

                        <button>Add to cart</button>
                    </div>

                </div>
                </div>
            </>

            )
}

            export default Card;
