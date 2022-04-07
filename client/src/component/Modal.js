import React, { useState } from 'react';
import './Modal.css';
import Meat from './Meat.js';
import data from '../pages/image/data.js'

export default function Modal ({imageName,closeModal}) {
    const imagedata = data.filter((el)=> {
      if(el.name===imageName) {
          return el;
      }  
    })
    return (
        <div className="ModalBackground">
            <div className="Modal">
                <div>
                <img src = {imagedata[0].src} className = 'modalImage' />
                </div>
                <div>
                    {imageName}
                </div>
                <div>
                    {imagedata[0].price}
                </div>
                <div>
                <button className="recipeBtn">
                    레시피 보기 
                </button>
                </div>
                <div>
                <button className="buyBtn">
                    구매하기
                </button>
                </div>
                <div>
                <button className="closeBtn" onClick={closeModal}>
                    닫기
                </button>
                </div>
                
            </div>
        </div>
    )
}