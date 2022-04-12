import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Resipes.css';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Resipes () {
  
  return (
    <div className='Recipe'>
      <center className='RecipeContainer'>
          <div className='NavBar'>
              <ul className='RecipeMenu'>
                  <li className='RecipeNav'>소고기</li>
                  <li className='RecipeNav'>날고기</li>
                  <li className='RecipeNav'>뒷다리살</li>
                  <li className='RecipeNav'>한우ss급</li>
                  <li className='RecipeNav'>1등급 돼지고기</li>
                  <li className='RecipeNav'>닭고기</li>
                  <li className='RecipeNav'>호주산 고기</li>
                  <li className='RecipeNav'>고급 고기</li>
                  <li className='RecipeNav'>최고급 닭가슴살</li>
              </ul>
          </div>

          <div>
              <ul>
                  <li className='ResipeCell'>
                      <div className='ResipePicture'>레시피 사진</div>
                      <div className='ResipeName'>레시피 이름</div>
                      <div className='ResipeTime'>조리시간</div>
                      <div className='ResipeInfo'>레시피 간단 설명</div>
                  </li>
                  <li className='ResipeCell'>
                      <div className='ResipePicture'>레시피 사진</div>
                      <div className='ResipeName'>레시피 이름</div>
                      <div className='ResipeTime'>조리시간</div>
                      <div className='ResipeInfo'>레시피 간단 설명</div>
                  </li>
                  <li className='ResipeCell'>
                      <div className='ResipePicture'>레시피 사진</div>
                      <div className='ResipeName'>레시피 이름</div>
                      <div className='ResipeTime'>조리시간</div>
                      <div className='ResipeInfo'>레시피 간단 설명</div>
                  </li>
                  <li className='ResipeCell'>
                      <div className='ResipePicture'>레시피 사진</div>
                      <div className='ResipeName'>레시피 이름</div>
                      <div className='ResipeTime'>조리시간</div>
                      <div className='ResipeInfo'>레시피 간단 설명</div>
                  </li>

                  <li className='ResipeCell'>
                      <div className='ResipePicture'>레시피 사진</div>
                      <div className='ResipeName'>레시피 이름</div>
                      <div className='ResipeTime'>조리시간</div>
                      <div className='ResipeInfo'>레시피 간단 설명</div>
                  </li>
                  <li className='ResipeCell'>
                      <div className='ResipePicture'>레시피 사진</div>
                      <div className='ResipeName'>레시피 이름</div>
                      <div className='ResipeTime'>조리시간</div>
                      <div className='ResipeInfo'>레시피 간단 설명</div>
                  </li>
                  <li className='ResipeCell'>
                      <div className='ResipePicture'>레시피 사진</div>
                      <div className='ResipeName'>레시피 이름</div>
                      <div className='ResipeTime'>조리시간</div>
                      <div className='ResipeInfo'>레시피 간단 설명</div>
                  </li>
              </ul>
          </div>
      </center>
    </div>
  );
}