import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Basket.css';

axios.defaults.withCredentials = true;

export default function Basket ({meatdata,userinfo}) {
  const history = useHistory();
  let totalprice = 0;
  if(meatdata.length!==0) {
  meatdata.forEach((el)=> {
    totalprice = totalprice + Number(el.price);
  })
  }
  console.log(meatdata)
  const handleBuyBtn = () => {
  let dataToSend = meatdata;
  return axios
    .post("https://localhost:4000/orderitems",dataToSend)
    .then(history.push('/')).then(window.location.reload(false))
};
    return (
      <div className='Basket'>
          <table className='Table'>
            <tbody className='Tbody'>
              <tr>
                <th className='OrderCategory'>상품이미지</th>  
                <th className='OrderCategory'>상품명</th>
                <th className='OrderCategory'>수량</th>
                <th className='OrderCategory'>상품가격</th>
              </tr>
              
                {meatdata.map((el)=> {
                  return (<tr className='OrderListcontainer' key = {el.id}>
                  <td className='OrderList'><img src = {el.image} /></td>
                  <td className='OrderList'>{el.name}</td>
                  <td className='OrderList'>1</td>
                  <td className='OrderList'>{el.price}</td>
                  </tr>)
                })}
            </tbody>
          </table>

          <div className='ClientInfomation'>
            <div className='Delivery'>
              <div className='CraditListDel'>배송 정보</div>
              <div className='AdressInfo'>주소 정보</div>
              <input className='AdressInput' type= "text" disabled/> {/* 마이페이지 정보 */}
            </div>
          </div>

          <div className='OrderInfomation'>
            <div>
              <div className='OrderInfoText'>주문자 정보</div>
              <div className='OrderName'>주문자 명</div>
              <div className='OrderNameText'>{userinfo.data ===undefined? '로딩중' : userinfo.data.userInfo.username}</div> {/* 마이페이지 정보 */}
              <div className='OrderPhoneNumber'>전화번호</div> {/* 마이페이지 정보 */}
              <div className='OrderPhoneNumberText'>{userinfo.data ===undefined? '로딩중입니다' : userinfo.data.userInfo.username}</div>
            </div>
          </div>

          <div className='PriceInfomation'>
            <div className='PriceInfoText'>주문가격</div>
            <div className='TotalPrice'>총 가격</div>
            <div className='LineDash'></div>
            <div className='TotalPriceText'>{totalprice? totalprice : '로딩중입니다'}</div>
            <div>
              <button className='basketBuyBtn' onClick={handleBuyBtn}>구매하기</button>
              <Link to = '/'><button className='basketToMain'>돌아가기</button></Link>
            </div>
          </div>
      </div>
  )
}