import React, { useState } from "react";
import Slider from "react-slick";
import pic1 from "../../assets/images/pic1.jpg";
import pic2 from "../../assets/images/pic2.jpg";
import pic3 from "../../assets/images/pic3.jpg";
import pic4 from "../../assets/images/pic4.jpg";
const images = [pic1, pic2, pic3, pic4];
const ArticlesComponent = () => {
  const [ImgIndex, setImgIndex] = useState(0);
  const settings = {
    infinite: true,
    lazyLoad: true,
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 300,
    beforeChange: (current, next) => setImgIndex(next),
  };
  return (
    <div className="my-5 grid p-10 md:h-1/2 md:w-full">
      <div className="items-center text-center text-white ">
        <h1 className=" text-5xl font-extrabold">Our Articles</h1>
      </div>
      <div className="my-9 grid items-center justify-center">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div className={index === ImgIndex ? "slide activeSlide" : "slide"}>
              <figure className="my-3 mx-auto rounded-xl bg-white dark:bg-white sm:p-8 md:flex md:p-0">
                <img
                  className=" h-24 w-24 rounded-full md:h-auto md:w-48 md:rounded-xl"
                  src={img}
                  alt=""
                />
                <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
                  <blockquote>
                    <p className="text-lg font-medium">
                      “Tailwind CSS is the only framework that I've seen scale
                      on large teams. It’s easy to customize, adapts to any
                      design, and the build size is tiny.”
                    </p>
                  </blockquote>
                  <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                      Sarah Dayan
                    </div>
                    <div className="text-dustLight dark:text-slate-500">
                      Staff Engineer, Algolia
                    </div>
                  </figcaption>
                </div>
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ArticlesComponent;
