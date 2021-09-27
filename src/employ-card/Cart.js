import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faUserCircle} from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const element = <FontAwesomeIcon icon={faUserCircle} />
    const { cart } = props
    let total =0
    let name
    for(const empoly_salary of cart){
        total = total + empoly_salary.salary
        name = empoly_salary.name
    }
    return (
        <div>
          
                <h2>{element} Employ Count: {props.cart.length}</h2>
                <h2>Total Salary = {total}</h2>
                <h4>
                    {
                        cart.map(addName => <li addName={addName}>Clicked:  {addName.name}</li>)
                    }
                </h4>
        </div>

        
    );
};

export default Cart;