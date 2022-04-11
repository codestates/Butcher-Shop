import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './ChangePassword.css';

axios.defaults.withCredentials = true;

export default function ChangePassword () {
  const [userinfo, setuserinfo] = useState({
    oldPassword:'',
    newPassword:''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  const handleChangePassword = () => {
    const {
      oldPassword,
      newPassword,
    }=userinfo

    if(!oldPassword || !newPassword) {
      return setErrorMessage('모든 항목은 필수입니다');
    }
    setErrorMessage('');
    
    const dataToSend = {
     oldPassword,newPassword
    }
    return axios
      .patch("https://localhost:4000/password",dataToSend)
      .then(()=> history.push('/mypage'))
  };
  return (
    <div className='main'>
      <center className='context'>
        <div className='line'></div>
        <h1>변경할 정보 입력</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <table>
            <tbody>
              <tr>
                <td className='oldpassword'>생년월일 변경</td>
                <td><input type='password' onChange={handleInputValue('oldPassword')} /></td> 
              </tr>
              <tr>
                <td className='newpassword'>전화번호 변경</td>
                <td><input type='password' onChange={handleInputValue('newPassword')} /></td>
              </tr>
          </tbody>
        </table>
          <div>
            <Link to='/mypage'><button>돌아가기</button></Link>
          </div>
          <button
            className='btn-changepassword'
            type='submit'
            onClick={handleChangePassword}
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