import React from 'react';
import axios from 'axios';
import './Mypage.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
axios.defaults.withCredentials = true;

function Mypage ({userinfo}) {
  if(!userinfo) {
    return '';
  }
  //이름, 아이디 생년월일 비밀번호 비밀번호 확인 전화번호
  return (
    
    <div className='MyPage'>
      <center>
        <form onSubmit={(e) => e.preventDefault()}>
            <div className='Profile'>
              <div className='ProfileName'>프로필 사진</div>
              <div className='ProfilePicture'></div>
              <div className='ProfileChange'></div>
            </div>

            <div className='MenuNav'>
              <Link to = '/changePassword'> <div className='NavItem'>비밀번호 변경</div></Link>
              <Link to = '/changeUserInfo'> <div className='NavItem'>회원정보 수정</div></Link>
              <Link to = '/dropsign'><div className='NavItem'>회원탈퇴</div></Link>
            </div>


            <div className='InfoGroup'>
              <div className='BarHight'></div>
              <div className='BarWidth'></div>

              <div className='InfoItem'>
                <div className='AcountInfo'>이름</div>
                <div className='usernameValue'>{userinfo.data.userInfo.username}</div>
              </div>

              <div className='BarWidth'></div>

              <div className='InfoItem'>
                <div className='AcountInfo'>아이디</div>
                <div className='useridValue'>{userinfo.data.userInfo.userId}</div>
              </div>

              <div className='BarWidth'></div>

              <div className='InfoItem'>
                <div className='AcountInfo'>생년월일</div>
                <div className='birthdayValue'>{userinfo.data.userInfo.birthday}</div>
              </div>

              <div className='BarWidth'></div>

              <div className='InfoItem'>
                <div className='AcountInfo'>전화번호</div>
                <div className='mobileValue'>{userinfo.data.userInfo.mobile}</div>
              </div>

              <div className='BarWidth'></div>
            </div>
        </form>
      </center>
    </div>
  );
}

export default Mypage;