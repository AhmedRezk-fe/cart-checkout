import React from "react";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import FooterCart from "../components/FooterCart";
import Input from "../components/Input";

const ShoppingCart = () => {
  return (
    <section className="shopping_cart">
      <div className="container-fluid">
        <div className="shopping_cart_title">
          <h3>Shopping Cart</h3>
        </div>
        <div className="shopping_cart_grid">

        <div className="shopping_carts">
          <div className="shopping_carts_titles">
            <ul>
              <li>Products</li>
              {/* <li>Price</li>
              <li>Quantity</li>
              <li>Total</li> */}
            </ul>
          </div>
          <div className="shopping_carts_items">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>

        <div className="shopping_cart_discount">
          <div className="form_offer">
            <form action="">
              <Input
                type="text"
                placeholder="Gift card or discount code"
                name="dicCode"
                classN="offerF"
              />
              <Button type="submit" classN="offerSend" val="Apply" disabled />
            </form>
            <div className="total_offer_dis">
                <h3>Total</h3>
                <div className="total_offer_dis_taxes">
                  <span className="taxes">
                  Including €46.42 in taxes
                  </span>
                  <span>€248.25</span>
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* <FooterCart /> */}
    </section>
  );
};
export default ShoppingCart;
