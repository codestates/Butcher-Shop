import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Main.css';
import Meat from '../component/Meat.js'
import data from './image/data.js'
import Modal from '../component/Modal.js'

export default function Main ({isLogin,handleLogout}) {
    const [categoryData , setcategoryData] = useState(data)
    const [imageClick , setimageClick] = useState(false)
    const [imageName , setimageName] = useState()
    const [categoryClick , setcategoryClick] = useState(false);
    const [searchValue,setsearchValue] = useState('') 
    useEffect(()=> {
        
    },[searchValue])
    const handleClickCategory = (event) => {
        // console.log(event.target.innerHTML)
       setcategoryClick(true);
      let newCategoryData = data.filter((el)=> {
            if(el.category===event.target.innerHTML) {
                return el;
            }
        })
      setcategoryData(newCategoryData); 
    }
    const handleimageClick = (name) => {
        setimageName(name)
        setimageClick(true);
    }
    const closeModal = () => {
        setimageClick(false);
    }
    const handleSearch = (event) => {
        setsearchValue(event.target.value)
    }

    return (
        <div id='all'>
        <h1 id = 'main'>Bucher Shop</h1>
        <div className='userNav'>
            {isLogin ? 
            <div className='afterLogin'>
                <Link to = '/mypage'><img src = {data[9].src} className='useritem userimage'/></Link>
                <div className='useritem logout' onClick={handleLogout}>로그 아웃</div>
            </div>
            : <Link to='/login' className='useritem'>로그인</Link> }
            <input type='text' placeholder='메뉴를 검색해 보세요!' className='search' onChange = {(event)=>handleSearch(event)}></input>
        </div>
        <div className='meatNav'> 
            <div className='item item1' onClick={(event) => handleClickCategory(event)}>소고기</div> 
            <div className='item item2' onClick={(event) => handleClickCategory(event)}>돼지 고기</div> 
            <div className='item item3' onClick={(event) => handleClickCategory(event)}>닭고기</div>
            <div className='item item4' onClick={(event) => handleClickCategory(event)}>가공품</div>
        </div>
        <div>
            {imageClick===true ? <Modal imageName = {imageName} closeModal = {closeModal}/> : null}
        </div>
        <div className='meatContainer'>
        {!categoryClick ?  data.map((el)=> {
            if(el.category===undefined) {
                return;
            }
            return (
                <div key = {el.id} className = 'meatList'>
                    <Meat source = {el.src} price = {el.price} name = {el.name} handleimageClick={handleimageClick}/>
                </div>
            )
        })
        : categoryData.map((el)=> {
            if(el.category===undefined) {
                return;
            }
            return (
                <div key = {el.id} className = 'meatList'>
                    <Meat source = {el.src} price = {el.price} name = {el.name} handleimageClick={handleimageClick}/>
                </div>
            )
        })
    }
        </div>
        {/*
        <div className='meatList'>
        <Meat source = {data[0].src} price = {data[0].price} name = {data[0].name} handleimageClick={handleimageClick}/>
        <Meat source = {data[1].src} price = {data[1].price} name = {data[1].name} handleimageClick={handleimageClick}/>
        <Meat source = {data[2].src} price = {data[2].price} name = {data[2].name} handleimageClick={handleimageClick}/>
        </div>
        <div className='meatList2'>
        <Meat source = {data[3].src} price = {data[3].price} name = {data[3].name} handleimageClick={handleimageClick}/> 
        <Meat source = {data[4].src} price = {data[4].price} name = {data[4].name} handleimageClick={handleimageClick}/> 
        <Meat source = {data[5].src} price = {data[5].price} name = {data[5].name} handleimageClick={handleimageClick}/>
        </div>
        <div className='meatList3'>
        <Meat source = {data[6].src} price = {data[6].price} name = {data[6].name} handleimageClick={handleimageClick}/>
        <Meat source = {data[7].src} price = {data[7].price} name = {data[7].name} handleimageClick={handleimageClick}/>
        <Meat source = {data[8].src} price = {data[8].price} name = {data[8].name} handleimageClick={handleimageClick}/>
        </div>
            */}  
        </div>
        
    );
}

