import React, { useContext } from "react";

import { CartContext } from "../contexts/CartContext";
import { CartItem } from "../components";
import { Link } from "react-router-dom";

const CheckOutPage = () => {
  const { cart, total } = useContext(CartContext);

  //calculating shipping fee
  const shippingPercentage = 1.14;
  const shippingFee = (shippingPercentage / 100) * total;
  const roundedShippingFee = Math.round(shippingFee);

  return (
    <div className="sm:h-fit">
      <section className="py-32 container mx-auto flex flex-col">
        <div className=" bg-[#FCF9F1] mb-10 rounded-lg p-7 h-fit">
          <h1 className="mb-10">{`Cart (${cart.length})`} </h1>
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}

          <div>
            {cart.length === 0 && (
              <h1 className="text-center font-normal mb-10">
                !! EMPTY CART - Add to cart
              </h1>
            )}
          </div>

          {/* SMALL DEVICES AND TAB */}
          <div className="lg:hidden sm:block md:block">
            <div className="text-right">
              <p>Total amount - NGN {parseFloat(total).toFixed(2)}</p>
              <p>Shipping fee - NGN {roundedShippingFee}</p>
              <p>
                Total - NGN {parseFloat(total + roundedShippingFee).toFixed(2)}
              </p>

              <div className="flex items-center justify-center h-fit ">
                <Link to={"/checkout/processing"}>
                  <button className=" mt-6 border border-[#1C1C1C61] rounded-[50px] py-2 px-10 mb-5 bg-[#DFAE72] ">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
            <div className="text-right text-[#FF7810]">
              <Link to="/">Back to home</Link>
            </div>
          </div>
        </div>

        {/* LARGE DEVICES AND TAB */}
        <div>
          <div className="bg-[#FCF9F1] w-full mb-5 rounded-lg p-7 hidden lg:table xl:table lg:w-[70%]">
            <h1>Cart Summary</h1>

            <table className="min-w-full rounded-full text-left p-5">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.amount}</td>
                      <td>{`NGN ${parseFloat(item.price * item.amount).toFixed(
                        2
                      )}`}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div>
              <div className="text-right mt-5">
                <p>Total amount - NGN {parseFloat(total).toFixed(2)}</p>
                <p>Shipping fee - NGN {roundedShippingFee}</p>
                <p>
                  Total - NGN{" "}
                  {parseFloat(total + roundedShippingFee).toFixed(2)}
                </p>

                <div className="flex items-center justify-center h-fit ">
                  <Link to={"/checkout/processing"}>
                    <button className=" mt-6 border border-[#1C1C1C61] rounded-[50px] py-2 px-10 mb-5 bg-[#DFAE72] ">
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
              <div className="text-right text-[#FF7810]">
                <Link to="/">Back to home</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckOutPage;
