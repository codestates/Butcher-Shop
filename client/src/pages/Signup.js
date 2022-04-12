import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Signup () {
  const [userinfo, setuserinfo] = useState({
    userId: '',
    password: '',
    username: '',
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
    const {
      userId, password, username,
      mobileHead, mobileBody,
      birthdayYear, birthdayMonth, birthdayDay,
    }=userinfo

    if(!Object.entries(userinfo).every(item=>item[1])) {
      return setErrorMessage('모든 항목은 필수입니다');
    }
    setErrorMessage('');
    
    const dataToSend = {
      userId, password, username,
      mobile:mobileHead+mobileBody,
      birthday:`${birthdayYear}.${birthdayMonth}.${birthdayDay}`,
    }
    return axios
      .post("https://localhost:4000/signup",dataToSend)
      .then(()=> history.push('/'))
  };
  return (
    <div className='main'>
      <center className='context'>
        <div className='line'></div>
        <h1 className='SignUpText'>회원 정보 입력</h1>
        <div className='SubText'>- 아래 입력사항을 모두 입력해 주십시오.</div>
        <form onSubmit={(e) => e.preventDefault()}>
          <table className='SingTable'>
            <tbody>
              <tr>
                <td className='item-name'>이름</td>
                <td><input type='text' className='InputName' onChange={handleInputValue('username')} /></td> 
              </tr>
              <tr>
                <td className='item-name'>아이디</td>
                <td><input type='text' className='InputId' onChange={handleInputValue('userId')} /></td>
              </tr>
            <tr>
              <td className='item-name'>생년월일</td>
              <td>
                <input type='text' className='birthday' onChange={handleInputValue('birthdayYear')} />
                <input type='text' className='birthday' onChange={handleInputValue('birthdayMonth')} />
                <input type='text' className='birthday' onChange={handleInputValue('birthdayDay')} />
              </td>
            </tr>
            <tr>
              <td className='item-name'>비밀번호</td>
              <td>
                <input
                  type='password'
                  className='InputPassword'
                  onChange={handleInputValue('password')}
                />
              </td>
            </tr>
            <tr>
              <td className='item-name'>비밀번호 확인</td>
              <td>
              <input
                type='password'
                className='InputPassword'
                onChange={handleInputValue('password')}
              />
              </td>
            </tr>
            <tr>
              <td className='item-name'>전화번호</td>
              <td>
                <input type='tel' className='InputPhone01' onChange={handleInputValue('mobileHead')} />
                <input type='tel' className='InputPhone02' onChange={handleInputValue('mobileBody')} />
              </td>
            </tr>
          </tbody>
        </table>
          <div className='Text'>
            <Link to='/login'>이미 아이디가 있으신가요?</Link>
          </div>
          <button
            className='btn-signup'
            type='submit'
            onClick={handleSignup}
          >
            확인
          </button>
          {errorMessage ? <div className='alert-boxSign' >{errorMessage}</div> : null}
        </form>
      </center>
    </div>
  );
}
