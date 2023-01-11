import React from 'react';
import Cart from '../components/Cart';
import Items from '../products.json';
import Products from '../components/x_Products';
import Takoyaki from '../takoyaki.json';
import Sushi from '../data/sushi.json';
import Ramen from '../data/ramen.json';
import Featured from '../data/featured.json';

const Menu = () => {
  return(
    <div className="body-bg container-fluid p-0">
      <div className="row">
      <img src="img/menu_banner.png" className="img-fluid mt-2" alt="featured-banner" />
      </div>
      
      <div id='' className='container p-2 '>
            <div className="row">
              <div className="header-heading col-lg-6"> 
                {Featured.map(item => ( 
                  <>
                    <h1>{item.name}</h1>
                    <p className="header-details">{item.info}</p>
                    <p className="header-details">{item.price}</p>
                    <a href="" className='header-btn btn btn-lg'>Order Now</a>
                  </>
                ))}
              
              </div>
              <div className="col-lg-6 header-image">
                <img src="img/boat.jpg" className='img-fluid' style={{height:'600px'}} alt="" />
              </div>

            </div>
        
      </div>
      
      <div id='bg-takoyaki'>
        <h1 className="title">Takoyaki</h1>
          <ProductLine category={Takoyaki}/>
      </div>
      <div id='bg-sushi'>
        <h1 className="title">Sushi</h1>
        <ProductLine category={Sushi}/>
      </div>    
      <div id='bg-ramen'>
        <h1 className="title">Ramen</h1>
        <ProductLine category={Ramen}/>
      </div>
    </div>
  );
}

const ProductLine = (props) => {
  return(
    <div id="products" className='container-fluid'>
        <div className="row justify-content-center">
          {/* <h1 className='catTitle'>{props.title}</h1>   */}
            {props.category.map(item => ( 
                <ProductBox image={item.image} title={item.name} info={item.info} price={item.price}/>
            ))
            }
        </div> 
    </div>
  );
}

const ProductBox = (props) => {
  return (
    <>
    <div className="card col-lg-3">
      <div className="">
        <img src={props.image} className="img-fluid"  alt="" />
      </div>
      <div className="p-name card-title">
        <h2>{props.title}</h2>
      </div>
      <div className="card-body">
         <h4 className='p-info'>{props.info}</h4>
         <h4 className='p-price'>{props.price}</h4>
      </div>
        <div className="card-footer">
        <button className="productbox-button">Order Now</button>
        </div>
    </div>
    </>
  );
}

export default Menu;