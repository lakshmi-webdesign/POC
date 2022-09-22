import React from 'react'
function Footer() {


  return (
    <div className='main-footer '  style={{ backgroundColor: 'rgb(26, 37, 83)', color: 'white', left: "0", bottom: "0", right: "0" }}>
      <div className='container-fluid pt-5 pb-5'>
        <div className='row d-flex '>

          <div className='col'>
            <h4 style={{ textAlign: 'initial' }}>Products and Services</h4>
            <ul className='list-unstyled' style={{ textAlign: 'initial' }}>
              <li>Banks and Accounts</li>
              <li>Savings</li>
              <li>Investing</li>
              <li>Credit Cards</li>
              <li>Debit Cards</li>
              <li>Loans</li>
              <li>Mortgages</li>
              <li>Retirement</li>
            </ul>
          </div>

          <div className='col' >
            <h4 style={{ textAlign: 'initial' }}>Help and Guidance</h4>
            <ul className='list-unstyled' style={{ textAlign: 'initial' }}>
              <li>Help Center</li>
              <li>Tweet Us</li>
              <li>Contact Us</li>
              <li>Find a Branch</li>
              <li>How to Complain</li>
              <li>Protecting yourself from Fraud</li>
            </ul>
          </div>

          <div className='col' >
            <h4 style={{ textAlign: 'initial' }}>Banking online</h4>
            <ul className='list-unstyled' style={{ textAlign: 'initial' }}>
              <li>What can I do online?</li>
              <li>Mobile Banking</li>
              <li>Internet Banking</li>
              <li>Service Status</li>
              <li>Business Banking</li>
              <li>Private Banking</li>
            </ul>
          </div>

          <div className='col' >
            <h4 style={{ textAlign: 'initial' }}>Customer care numbers</h4>
            <ul className='list-unstyled' style={{ textAlign: 'initial' }}>
              <li>Personal Banking<p style={{fontWeight: 700}}>1860 120 7777</p></li>
              <br></br>
              <li>Wealth / Private Banking<p style={{fontWeight: 700}}>1800 103 8181</p></li>
              <br></br>
              <li>Corporate / Business/ Retail Institutional Banking
              <p style={{fontWeight: 700}}>1860 120 6699</p></li>
              <br></br>
              <li>HBOS Bank Credit Card Number
                <p style={{fontWeight: 700}}>1800 1020 1239</p></li>
            </ul>
          </div>
        </div>

        {/* 
        <div className='col-12' >
          <h4 style={{ textAlign: 'initial' }}>Payment Partners</h4>
          <div className='row list-unstyled d-flex' style={{ textAlign: 'initial', backgroundColor: 'white', margin: 'auto', paddingBottom: '10px', paddingTop: '10px' }}>
            <div className='col'><img alt="Partner_Image" src="https://blinkit.com/5fdcf0f548fbf112eec1.png" style={{ width: '50px', marginRight: '10px' }} /></div>
            <div className='col'><img alt="Partner_Image" src="https://blinkit.com/901d69d548e0feba09ab.png" style={{ width: '50px', marginRight: '10px' }} /></div>
            <div className='col'><img alt="Partner_Image" src="https://blinkit.com/989b1a681e449677450c.png" style={{ width: '50px', marginRight: '10px' }} /></div>
            <div className='col'><img alt="Partner_Image" src="https://blinkit.com/22eb5fa23ba3b6609751.png" style={{ width: '50px', marginRight: '10px' }} /></div>
            <div className='col'><img alt="Partner_Image" src="https://blinkit.com/ba6f4bc10ee998b5ef4a.png" style={{ width: '50px', marginRight: '10px' }} /></div>
            <div className='col'><img alt="Partner_Image" src="https://blinkit.com/faa9535d3774d52e399a.png" style={{ width: '50px', marginRight: '10px' }} /></div>
            <div className='col'><img alt="Partner_Image" src="https://blinkit.com/84d7815d39258e73dcde.png" style={{ width: '50px', marginRight: '10px' }} /></div>
            <div className='col'><img alt="Partner_Image" src="https://blinkit.com/97c6174b61b03e30fce9.png" style={{ width: '50px', marginRight: '10px' }} /></div>
            <div className='col' style={{ color: 'black', fontSize: '12px', margin: '15px 5px auto auto' }}>Net Banking</div>
            <div className='col' style={{ color: 'black', fontSize: '12px', margin: '15px 5px auto auto' }}>Cash on Delivery</div>
          </div>
        </div> 
        */}

      </div>
      <div style={{ display: "grid" }}>
        <div style={{ gridColumn: '1', gridRow: "1" }}>

        </div>
        <div style={{ gridcolumn: '2', float: 'right' }}>Designed by Lakshmi</div>
      </div>
    </div>
  )
}

export default Footer