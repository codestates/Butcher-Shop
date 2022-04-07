import React, { useState } from 'react';
import './Meat.css';

export default function Meat ({source,price,name}) {
    return (
        <div>
            <img src = {source} />
            <div>{price}</div>
            <div>상품명:{name}</div>
        </div>
    );
}