import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these LIMITED summer items!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Soursop Coconut Mint Smoothie'
              label='Cold drinks'
              path='/products'
            />
            <CardItem
              src='images/img-6.jpg'
              text='Cherry Blossom Frappuccino'
              label='Cold drinks'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Vanilla Durian Milkshake'
              label='Cold drinks'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Watermelon Iced Coffee'
              label='Cold drinks'
              path='/products'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Dragonfruit Yogurt Parfait'
              label='Desserts'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;