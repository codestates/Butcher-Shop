import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


axios.defaults.withCredentials = true;

export default function Dropsign ({handleLogout}) {
    const [userinfo, setuserinfo] = useState({
        userId:'',
        password:''
      });
      const [errorMessage, setErrorMessage] = useState('');
      const history = useHistory();
      const handleInputValue = (key) => (e) => {
        setuserinfo({ ...userinfo, [key]: e.target.value });
      };
  const handleDropsign = () => {
    const {
      userId,
      password
    }=userinfo
    if(!userId || !password) {
        return setErrorMessage('모든 항목은 필수입니다');
      }
      setErrorMessage('');
    const dataToSend = {
     userId,password
    }
    return axios
      .post("https://localhost:4000/dropsign",dataToSend)
      .then(()=> handleLogout())
  };
  return (
    <div className='main'>
      <center className='context'>
        <div className='line'></div>
        <h1>회원 탈퇴 확인</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <table>
            <tbody>
              <tr>
                <td className='dropsignid'>아이디</td>
                <td><input type='text' onChange={handleInputValue('userId')} /></td> 
              </tr>
              <tr>
                <td className='dropsignpassword'>비밀번호</td>
                <td><input type='password' onChange={handleInputValue('password')} /></td>
              </tr>
          </tbody>
        </table>
          <div>
            <Link to='/mypage'><button>돌아가기</button></Link>
          </div>
          <button
            className='btn-dropsign'
            type='submit'
            onClick={handleDropsign}
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