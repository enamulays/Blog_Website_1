import React from 'react'
import Carousel from './Carousel';
import Card from './Card';
import Navbar from './Navbar';
import Page from './Page'


function Home() {
  return (
    <>
    <Navbar/>
    <Carousel/>
      <div className='container'>
        <div className='row'>
          <div className='col-3 cardclass'>
          <Card img="img/card1.png" title="Card title" p='Some quick example text to build on the card title and make up the bulk of the card' BtnName="Go Somewhere"/>
          </div>
          <div className='col-3 cardclass'>
          <Card img="img/card2.png" title="Card title 2" p='Some quick example text to build on the card title and make up the bulk of the card' BtnName="Go Somewhere 2"/>
          </div>
          <div className='col-3 cardclass'>
          <Card img="img/card3.png" title="Card title 3" p='Some quick example text to build on the card title and make up the bulk of the card' BtnName="Go Somewhere 3"/>
          </div>
          <div className='col-3 cardclass'>
          <Card img="img/card3.png" title="Card title 3" p='Some quick example text to build on the card title and make up the bulk of the card' BtnName="Go Somewhere 4"/>
          </div>
          <div className='col-3 cardclass'>
          <Card img="img/card3.png" title="Card title 3" p='Some quick example text to build on the card title and make up the bulk of the card' BtnName="Go Somewhere 5"/>
          </div>
          <div className='col-3 cardclass'>
          <Card img="img/card3.png" title="Card title 3" p='Some quick example text to build on the card title and make up the bulk of the card' BtnName="Go Somewhere 6"/>
          </div>
        </div>
        <Page/>
      </div>
    </>
  )
}

export default Home
