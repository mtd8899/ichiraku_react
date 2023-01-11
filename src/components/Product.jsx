import React, {useState, useEffect } from 'react';
import Items from '../products.json';

const Products = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //     fetch('src/productsItems.json')
  //     .then(response => response.json())
  //     .then(json => setData(json))
  //     // .then(json => console.log(json))

  //   }, []);

  //   console.log(data);
  //   if (data === null) {
  //   return <p>Loading data...</p>;
  // }

  return (
    <div>
      <div className="container">
        <div className="row px-4 pb-2 bg-success">
          {
          Items.map(item => (
            <div key={item.id} className="">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 bg-success">
              <h3 className="text-black product-name">{item.category}</h3>
                  <div className="container card h-100 pt-2 product-image">
                    <img id="" src={item.src} alt="Avatar" className="image product-image" />
                    <p align="center" id="menuName" className="pb-0">{item.name}</p>
                      <p className="pb-2">{item.info}</p>
                  </div>
                </div>
            </div>
          ))
          }     
      </div> 
    </div>

    </div>
  );
}

export default Products;