import './BlogCSS/Blog.css'

import React, { Component } from 'react'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

 class Carousel extends Component{
  //this is the constructor function area
  constructor(props){
    super(props);
    this.state = {
      ShortTitle: {
        STitle1: 'One is the first short title.',
        STitle2: 'Two is the Second Short Title.',
        STitle3: 'Three is the third Short Title',
      },
      LongTitle: {
        LTitle1: 'One is the first Long title.',
        LTitle2: 'Two is the Second Long Title.',
        LTitle3: 'Three is the third Long Title',
      },
      Paragraph: {
        PTitle1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quae culpa quod error eos. Eius nobis unde exercitationem, cupiditate quibusdam accusamus itaque expedita fuga sequi optio nulla quasi, omnis obcaecati maxime, enim fugiat. Nostrum ad eius odio natus odit laboriosam incidunt quae accusantium veniam, cumque, facilis non modi labore animi.',
        PTitle2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quae culpa quod error eos. Eius nobis unde exercitationem, cupiditate quibusdam accusamus itaque expedita fuga sequi optio nulla quasi, omnis obcaecati maxime, enim fugiat. Nostrum ad eius odio natus odit laboriosam incidunt quae accusantium veniam, cumque, facilis non modiBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB',
        PTitle3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quae culpa quod error eos. Eius nobis unde exercitationem, cupiditate quibusdam accusamus itaque expedita fuga sequi optio nulla quasi, omnis obcaecati maxime, enim fugiat. Nostrum ad eius odio natus odit laboriosam incidunt quae accusantium veniam, cumque, facilis non modiCCCCCCCCCCCCCCCCCCCCCCCCCC'
      },
      ChannelName: {
        CName: 'My Channel'
      },
      Date: {
        Dat: '15/02/2024'
      }
    }
  }


//this is the first comment 
  render() {
    return (
      <div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade container mt-5" data-bs-ride="carousel">
  <div class="carousel-inner">
    
    <div class="carousel-item active">
      <div className='row'>
        <div className="col">
            <img src="img/1.jpg" class="d-block" alt="portfolio"/>
        </div>
        <div className="col">
            <p className='ShortTitle'>{this.state.ShortTitle.STitle1}</p>
            <h3 className='LongTitle'>{this.state.LongTitle.LTitle1}</h3>
            <p className='ShortTitle'>{this.state.Paragraph.PTitle1}</p>
            <p className='ChannelName'>{this.state.ChannelName.CName}</p>
            <p>{this.state.Date.Dat}</p>
        </div>
      </div>
    </div>

    <div class="carousel-item">
      <div className='row'>
        <div className="col">
            <img src="img/2.jpg" class="d-block" alt="portfolio"/>
        </div>
        <div className="col">
            <p className='ShortTitle'>{this.state.ShortTitle.STitle2}</p>
            <h3 className='LongTitle'>{this.state.LongTitle.LTitle2}</h3>
            <p className='ShortTitle'>{this.state.Paragraph.PTitle2}</p>
            <p className='ChannelName'>{this.state.ChannelName.CName}</p>
            <p>{this.state.Date.Dat}</p>
        </div>
      </div>
    </div>

    
    <div class="carousel-item">
      <div className='row'>
        <div className="col">
            <img src="img/3.jpg" class="d-block" alt="portfolio"/>
        </div>
        <div className="col">
            <p className='ShortTitle'>{this.state.ShortTitle.STitle2}</p>
            <h3 className='LongTitle'>{this.state.LongTitle.LTitle2}</h3>
            <p className='ShortTitle'>{this.state.Paragraph.PTitle3}</p>
            <p className='ChannelName'>{this.state.ChannelName.CName}</p>
            <p>{this.state.Date.Dat}</p>
        </div>
      </div>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
  <h3 className='mt-5'>Recent Post</h3>
</div>
      </div>
    )
  }
}

export default Carousel;