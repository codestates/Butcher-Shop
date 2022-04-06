import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Login ({ handleResponseSuccess }) {
  const [loginInfo, setLoginInfo] = useState({
    userId: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const handleLogin = () => {
    if(!loginInfo.userId || !loginInfo.password) {
      setErrorMessage('아이디와 비밀번호를 입력하세요')
      return;
    }
    else {
      setErrorMessage('')
    }
    return axios.post('https://localhost:4000/signin',loginInfo).then((data)=>handleResponseSuccess())
  };
  return (
    
    <div className='LoginForm'>
        <center>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <span className='Login'>Login</span>
            </div>
            <div>
              <div className ='InputText'>
                <input type= "text" placeholder="아이디를 입력해 주세요." onChange={handleInputValue('userId')} />
              </div>
              <div className ='InputText'>
                <input type= "password" placeholder="패스워드를 입력해 주세요." onChange={handleInputValue('password')} />
              </div>
            </div>
            <div className ='SignBtn'>
              <Link to='/signup'>회원가입</Link>
          </div>
          <button className='LoginBtn' type='submit' onClick={handleLogin}>로그인</button>
          {errorMessage ? <div className='alert-box'>{errorMessage}</div> : null}
          </form>
        </center>
      </div>
  );
}
