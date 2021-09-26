import React from 'react';

const Cart = (props) => {
    const { cart } = props
    let total =0
    let name
    for(const empoly_salary of cart){
        total = total + empoly_salary.salary
        name = empoly_salary.name
    }
    return (
        <div>
          
                <h2>Employ Count: {props.cart.length}</h2>
                <h2>Total Salary = {total}</h2>
                <h4>
                    {
                        cart.map(addName => <li addName={addName}>{addName.name}</li>)
                    }
                </h4>
        </div>

        
    );
};

export default Cart;