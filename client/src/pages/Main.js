import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

export default function Main () {
    return (
        <div className='TopMainPage'>

            <div className='TopMain'>
                <div className='BackgroundImg'></div>
                <div className='Main'>Bucher Shop</div>
            </div>

            <div className='UserNav'>
                <div className='UserImage'></div>
                <Link to='/login' className='UserItem'>로그인</Link>
                <Link to='/login' className='UserItem'>로그아웃</Link>
                <input type='search' spellCheck="true"  placeholder='무엇을 검색할까요?' className='SeachItem'></input>
            </div>

            <div className='MeatNav'>
                <div class="ItemMenu">소고기</div>
                <div class="ItemMenu">돼지고기</div>
                <div class="ItemMenu">가공품</div>
            </div>

            <div className='MeatList'>
                <div>Creat Table 6*3</div>
            </div>
        </div>
        
    );
}

