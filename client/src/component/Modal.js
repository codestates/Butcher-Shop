import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Modal.css';
import Meat from './Meat.js';

export default function Modal ({meatdata,closeModal,imageName,handleMeatData}) {
    const [checkAni,setcheckAni] = useState(false)
    const imagedata = meatdata.filter((el)=> {
      if(el.name===imageName) {
          return el;
      }  
    })
    const startAnimation = () => {
       setcheckAni(!checkAni);
    }
    return (
        <div className="ModalBackground">
            <div className="Modal">
                {checkAni ? <div>
                <div className='afterani'>{imageName}를 장바구니에 추가했습니다.</div> 
                <div className='afterani'> 더 구매하시겠습니까? </div>
                <button className='afteraniBtn' onClick={()=> {startAnimation(); handleMeatData(imagedata)}}>클릭</button>
                </div> :null}
                <div>
                <img src = {imagedata[0].image} className = {checkAni?  'modalImageAnimation' : 'modalImage'} />
                </div>
                {checkAni===false ? 
                <div>
                <div className='imagename'>
                   상품명: {imageName}
                </div>
                <div className='pricevalue'>
                   가격: {imagedata[0].price}원
                </div>
                <span>
                <Link to='/Resipes'>
                    <button className="recipeBtn">레시피 보기</button>
                </Link>
                </span>
                <span>
                <button className="buyBtn" onClick={startAnimation}>
                    구매하기
                </button>
                </span>
                <span>
                <button className="closeBtn" onClick={closeModal}>
                    닫기
                </button>
                </span>
                </div>
                : null}
                
            </div>
        </div>
    )
}
