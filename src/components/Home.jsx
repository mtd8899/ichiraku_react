import React from 'react';
import { NavLink } from "react-router-dom";

const Home = () => {
  return(
    <div className="body-bg">
      <img src="img/header.jpg" class="img-fluid" alt="ichirakubg" />
      <img src="img/featured_banner.png" class="img-fluid mt-2" alt="featured-banner" />

      <section id="grad1" className="pt-4 pt-2">
        <div className="container text-black">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12 ms-lg-5">
                <img id="conimg" src="img/boat.jpg" 
                  className="img-fluid col-md-9 col-lg-12 mb-5"
                  style={{border: "5px solid rgb(0, 0, 0)", borderRadius: "15%", borderColor: "#000"}} alt="BoatPhoto1" />
            </div>

            <div className="col-lg-7 col-md-8 mb-5">
              <div className="container card mt-2 mb-4 product-image">
                <h4 align="center" id="menuSakoSushi" className="pt-3">Sushi Boat Platter</h4>
                  <p>
                    Available in Regular (31 pieces of sashimi, nigiri and makimono) and Deluxe (36 pieces of our bestselling makimono).
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <center>
        <img src="img/menu_banner.png" className="img-fluid" alt="menu-banner"/>
      </center>
    
      {/* SUSHI */}
      <section id="grad1">
        <div className="container">
            <div className="row p-4 pb-2">
              {/* SAMPLE PRODUCTS */}
              <h3 className="text-black product-name">Sushi</h3>

              <div className="mb-3 mt-2 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="container card pt-2 product-image">
                  <img id="" src="img/menu/1-salmon.jpg" alt="Avatar" className="image product-image" />
                    {/* Product name */}
                  <p align="center" id="menuName" className="pb-0">Salmon Sushi Roll</p>
                    {/* PRODUCT INFO */}
                    <p className="pb-2">Tempura  and cucumber wrapped with salmon served with soy sauce and wasabi.</p>
                </div>
              </div>

              <div className="mb-3 mt-2 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="container card pt-2 product-image">
                  <img id="" src="img/menu/2-smoked.jpg" alt="Avatar" className="image product-image" />
                  {/* <!-- INFO + PRICE --> */}
                  <p align="center" id="menuName" className="pb-0">Smoked salmon sushi</p>
                  <p className="pb-2">Layer the cheese mix with the rice, cucumber, and red bell pepper.</p>
                </div>
              </div>

              <div className="mb-3 mt-2 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="container card pt-2 product-image">
                  <img id="" src="img/menu/3-paleo.jpg" alt="Avatar" className=" product-image" />
                  {/* <!-- INFO + PRICE --> */}
                  <p align="center" id="menuName" className="pb-0">palaeo sushi</p>
                    <p className="pb-2">cauliflower rice,  smoked salmon, bacon, asparagus stalks and milk.</p>
                </div>
              </div>
            </div>
        </div>
      </section>

      <hr />
      
      {/* <!-- TAKOYAKI --> */}
      <section id="grad1">
        <div className="container">
            <div className="row p-4 pt-2 mb-0">
                {/* <!-- SAMPLE PRODUCTS --> */}
              <h3 id ="menuSakoSushi" className="text-black">Takoyaki</h3>

              <div className="mb-3 mt-2 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="container card pt-2 product-image">
                  <img id="" src="img/menu/1-original.jpg" alt="Avatar" className="image product-image" />
                  {/* <!-- INFO + PRICE --> */}
                  <p align="center" id="menuName" className="pb-0">Original</p>
                    <p className="pb-2">Tanota sauce, mayo, bonito flakes, green seaweed.</p>
                </div>
              </div>

              <div className="mb-3 mt-2 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="container card h-100 pt-2 product-image">
                  <img id="" src="img/menu/2-jalapeno.jpg" alt="Avatar" className="image product-image" />
                  {/* <!-- INFO + PRICE --> */}
                  <p align="center" id="menuName" className="pb-0">Jalapeño</p>
                  <p className="pb-2">Jalapeño mayo, bonito flakes, green seaweed.</p>
                </div>
              </div>

              <div className="mb-3 mt-2 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="container card h-100 pt-2 product-image">
                  <img id="" src="img/menu/3-ponzu.jpg" alt="Avatar" className="image product-image" />
                  {/* <!-- INFO + PRICE --> */}
                  <p align="center" id="menuName" className="pb-0">Ponzu</p>
                  <p className="pb-2">Citrus soy sauce, bonito flakes, green onion.</p>
                </div>
              </div>

              <div align="right" className="mt-2">
                <NavLink className="btn btn-lg text-light" to="/menu" style={{backgroundColor: "#000000"}}>
                  See our Menu  ➜
                </NavLink>
              </div>

            </div>
        </div>
      </section>
    </div>
  )
};

export default Home;
