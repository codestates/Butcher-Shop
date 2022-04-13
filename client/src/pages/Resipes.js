import React, { useState, useEffect } from 'react';
import './Resipes.css';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Resipes () {

    const [ResipesDatas, setdata]= useState([]);

    useEffect(() => {
        axios
        .get('https://localhost:4000/recipes?name=닭고기')
        .then(response => {
            setdata(response.data)
        })
    }, []);
    console.log(ResipesDatas)
    return (
        <div className='Recipe'>
            <center className='RecipeContainer'>
                
                <div>
                    <ul>
                        {ResipesDatas.map((x) => {
                            return(<li className='ResipeCell' key={x.id}>
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