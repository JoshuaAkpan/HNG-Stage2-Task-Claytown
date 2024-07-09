import React from 'react';
import { NavLink } from 'react-router-dom';

const CheckoutNav = () => {
  return (
    <nav className="flex items-center space-x-4">
      <NavLink
        to="/checkout/address"
        className={({ isActive }) =>
          isActive ? ' text-[#17183B]' : 'text-[#A2A3B1]'
        }
      >
        Address
      </NavLink>
      <span>{'>'}</span>
      <NavLink
        to="/checkout/shipping"
        className={({ isActive }) =>
          isActive ? 'text-[#17183B]' : 'text-[#A2A3B1]'
        }
      >
        Shipping
      </NavLink>
      <span>{'>'}</span>
      <NavLink
        to="/checkout/payment"
        className={({ isActive }) =>
          isActive ? ' text-[#17183B]' : 'text-[#A2A3B1]'
        }
      >
        Payment
      </NavLink>
    </nav>
  );
};

export default CheckoutNav;
