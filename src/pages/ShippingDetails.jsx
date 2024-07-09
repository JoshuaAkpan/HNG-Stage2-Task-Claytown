import React from "react";
import { Link } from "react-router-dom";
import { CheckoutNav, OrderSummary } from "../components";

const ShippingDetails = () => {
  return (
    <div className="px-10 pt-32 w-full">
      <div className="bg-white mb-5 rounded-lg p-7 h-[80vh] lg:flex xl:flex lg:justify-between xl:justify-between">
        <div>
          <Link to={"/checkout/payment"}>Arrow</Link>

          <CheckoutNav />

          <h2 className="mt-12 mb-4">Shipping details</h2>

          <form>
            <label htmlFor="cards"></label>
            <select name="cards" id="cards" className="bg-[#fef8e6]">
              <option value="mastercard" selected>
                123, Allen avenue
              </option>
            </select>

            <label htmlFor="name">First line of address</label>
            <input
              className="bg-[#fef8e6]"
              type="text"
              id="name"
              placeholder="123"
            />

            <label htmlFor="card_num">Street name</label>
            <input
              className="bg-[#fef8e6]"
              type="text"
              id="card_num"
              placeholder="Allen avenue"
            />

            <div>
              <label htmlFor="card_exp">Postcode</label>
              <input
                className="bg-[#fef8e6]"
                type="text"
                id="card_exp"
                placeholder="ABC-123"
              />

              <label htmlFor="card_exp">Select shipping</label>
              <select name="cards" id="cards" className="bg-[#fef8e6]">
                <option value="free" selected>
                  Free delivery
                </option>
              </select>
            </div>

            <hr />

            <Link to={"/checkout"}>Cancel Order</Link>

            <Link to={'/checkout/shipping'}>
              <button>Payment</button>
            </Link>
          </form>
        </div>

        <OrderSummary link="/checkout/shipping" text="Continue to Shipping" />
      </div>
    </div>
  );
};

export default ShippingDetails;
