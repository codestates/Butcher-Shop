import meat from '../pages/image/meat.png';
import React, { useState } from 'react';
import './Meat.css';

export default function Meat () {
    return (
        <div>
            <img src = {meat} />
            <div>가격:50000원</div>
            <div>상품명:한우sss급</div>
        </div>
    );
}