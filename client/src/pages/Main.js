import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Main.css';
import Meat from '../component/Meat.js'
import Modal from '../component/Modal.js'

export default function Main({ isLogin, handleLogout }) {
    const [data, setData]= useState([]);
    const [categoryData, setcategoryData] = useState([])
    const [imageClick, setimageClick] = useState(false)
    const [imageName, setimageName] = useState()
    const [categoryClick, setcategoryClick] = useState(false);
    const [searchValue, setsearchValue] = useState('')
    const [searchData, setsearchData] = useState([])

    useEffect(() => {
        axios
            .get('https://localhost:4000/items')
            .then(response => {
                setData(response.data)
                setcategoryData(response.data)
                setsearchData(response.data)
            })
    }, [])
    useEffect(() => {
        console.log(categoryData);
        const filterSearchData = categoryData.filter((el) => {
            if (searchValue === '') {
                return el;
            }
            if (el.name === undefined) {
                return;
            }
            else {
                return el.name.includes(searchValue)
            }
        })
        setsearchData(filterSearchData);
    }, [searchValue])

    const handleClickCategory = (event) => {
        setcategoryClick(true);
        console.log(data);
        let newCategoryData = data.filter((el) => {
            if (el.type === event.target.innerHTML) {
                return el;
            }
        })
        if (event.target.innerHTML === '전체보기') {
            newCategoryData = data;
            setcategoryClick(false);
        }
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
            <h1 id='main'>Bucher Shop</h1>
            <div className='userNav'>
                {isLogin ?
                    <div className='afterLogin'>
                        <Link to='/mypage'><img src='user.png' className='useritem userimage' /></Link>
                        <div className='useritem logout' onClick={handleLogout}>로그 아웃</div>
                        <Link to='/basket'><div className='useritem'>장바구니</div></Link>
                    </div>
                    : <Link to='/login' className='useritem'>로그인</Link>}
                <input type='text' placeholder='메뉴를 검색해 보세요!' className='search' onChange={(event) => handleSearch(event)}></input>
            </div>
            <div className='meatNav'>
                <div className='item item4' onClick={(event) => handleClickCategory(event)}>전체보기</div>
                <div className='item item1' onClick={(event) => handleClickCategory(event)}>소고기</div>
                <div className='item item2' onClick={(event) => handleClickCategory(event)}>돼지고기</div>
                <div className='item item3' onClick={(event) => handleClickCategory(event)}>닭고기</div>
                <div className='item item4' onClick={(event) => handleClickCategory(event)}>가공품</div>
            </div>
            <div>
                {imageClick === true ? <Modal imageName={imageName} closeModal={closeModal} /> : null}
            </div>
            <div className='meatContainer'>
                {!categoryClick ? searchData.map((el) => {
                    if (el === undefined) {
                        return;
                    }
                    return (
                        <div key={el.id} className='meatList'>
                            <Meat source={el.image} price={el.price} name={el.name} handleimageClick={handleimageClick} />
                        </div>
                    )
                })
                    : categoryData.map((el) => {
                        if (el === undefined) {
                            return;
                        }
                        return (
                            <div key={el.id} className='meatList'>
                                <Meat source={el.image} price={el.price} name={el.name} handleimageClick={handleimageClick} />
                            </div>
                        )
                    })
                }
            </div>
        </div>

    );
}

