import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Signup () {
  const [userinfo, setuserinfo] = useState({
    userId: '',
    password: '',
    username: '',
    mobile: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  const handleSignup = () => {
    if(!userinfo.userId || !userinfo.password || !userinfo.username || !userinfo.mobile) {
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
    <div>
      <center>
        <h1>Sign Up</h1>
        <div>모든 항목은 필수입니다</div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>이메일</span>
            <input type='text' onChange={handleInputValue('userId')} />
          </div>
          <div>
            <span>비밀번호</span>
            <input
              type='password'
              onChange={handleInputValue('password')}
            />
          </div>
          <div>
            <span>이름</span>
            <input type='text' onChange={handleInputValue('username')} />
          </div>
          <div>
            {' '}
            <span>전화번호</span>{' '}
            <input type='tel' onChange={handleInputValue('mobile')} />
          </div>
          <div>
            <Link to='/login'>이미 아이디가 있으신가요?</Link>
          </div>
          <button
            className='btn btn-signup'
            type='submit'
            onClick={handleSignup}
          >
            회원가입
          </button>
          {errorMessage ? <div className='alert-box' >{errorMessage}</div> : null}
        </form>
      </center>
    </div>
  );
}
