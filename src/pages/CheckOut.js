import React from 'react'
import Breadcrumb from '../components/Breadcrumb '
import Button from '../components/Button'
import Input from '../components/Input'

const CheckOut =()=> {
  return (
    <div className="checkout">
        <div className="container">
            <div className="checkout_grid">
                <div className="checkout_form">
                    <div className="checkout_logo">
                        <a href="#">
                            LOGO
                        </a>
                    </div>
                    <Breadcrumb />
                    <div className="express_checkout">
                        {/* <div className="LinkButton">
                            <a href="#">
                                <span className="name"></span>
                                <span className="icon"></span>
                            </a>
                        </div> */}
                    </div>
                    <form action="">
                        <Input label="Contact information" name="email" placeholder="email" type="email" classN="Payment"/>
                        <Input label="Email me with news and offers" name="checkBox"  type="checkbox" classN="checkBox"/>

                    </form>
                </div>
                <div className="checkout_cart">

                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckOut