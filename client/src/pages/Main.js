import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Main.css';
import image from './image/user.png'
import Meat from '../component/Meat.js'

export default function Main () {
    return (
        <div>
        <h1 id = 'main'>Bucher Shop</h1>
        <div className='userNav'>
            <img src = {image} className='useritem userimage'/>
            <Link to='/login' className='useritem'>로그인</Link>
            <div className='useritem'>로그 아웃</div>
            <input type='text' placeholder='검색창' className='useritem'></input>
        </div>
        <div className='meatNav'> 
            <div className='item item1'>소고기</div> 
            <div className='item item2'>돼지 고기</div> 
            <div className='item item3'>가공품</div>
        </div>
        <div className='meatList'>
        <Meat /> <Meat />
        <Meat />
        <Meat />
        </div>
        <footer>팀 이름: Bulgogi</footer>
        </div>
        
    );
}

