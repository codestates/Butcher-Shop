import React, { useState } from 'react';
import './Meat.css';

export default function Meat ({source,price,name,handleimageClick}) {
    return (
        <div>
            <img className='ModalMeat' src = {source} onClick={(event)=>handleimageClick(name)}/>
            <div className='ModalName'>상품명 : {name}</div>
            <div className='ModalName'>가격 : {price}원</div>
        </div>
    );
}