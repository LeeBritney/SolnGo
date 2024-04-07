import React from 'react';
import visa from './images/vi.png';
import master from './images/mc.png';
import FPX from './images/fpx.png';
import Stripe from './images/stripe.png';
import Link from 'next/link';

const backButtonStyles = {
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: 2,
    backgroundColor: "transparent",
    border: "3px white solid",
    borderRadius: "20px",
    padding: "10px 20px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  };

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
                    <button>
                      SOLANA
                      <span className="SOLANA">{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}RM 856</span>
                    </button>
                    </div>
                    <div className="payment-plan">
                    <button>
                      SOL
                      <span className="SOLANA">{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'} + 1.44% {'\u00A0'}</span>
                    </button>
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
                  <div className="payment-form-container">
                    <button>
                      <i className="ri-wallet-line"></i> Pay
                    </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* end: Payment */}
        <div style={backButtonStyles} ><Link href= "/home">Back to Home</Link></div>
      </body>
    </html>
  );
}

export default PaymentPage;