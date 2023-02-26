import React from 'react'
import Breadcrumb from '../components/Breadcrumb ';
import ShopPay from "../assets/img/ShopPay.png";
import Button from '../components/Button'
import Input from '../components/Input'
import ShoppingCart from './Cart';

const CheckOut =()=> {
  return (
    <div className="checkout">
        <div className="">
            <div className="checkout_grid">
                <div className="checkout_form">
                    <div className="checkout_logo">
                        <a href="/#">
                            LOGO
                        </a>
                    </div>
                    <Breadcrumb />
                    <div className="express_checkout">
                        <Button classN="shopPay" > 
                            <img src={ShopPay} alt="" />
                        </Button>

                        <Button classN="paypal"> 
                            <img src={ShopPay} alt="" />
                        </Button>

                        <Button classN="googlepay"> 
                            <img src={ShopPay} alt="" />
                        </Button>
                    </div>
                    <div className="or">
                        <span>OR</span>
                    </div>
                    
                    <form action="">
                        <div className="header_feild">
                            <h3>Contact information</h3>
                            <h3>Already have an account? <a href="/#">Log in</a></h3>
                        </div>
                        <Input  name="email" placeholder="email" type="email" classN="Payment"/>
                        <Input label="Email me with news and offers" name="checkBox"  type="checkbox" classN="checkBox"/>
                        
                        <div className="header_feild">
                            <h3>Shipping address</h3>
                        </div>
                        {/* <Input label="Contact information" name="email" placeholder="email" type="email" classN="Payment"/> */}
                    
                        <div className="group__feild">
                        <Input name="Fname" placeholder="First name" type="text" classN="Payment"/>
                        <Input name="Lname" placeholder="Last name" type="text" classN="Payment"/>

                        </div>

                        <Input name="Company" placeholder="Company (optional)" type="text" classN="Payment"/>
                        <Input name="Address" placeholder="Address" type="text" classN="Payment"/>

                        <Input name="Apartment" placeholder="Apartment, suite, etc. (optional)" type="text" classN="Payment"/>

                        <Input name="Phone" placeholder="Phone" type="phone" classN="Payment"/>

                    <Button type="submit" val="Continue to shipping" classN="submit_check"/>
                    </form>
                </div>
                <div className="checkout_cart">
                    <ShoppingCart checkoutCart />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckOut