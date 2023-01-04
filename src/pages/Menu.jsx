import React from 'react';
// import  ReactDOM from 'react-dom';
// import './src/style.css';
// import logo from './logo.svg';

const Menu = () => {
  return(
    <>
    <div className="body-bg">
      <img src="img/header.jpg" className="img-fluid" alt="ichirakubg" />
      <img src="img/menu_banner.png" className="img-fluid mt-2" alt="featured-banner" />

      <section className="">
        <div className="container">
          <div className="row px-4 pt-2">
            <h3 className="text-black product-name">Featured</h3>
            <div className="col-lg-10">
                <img id="conimg" src="img/boat.jpg" 
                  className="img-fluid"
                  style={{border: "5px solid rgb(0, 0, 0)", borderRadius: "15%", borderColor: "#000;"}} alt="BoatPhoto1" />
            </div>

            <div className="col-lg-4">
              <div className="container card mt-2 mb-2 product-image">
                <h4 align="center" id="menuSakoSushi" className="pt-3">Sushi Boat Platter</h4>
                  <p>
                    Available in Regular (31 pieces of sashimi, nigiri and makimono) and Deluxe (36 pieces of our bestselling makimono).
                  </p>
                  {/* <a href="/menu.html" className="btn btn-outline-dark text-black" style="width:25%"
                      style="background-color: rgba(197, 0, 0, 1);">Order now! ➜</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />
    
      {/* RAMEN */}
      <section id="">
        <div className="container">
            <div className="row px-4 pb-2">
              <h3 className="text-black product-name">Ramen</h3>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="container card h-100 pt-2 product-image">
                  <img id="" src="img/menu/1-TanTan.png" alt="Avatar" className="image product-image" />
                  <p align="center" id="menuName" className="pb-0">Tan Tan</p>
                    <p className="pb-2">Served in Japanese style sesame chili soup with house-made ground spicy soy meat and bok choy.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="container card h-100 pt-2 product-image">
                  <img id="" src="img/menu/2-Nikutama.png" pngalt="Avatar" className="image product-image" />
                  {/* <!-- INFO + PRICE --> */}
                  <p align="center" id="menuName" className="pb-0">Nikutama</p>
                  <p className="pb-2">Made-to-order noodles served with sweet and savory beef, hot spring egg,
                    and BK sauce. Can be served cold upon request.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="container card h-100 pt-2 product-image">
                  <img id="" src="img/menu/3-Tonkotsu.png" alt="Avatar" className=" product-image" />
                  {/* <!-- INFO + PRICE --> */}
                  <p align="center" id="menuName" className="pb-0">Tonkutsu</p>
                    <p className="pb-2">Made-to-order noodles served in a pork broth with chashu pork, miso ground pork, garlic, and seasoned egg.</p>
                </div>
              </div>
            </div>
        </div>
      </section>
      
      <hr />

      <section id="grad1">
        <div className="container">
            <div className="row px-4 pb-2">
              {/* SAMPLE PRODUCTS */}
              <h3 className="text-black product-name">Sushi</h3>

              <div className="mt-2 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="container card h-100 pt-2 product-image">
                  <img id="" src="img/menu/1-salmon.jpg" alt="Avatar" className="image product-image" />
                    {/* Product name */}
                  <p align="center" id="menuName" className="pb-0">Salmon Sushi Roll</p>
                    {/* PRODUCT INFO */}
                    <p className="pb-2">Tempura  and cucumber wrapped with salmon served with soy sauce and wasabi.</p>
                </div>
              </div>

              <div className="mt-2 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="container card h-100 pt-2 product-image">
                  <img id="" src="img/menu/2-smoked.jpg" alt="Avatar" className="image product-image" />
                  {/* <!-- INFO + PRICE --> */}
                  <p align="center" id="menuName" className="pb-0">Smoked salmon sushi</p>
                  <p className="pb-2">Layer the cheese mix with the rice, cucumber, and red bell pepper.</p>
                </div>
              </div>

              <div className="mt-2 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="container card h-100 pt-2 product-image">
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
            <div className="row px-4 pb-2">
                {/* <!-- SAMPLE PRODUCTS --> */}
              <h3 id ="menuSakoSushi" className="text-black">Takoyaki</h3>

              <div className="mt-2 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="container card h-100 pt-2 product-image">
                  <img id="" src="img/menu/1-original.jpg" alt="Avatar" className="image product-image" />
                  {/* <!-- INFO + PRICE --> */}
                  <p align="center" id="menuName" className="pb-0">Original</p>
                    <p className="pb-2">Tanota sauce, mayo, bonito flakes, green seaweed.</p>
                </div>
              </div>

              <div className="mt-2 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="container card h-100 pt-2 product-image">
                  <img id="" src="img/menu/2-jalapeno.jpg" alt="Avatar" className="image product-image" />
                  {/* <!-- INFO + PRICE --> */}
                  <p align="center" id="menuName" className="pb-0">Jalapeño</p>
                  <p className="pb-2">Jalapeño mayo, bonito flakes, green seaweed.</p>
                </div>
              </div>

              <div className="mt-2 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="container card h-100 pt-2 product-image">
                  <img id="" src="img/menu/3-ponzu.jpg" alt="Avatar" className="image product-image" />
                  {/* <!-- INFO + PRICE --> */}
                  <p align="center" id="menuName" className="pb-0">Ponzu</p>
                  <p className="pb-2">Citrus soy sauce, bonito flakes, green onion.</p>
                </div>
              </div>
            </div>
        </div>

        <div align="right" className="m-0 pb-2 p-0 me-4">
          <a href="#" className="btn">
            <i className="fa-solid fa-circle-arrow-up fa-3x" style={{color:"black"}}></i>
          </a>
        </div>

      </section>
    </div>
    </>
    
  )
}

export default Menu;
