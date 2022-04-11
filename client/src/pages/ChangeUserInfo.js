import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './ChangeUserInfo.css';

axios.defaults.withCredentials = true;

export default function ChangeUserInfo ({handleChangeUser}) {
  const [userinfo, setuserinfo] = useState({
    birthdayYear:'',
    birthdayMonth:'',
    birthdayDay:'',
    mobileHead:'',
    mobileBody:''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  const handleChangeUserInfo = () => {
    const {
        birthdayYear,
        birthdayMonth,
        birthdayDay,
        mobileHead,
        mobileBody
    }=userinfo
    if((birthdayYear && birthdayMonth && birthdayDay )||(mobileBody && mobileHead)) {
        setErrorMessage('');
    } 
    else {
    if(!birthdayYear || !birthdayMonth || !birthdayDay) {
      return setErrorMessage('생년월일의 모든 항목은 필수입니다.');
    }
    if(!mobileHead || !mobileBody) {
        return setErrorMessage('전화번호의 모든 항목은 필수입니다.')
    }
    }
    
    const dataToSend = {
        mobile:mobileHead+mobileBody,
        birthday:`${birthdayYear}.${birthdayMonth}.${birthdayDay}`,
    }
    return axios
      .patch("https://localhost:4000/userinfo",dataToSend)
      .then((data)=> {console.log(data)}).then(()=>history.push('/mypage'))
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
                <td className='changebirthday'>생년월일 변경</td>
                <td>
                <input type='number' onChange={handleInputValue('birthdayYear')}></input>
                <input type='number' onChange={handleInputValue('birthdayMonth')}></input>
                <input type='number' onChange={handleInputValue('birthdayDay')}></input>
                </td>
              </tr>
              <tr>
                <td className='changemobile'>전화번호 변경</td>
                <td>
                <input type='number' className='firstnumber'  onChange={handleInputValue('mobileHead')}></input>
                <input type='number' className='secondnumber' onChange={handleInputValue('mobileBody')}></input>
                </td>
              </tr>
          </tbody>
        </table>
          <div>
            <Link to='/mypage'><button>돌아가기</button></Link>
          </div>
          <button
            className='btn-changeUserInfo'
            type='submit'
            onClick={handleChangeUserInfo}
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