import React, { useState, useEffect } from 'react';
import './Resipes.css';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Resipes ({meatdata}) {

    const [ResipesDatas, setdata]= useState([]); 
    console.log(meatdata)
    useEffect(() => {
        axios
        .get(`https://localhost:4000/recipes?name=${meatdata[0].name}`)
        .then(response => {
            setdata(response.data)
        })
    }, []);
    
    return (
        <div className='Recipe'>
            <div className='recipetitle'>가장 맛있는 조리법</div>
            <center className='RecipeContainer'>
                
                <div>
                    <ul>
                        {ResipesDatas.map((x) => {
                            return(
                            <li className='ResipeCell' key={x.id}>
                            {ResipesDatas.length === 0 ? null : <div> 
                            <img className='ResipePicture' src={x.image}/>
                            <div className='ResipeName'>{x.name}</div>
                            <div className='ResipeTime'>{x.time}</div>
                            <div className='ResipeInfo'>{x.method}</div></div>}
                        </li>)
                        })}
                    </ul>
                </div>
            </center>
        </div>
    );
}