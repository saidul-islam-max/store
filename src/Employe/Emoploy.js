import React, { useEffect, useState } from 'react';
import Card from '../employ-card/Card';
import Cart from '../employ-card/Cart';
import './Employ.css';

const Emoploy = () => {
    const[employe,setEmploy] =useState([]);
    const[cart,setCart] =useState([]);

    useEffect(() => {
        fetch('./Detail.JSON')
        .then(res => res.json())
        .then(data => setEmploy(data));
    },[])


    const handleAddToCart = (employe) => {
        const newCart = [...cart,employe];
        setCart(newCart)
    } 

    return (
        <div className="details-total-salary">
           
            <div className="emoploy-detailes">
                
            {
            employe.map(employe => <Card 
                employe={employe}
                handleAddToCart={handleAddToCart}
                key={employe.name}
                ></Card>)
            }  
            </div>

            <div className="employe-salary">
            <h2>Total Employe = {employe.length}</h2>
                <Cart cart={cart}></Cart>
                 
            </div>
        </div>
    );
};

export default Emoploy;