import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Pcard";
import "./popular.css";

function Popularbook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:1001/book/popular");

        const data = res.data.filter((data) => data.Type === "popular");

        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-20 md:px-20 px-4">
        <div className="px-4 md:px-0">
          <h1 className="font-semibold text-2xl pb-2 underline">
            Popular Books
          </h1>
          <p>
            Books are available in various genres for download or online
            reading, offering a wealth of knowledge and entertainment at no
            cost. Enjoy unlimited reading!
          </p>
        </div>

        <div className="mt-8 px-4 sm:px-6 md:px-10 lg:px-20">
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Popularbook;
