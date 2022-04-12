import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import meatdata from './image/meatdata.js'
import axios from 'axios';
import './Basket.css';

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
      <div>
          <table>
              <tr>
              <th>상품이미지</th>  
              <th>상품명</th>
              <th>수량</th>
              <th>상품가격</th>
              </tr>
              <tr>
                  <td><img src = {meatdata[3].src} ></img></td>
                  <td>고기</td>
                  <td>2</td>
                  <td>50000원</td>
              </tr>
          </table>
      </div>
  )
}