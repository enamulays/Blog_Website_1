import './BlogCSS/Blog.css'
import React from 'react'

function Footer() {
  return (
    <div>
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
<div className="container">
    <div className='footer-top-border'>
        </div>
    <footer className="text-center text-lg-start border border-white mt-xl-3 pt-4">
    {/* <!-- Grid container --> */}
    <div className="container p-4">
      {/* <!--Grid row--> */}
      <div className="row">
        {/* <!--Grid column--> */}
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 className="text-uppercase mb-1">OUR WORLD</h5>

          <ul className="list-unstyled mb-4">
            <li>
              <a href="#!" className="text-red">About us</a>
            </li>
            <li>
              <a href="#!" className="text-red">Collections</a>
            </li>
            <li>
              <a href="#!" className="text-red">Environmental philosophy</a>
            </li>
            <li>
              <a href="#!" className="text-red">Artist collaborations</a>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 className="text-uppercase mb-1">Assistance</h5>

          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-red">Contact us</a>
            </li>
            <li>
              <a href="#!" className="text-red">Size Guide</a>
            </li>
            <li>
              <a href="#!" className="text-red">Shipping Information</a>
            </li>
            <li>
              <a href="#!" className="text-red">Returns & Exchanges</a>
            </li>
            <li>
              <a href="#!" className="text-red">Payment</a>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}
{/* 
        <!--Grid column--> */}
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 className="text-uppercase mb-1">Careers</h5>

          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-red">Jobs</a>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-lg-3 col-md-6 mb-1 mb-lg-0">
          <h5 className="text-uppercase mb-1">Sign up to our newsletter</h5>

          <div className="form-outline form-red mb-4">
            <input type="email" id="form5Example2" className="form-control" />
            <label className="form-label" for="form5Example2">Email address</label>
          </div>

          <button type="submit" className="btn btn-outline-red text-white btn-block">Subscribe</button>
        </div>
        {/* <!--Grid column--> */}
      </div>
      {/* <!--Grid row--> */}
    </div>
    {/* <!-- Grid container --> */}

    {/* <!-- Copyright --> */}
    <div className="text-center p-3 border-top border-red text-red">
      © 2020 Copyright:
       <a className="text-red" href="https://mdbootstrap.com/"></a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>
  
</div>
{/* <!-- End of .container --> */}
    </div>
  )
}

export default Footer
