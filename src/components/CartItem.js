import React from "react";

const CartItem = () => {
    return(
        <div className="shopping_cart_item">
        <div className="shopping_cart_item_product">
          <div className="shopping_cart_item_product_img">
            <a href="#">
              <img src="https://cdn.shopify.com/s/files/1/0015/5110/6106/products/CORD-GOOD-LIFE-V1_272d32b1-41d5-4295-b93a-c51228ca95fd_200x.jpg?v=1668161766" alt="" />
            </a>
            <div className="shopping_cart_count">
              1 
            </div>
          </div>
          <div className="shopping_cart_item_product_info">
              <h4>Eyeglass Strap</h4>
              <p>Black Noir / Non-prescription</p>
              <ul>
                <li>Color: Good Life</li>
                <li>Prescription Type: Prescription</li>
                <li>Method: Entered Manually</li>
              </ul>
              <div className="offer"> 15% OFF FOR 3 (-€22,05)</div>
          </div>
        </div>
        {/* <div className="shopping_cart_item_price">LE 970</div> */}
        <div className="shopping_cart_item_Quantity">
          <div className="cart_Quantity">
              <span className="minus">
                  -
              </span>
              <span className="item_Quantity_num">
                  5
              </span>
              <span className="plus">
                  +
              </span>
          </div>
          <div className="shopping_cart_item_total">LE 970</div>
        </div>

        <div className="shopping_cart_close">
            x
        </div>
      </div>
    )
} 

export default CartItem;