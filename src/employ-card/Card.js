import React from 'react';
import './Card.css'

const Card = (props) => {
    
    const {name,img,salary,age,job_type} = props.employe;
    return (
        <div className="card">
           <img src={img} alt="" />
            <div class="card-style">
                <h2>Name: {name}</h2>
                <p>Age: {age}</p>
                <p>Job Type: {job_type}</p>
                <h2>Salary: {salary}</h2>
            </div>
           <button 
           onClick={() => props.handleAddToCart(props.employe)}
           class="btn-total"
           >Click this</button> 
        </div>
    );
};

export default Card;