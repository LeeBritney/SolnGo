import React from 'react';
import visa from './images/vi.png';
import master from './images/mc.png';
import FPX from './images/fpx.png';
import Stripe from './images/stripe.png';

const PaymentPage: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
        <link rel="stylesheet" href="tailwindcss-colors.css" />
        <link rel="stylesheet" href="style.css" />
        <title>Payment Page</title>
      </head>
      <body>
        {/* start: Payment */}
        <section className="payment-section">
          <div className="container">
            <div className="payment-wrapper">
              <div className="payment-left">
                <div className="payment-header">
                  <div className="payment-form-group">
                    <input type="amount" placeholder=" " className="payment-form-control" id="amount" />
                    <label htmlFor="amount" className="payment-form-label payment-form-label-required">Amount</label>
                  </div>
                  <p className="payment-header-description">~~SOL</p>
                </div>
                <div className="payment-content">
                  <div className="payment-body">
                    <div className="payment-plan">
                      <a href="#" className="payment-plan-change">Change</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment-right">
                <form action="" className="payment-form">
                  <h1 className="payment-title">Payment Details</h1>
                  <div className="payment-method">
                    <input type="radio" name="payment-method" id="method-1" checked />
                    <label htmlFor="method-1" className="payment-method-item">
                      <img src={visa.src} alt="Visa card" />
                    </label>
                    <input type="radio" name="payment-method" id="method-2" />
                    <label htmlFor="method-2" className="payment-method-item">
                      <img src={master.src} alt="" />
                    </label>
                    <input type="radio" name="payment-method" id="method-3" />
                    <label htmlFor="method-3" className="payment-method-item">
                      <img src={FPX.src} alt="" />
                    </label>
                    <input type="radio" name="payment-method" id="method-4" />
                    <label htmlFor="method-4" className="payment-method-item">
                      <img src={Stripe.src} alt="" />
                    </label>
                  </div>
                  <div className="payment-form-group">
                    <input type="email" placeholder=" " className="payment-form-control" id="email" />
                    <label htmlFor="email" className="payment-form-label payment-form-label-required">Email Address</label>
                  </div>
                  <div className="payment-form-group">
                    <input type="text" placeholder=" " className="payment-form-control" id="card-number" />
                    <label htmlFor="card-number" className="payment-form-label payment-form-label-required">Card Number</label>
                  </div>
                  <div className="payment-form-group-flex">
                    <div className="payment-form-group">
                      <input type="date" placeholder=" " className="payment-form-control" id="expiry-date" />
                      <label htmlFor="expiry-date" className="payment-form-label payment-form-label-required">Expiry Date</label>
                    </div>
                    <div className="payment-form-group">
                      <input type="text" placeholder=" " className="payment-form-control" id="cvv" />
                      <label htmlFor="cvv" className="payment-form-label payment-form-label-required">CVV</label>
                    </div>
                  </div>
                  <button type="submit" className="payment-form-submit-button"><i className="ri-wallet-line"></i> Pay</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* end: Payment */}
      </body>
    </html>
  );
}

export default PaymentPage;
