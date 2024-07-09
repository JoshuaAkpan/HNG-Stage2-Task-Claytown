import React from 'react';
import { NavLink } from 'react-router-dom';

const CheckoutNav = () => {
  return (
    <nav className="flex items-center space-x-4">
      <NavLink
        to="/checkout/address"
        className={({ isActive }) =>
          isActive ? 'font-bold text-blue-600' : 'text-gray-600'
        }
      >
        Address
      </NavLink>
      <span>{'>'}</span>
      <NavLink
        to="/checkout/shipping"
        className={({ isActive }) =>
          isActive ? 'font-bold text-blue-600' : 'text-gray-600'
        }
      >
        Shipping
      </NavLink>
      <span>{'>'}</span>
      <NavLink
        to="/checkout/payment"
        className={({ isActive }) =>
          isActive ? 'font-bold text-blue-600' : 'text-gray-600'
        }
      >
        Payment
      </NavLink>
    </nav>
  );
};

export default CheckoutNav;
