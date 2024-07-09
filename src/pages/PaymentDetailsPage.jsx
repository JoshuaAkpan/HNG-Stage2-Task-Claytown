import React from "react";
import { CheckoutNav, OrderSummary } from "../components";
import { Link } from "react-router-dom";

const PaymentDetailsPage = () => {
  // /checkout/payment/payment-details
  return (
    <div className="px-10 pt-32 w-full">
      <div className="bg-white mb-5 rounded-lg p-7 h-[80vh] lg:flex xl:flex lg:justify-between xl:justify-between">
        <div>
          <Link to={"/checkout/payment"}>Arrow</Link>

          <CheckoutNav />

          <h2 className="mt-12 mb-4">Payment Details</h2>

          <form>
            <label htmlFor="cards"></label>
            <select name="cards" id="cards" className="bg-[#fef8e6]">
              <option value="mastercard" selected>
                Mastercard ending 234
              </option>
              <option value="verve">verve</option>
            </select>

            <label htmlFor="name">Name on card</label>
            <input
              className="bg-[#fef8e6]"
              type="text"
              id="name"
              placeholder="John Smith"
            />

            <label htmlFor="card_num">Card number</label>
            <input
              className="bg-[#fef8e6]"
              type="text"
              id="card_num"
              placeholder="123 - 456-"
            />

            <label htmlFor="card_exp">Card number</label>
            <div>
              <input
                className="bg-[#fef8e6]"
                type="text"
                id="card_exp"
                placeholder="03"
              />
              /
              <input
                className="bg-[#fef8e6]"
                type="text"
                id="card_exp"
                placeholder="24"
              />
            </div>

            <label htmlFor="card_num">Card number</label>
            <input
              className="bg-[#fef8e6]"
              type="text"
              id="cvv"
              placeholder="123"
            />

            <hr />

            <Link to={"/checkout"}>Cancel Order</Link>

            <Link>
              <button>Complete order</button>
            </Link>
          </form>
        </div>

        <OrderSummary />
      </div>
    </div>
  );
};

export default PaymentDetailsPage;
