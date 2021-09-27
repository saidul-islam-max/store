import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faClipboardCheck} from '@fortawesome/free-solid-svg-icons';
import './Card.css'

const Card = (props) => {
    
    const {name,img,Address,salary,age,job_type} = props.employe;
    const element = <FontAwesomeIcon icon={faClipboardCheck} />
    return (
        <div className="card">
           <img src={img} alt="" />
            <div class="card-style">
                <h2>Name:  {name}</h2>
                <p>Age:  {age}</p>
                <p>Address:  {Address}</p>
                <p>Job Type:  {job_type}</p>
                <h2>Salary:  {salary}</h2>
            </div>
           <button
           onClick={() => props.handleAddToCart(props.employe)}
           class="btn-total"
           >{element} Click this</button> 
        </div>
    );
};

export default Card;