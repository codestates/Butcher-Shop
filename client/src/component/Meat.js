import React, { useState } from 'react';
import './Meat.css';

export default function Meat ({source,price,name,handleimageClick}) {
    return (
        <div>
            <img src = {source} onClick={(event)=>handleimageClick(name)}/>
            <div>{price}</div>
            <div>상품명:{name}</div>
        </div>
    );
}