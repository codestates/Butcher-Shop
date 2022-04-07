import React from 'react';
import axios from 'axios';
import './Mypage.css';
axios.defaults.withCredentials = true;

function Mypage (props) {
  if(!props.userinfo) {
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
              <div className='NavItem'>회원 정보 수정</div>
              <div className='NavItem'>회원탈퇴</div>
            </div>


            <div className='InfoGroup'>
              <div className='BarHight'></div>
              <div className='BarWidth'></div>

              <div className='InfoItem'>
                <div className='AcountInfo'>이름</div>
                <input type='text' className='Input'></input>
              </div>

              <div className='BarWidth'></div>

              <div className='InfoItem'>
                <div className='AcountInfo'>아이디</div>
                <input type='text' className='Input'></input>
              </div>

              <div className='BarWidth'></div>

              <div className='InfoItem'>
                <div className='AcountInfo'>비밀번호</div>
                <input type='text' className='Input'></input>
              </div>

              <div className='BarWidth'></div>

              <div className='InfoItem'>
                <div className='AcountInfo'>비밀번호 확인</div>
                <input type='text' className='Input'></input>
              </div>

              <div className='BarWidth'></div>

              <div className='InfoItem'>
                <div className='AcountInfo'>생년월일</div>
                <input type='number' className='Input'></input>
                <input type='number' className='MBirthday'></input>
                <input type='number' className='DBirthday'></input>
              </div>

              <div className='BarWidth'></div>

              <div className='InfoItem'>
                <div className='AcountInfo'>전화번호</div>
                <input type='number'className='Input'></input>
                <input type='number2'className='SPhone'></input>
              </div>

              <div className='BarWidth'></div>
            </div>

            <div className='SaveBtn'>
              <button className='Save' type='submit'>로그인</button>
            </div>
        </form>
      </center>
    </div>
  );
}

export default Mypage;