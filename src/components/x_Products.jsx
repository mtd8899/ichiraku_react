import React from 'react';

const Products1 = (props) => {
  return(
    <div id="products">
      <h1>Choose and Enjoy</h1>
      <p>lorem ipsum nutun</p>
      <div className="a-container">
        <ProductBox1 image={'img/menu/2-jalapeno.jpg'} title={"Ramen"} info={"Sushi"}/>  
        <ProductBox1 image={'img/menu/1-salmon.jpg'} title={"Ramen"} info={"Sushi"}/>  
        <ProductBox1 image={'img/menu/1-original.jpg'} title={"Ramen"} info={"Sushi"}/>  
      </div>
    </div>
  );
}


const ProductBox1 = (props) => {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} alt="" />
      </div>
      <div className="a-b-text">
        <h2>{props.title}</h2>
        <h3>{props.info}</h3>
        <button className="productbox-button">Order Now</button>
      </div>
    </div>
  );
}

export default Products1;