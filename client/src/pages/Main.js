import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Main.css';
import Meat from '../component/Meat.js'
import data from './image/data.js'

export default function Main () {
    return (
        <div>
        <h1 id = 'main'>Bucher Shop</h1>
        <div className='userNav'>
            <img src = {data[9].src} className='useritem userimage'/>
            <Link to='/login' className='useritem'>로그인</Link>
            <div className='useritem'>로그 아웃</div>
            <input type='text' placeholder='검색창' className='search'></input>
        </div>
        <div className='meatNav'> 
            <div className='item item1'>소고기</div> 
            <div className='item item2'>돼지 고기</div> 
            <div className='item item3'>가공품</div>
        </div>
        <div className='meatList'>
        <Meat source = {data[0].src} price = {data[0].price} name = {data[0].name}/>
        <Meat source = {data[1].src} price = {data[1].price} name = {data[1].name}/>
        <Meat source = {data[2].src} price = {data[2].price} name = {data[2].name}/>
        </div>
        <div className='meatList2'>
        <Meat source = {data[3].src} price = {data[3].price} name = {data[3].name}/> 
        <Meat source = {data[4].src} price = {data[4].price} name = {data[4].name}/> 
        <Meat source = {data[5].src} price = {data[5].price} name = {data[5].name}/>
        </div>
        <div className='meatList3'>
        <Meat source = {data[6].src} price = {data[6].price} name = {data[6].name}/>
        <Meat source = {data[7].src} price = {data[7].price} name = {data[7].name}/>
        <Meat source = {data[8].src} price = {data[8].price} name = {data[8].name}/>
        </div>
        <footer>팀 이름: Bulgogi</footer>
        </div>
        
    );
}

