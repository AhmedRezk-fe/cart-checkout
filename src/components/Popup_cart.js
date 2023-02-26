import React from "react";
import PopupCartIcon from "../assets/img/icon_truc.png";
import Button from "./Button";

const Popup_cart = () => {
  return (
    <div className="Popup_cart">
      <div className="Popup_cart_header">
        <div className="Popup_cart_header_icon">
          <img src={PopupCartIcon} alt="" />
        </div>
        <span> Hey! You are LE 2,313 away from free shipping!</span>
      </div>
      <div className="Popup_cart_body">
        <div className="Popup_cart_list">
          <ul>
            <li>
              <div className="Popup_cart_item_img">
                <img
src="//cdn.shopify.com/s/files/1/0015/5110/6106/products/Dalston-Black-front_84d9dfc2-3c1b-4289-b1ad-d671fd05203e_320x.jpg?v=1668161820"                  alt=""
                />
              </div>
              <div className="Popup_cart_item_data">
                <h3>
                  <a href="/#">DALSTON</a>
                </h3>
                <div className="Popup_cart_options">
                  <ul>
                    <li>Color: Black noir</li>
                  </ul>
                </div>
                <div className="cart_Quantity">
                  <span className="minus">-</span>
                  <span className="item_Quantity_num">5</span>
                  <span className="plus">+</span>
                </div>
              </div>
              <div className="Popup_cart_item_price">
                <span>LE 1,619</span>
              </div>
              <div className="Popup_cart_item_close">
                <span>x</span>
              </div>
            </li>
            <li>
              <div className="Popup_cart_item_img">
                <img
src="//cdn.shopify.com/s/files/1/0015/5110/6106/products/Dalston-Black-front_84d9dfc2-3c1b-4289-b1ad-d671fd05203e_320x.jpg?v=1668161820"                  alt=""
                />
              </div>
              <div className="Popup_cart_item_data">
                <h3>
                  <a href="/#">DALSTON</a>
                </h3>
                <div className="Popup_cart_options">
                  <ul>
                    <li>Color: Black noir</li>
                  </ul>
                </div>
                <div className="cart_Quantity">
                  <span className="minus">-</span>
                  <span className="item_Quantity_num">5</span>
                  <span className="plus">+</span>
                </div>
              </div>
              <div className="Popup_cart_item_price">
                <span>LE 1,619</span>
              </div>
              <div className="Popup_cart_item_close">
                <span>x</span>
              </div>
            </li>
            <li>
              <div className="Popup_cart_item_img">
                <img
src="//cdn.shopify.com/s/files/1/0015/5110/6106/products/Dalston-Black-front_84d9dfc2-3c1b-4289-b1ad-d671fd05203e_320x.jpg?v=1668161820"                  alt=""
                />
              </div>
              <div className="Popup_cart_item_data">
                <h3>
                  <a href="/#">DALSTON</a>
                </h3>
                <div className="Popup_cart_options">
                  <ul>
                    <li>Color: Black noir</li>
                  </ul>
                </div>
                <div className="cart_Quantity">
                  <span className="minus">-</span>
                  <span className="item_Quantity_num">5</span>
                  <span className="plus">+</span>
                </div>
              </div>
              <div className="Popup_cart_item_price">
                <span>LE 1,619</span>
              </div>
              <div className="Popup_cart_item_close">
                <span>x</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="Popup_cart_footer">
        <div className="Popup_cart_allData">
          <ul>
            <li>
              <span className="title">Subtotal</span>
              <span>LE 1,619</span>
            </li>
            <li>
              <span className="title">Shipping</span>
              <span>Cost will appear on checkout</span>
            </li>
          </ul>

          <Button type='button' val="CHECKOUT"/>
        </div>
      </div>
    </div>
  );
};

export default Popup_cart;
