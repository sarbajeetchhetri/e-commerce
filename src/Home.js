import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
   
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="homeconatiner"
        />
        <div className="home__row">
          <Product
            id="12356"
            title="And the Mountains Echoed"
            price={29.99}
            image="http://laibary.com/img/books/a11687e61b4c0da67ba2c6f9de35b7cf.jpg"
            rating={5}

          />
          <Product
            id="18294"  
            title="TicWatch GTX Fitness Smart watch 10 Days Battery Life iP68 water resistant"
            price={80.99}
            image="https://static-01.daraz.com.np/p/7233d48b0f1783bf5ddd6e269c4ae013.png"
            rating={4}

          />

     
        </div>

        <div className="home__row">
          <Product
            id="23416"
            title="Brand: Nike Jordan 12 Retro Reverse Flu Game (CT8013-602)"
            price={337.50}
            image="https://m.media-amazon.com/images/I/6149zn-RDnL._AC_UL320_.jpg"
            rating={4}

          />
          <Product
            id="27894"
            title="JBL GO2 - Waterproof Ultra Portable Bluetooth Speaker"
            price={79}
            image="https://m.media-amazon.com/images/I/71723pWrVXL._AC_UY218_.jpg"
            rating={4}

          />
          <Product
            id="29194"
            title="O'Neal 0332-102 Unisex-Child Element Dirtbike Boots (Black, 2)"
            price={116.99}
            image="https://m.media-amazon.com/images/I/61Mb3lj5-yL._AC_UL320_.jpg"
            rating={3}

          />
        
        </div>

        <div className="home__row">
          <Product
            id="23594"
            title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black"
            price={1660}
            image="https://m.media-amazon.com/images/I/71916r38cNL._AC_UY218_.jpg"
            rating={5}

          />
        
        </div>
      </div>
    </div>
  );
};

export default Home;
