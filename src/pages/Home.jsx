import CaruselMain from "../components/Carusel/CaruselMain";
import Footer from "../components/Footer";

import HomeContent from "../components/HomeContent";
import HomeServices from "../components/HomeServices";
import { slides } from "../ExampleDataFiles/CarouselData.json"
import { content } from "../ExampleDataFiles/HomeContentData.json"
import { services } from "../ExampleDataFiles/HomeServicesData.json"
import React, { useEffect } from 'react';



const Home = () => {


  //const [isLoading, setIsLoading] = React.useState(true);

  return (
    <>
      { /*<div>
      {isLoading ? <Loader /> : "Content goes here"}
    </div>
  */ }
      <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
        <div className="carousel-inner" role="listbox">
          <CaruselMain data={slides} />
        </div>
      </div>
      <HomeContent data={content} />
      <HomeServices data={services} />
      
    </>
  );
};

export default Home;