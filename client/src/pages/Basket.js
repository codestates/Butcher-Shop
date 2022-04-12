import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import data from './image/data.js'
import axios from 'axios';
import './Basket.css';

axios.defaults.withCredentials = true;

export default function Basket () {
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
              <tr>
                  <td className='OrderList'>image</td>
                  <td className='OrderList'>고기</td>
                  <td className='OrderList'>2</td>
                  <td className='OrderList'>50000원</td>
              </tr>
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
              <div className='OrderNameText'>11111</div> {/* 마이페이지 정보 */}
              <div className='OrderPhoneNumber'>전화번호</div> {/* 마이페이지 정보 */}
              <div className='OrderPhoneNumberText'>1111</div>
            </div>
          </div>

          <div className='PriceInfomation'>
            <div className='PriceInfoText'>주문가격</div>
            <div className='TotalPrice'>총 가격</div>
            <div className='LineDash'></div>
            <div className='TotalPriceText'>111111</div>
          </div>
      </div>
  )
}