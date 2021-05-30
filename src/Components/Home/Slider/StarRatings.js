import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import './StarRating.css'
const StarRatings = () => {
    const [rating,setRating]=useState(null);
    const [hover,setHover]=useState(null);
    return (
        <div>
            {[...Array(5)].map((star,i)=>{
                const ratingValue= i+1;
            return ( 
            <label>
                <input name="rating" value={ratingValue} type="radio" onClick={()=>setRating(ratingValue)} />
                <FaStar  className="star" size={20} color={ratingValue<= rating ? "#e4e5e9" : "#e50914"} 
            onMouseEnter={()=>setHover(ratingValue)}
            onMouseLeave={()=>setHover(null)}
            />
            </label>
           );
            })}
           
        </div>
    );
};

export default StarRatings;