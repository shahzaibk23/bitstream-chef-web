import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    useHistory
  } from "react-router-dom";
  
export const Pricing = () => {
  return (
    <>
    <div className='container-fluid'>
    <div className='row'>
            <div className='col-6 col-sm-2'>
            <Link to="/dashboard">
          <img
            src="../img/back.png"
            alt="back"
            id="backFPGA"
            className='pricing-back'
          />
          </Link>
            </div>
            <div className='col-3'></div>
            <div className='col-3'></div>
          </div>
    </div>
    <div className="container pricing">
        <div className="pricing-header pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Pricing</h1>
        <p className="fs-5">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
      </div>
      <main className='mt-4'>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title">$50<small className="text-muted fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg card-brdr">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal" >Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$15<small className="text-muted fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg card-brdr">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm ">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$29<small className="text-muted fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg card-brdr">Buy Now</button>
              </div>
            </div>
          </div>
        </div> 
      </main>   
    </div>
    </>
  )
}
