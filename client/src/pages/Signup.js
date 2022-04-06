import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Signup () {
  const [userinfo, setuserinfo] = useState({
    email: '',
    password: '',
    username: '',
    userId: '',
    mobileHead: '',
    mobileBody: '',
    birthdayYear:'',
    birthdayMonth:'',
    birthdayDay:'',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  const handleSignup = () => {
    if(!userinfo.email || !userinfo.password || !userinfo.username || !userinfo.mobile) {
      setErrorMessage('모든 항목은 필수입니다');
      console.log(errorMessage)
      return;
    }
    else {
      setErrorMessage('');
    }
    return axios.post("https://localhost:4000/signup",userinfo).then((res)=> history.push('/'))
  };
  return (
    <div className='main'>
      <center className='context'>
        <div className='line'></div>
        <h1>회원 정보 입력</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <table>
            <tr>
              <td className='item-name'>이름</td>
              <td><input type='text' onChange={handleInputValue('username')} /></td> 
            </tr>
            <tr>
              <td className='item-name'>아이디</td>
              <td><input type='text' onChange={handleInputValue('userId')} /></td>
            </tr>
          <tr>
            <td className='item-name'>생년월일</td>
            <input type='text' className='birthday' onChange={handleInputValue('birthdayYear')} />
            <input type='text' className='birthday' onChange={handleInputValue('birthdayMonth')} />
            <input type='text' className='birthday' onChange={handleInputValue('birthdayDay')} />
          </tr>
          <tr>
            <td className='item-name'>비밀번호</td>
            <td>
              <input
                type='password'
                onChange={handleInputValue('password')}
              />
            </td>
          </tr>
          <tr>
            <td className='item-name'>비밀번호 확인</td>
            <td>
            <input
              type='password'
              onChange={handleInputValue('password')}
            />
            </td>
          </tr>
          <tr>
            <td className='item-name'>전화번호</td>
            <td>
              <input type='tel' className='tel' onChange={handleInputValue('mobileHead')} />
              <input type='tel' className='tel' onChange={handleInputValue('mobileBody')} />
            </td>
          </tr>
        </table>
          <div>
            <Link to='/login'>이미 아이디가 있으신가요?</Link>
          </div>
          <button
            className='btn btn-signup'
            type='submit'
            onClick={handleSignup}
          >
            확인
          </button>
          {errorMessage ? <div className='alert-box' >{errorMessage}</div> : null}
        </form>
        <div className='line'></div>
      </center>
    </div>
  );
}
