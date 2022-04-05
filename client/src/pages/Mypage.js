import React from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

function Mypage (props) {
  /* TODO : props로 받은 유저정보를 화면에 표시하세요. */
  return (
    <div>
      <center>
        <h1>Mypage</h1>
        <div className='username'>{/* 이름 */}</div>
        <div className='email'>{/* 이메일 */}</div>
        <div className='mobile'>{/* 전화번호 */}</div>
        <button className='btn btn-logout' onClick={handleLogout}>
          logout
        </button>
      </center>
    </div>
  );
}

export default Mypage;
