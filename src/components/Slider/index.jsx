import React from "react";
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function Slider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentslide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentslide === 0 ? images.length - 1 : currentslide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentslide === images.length - 1 ? 0 : currentslide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured!{errorMsg}</div>;
  }

  return (
    <div className="flex h-[100vh] w-[100vw] justify-center items-center">
      <div className="relative flex justify-center items-center w-[600px] h-[450px] ">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="absolute w-8 h-8 text-white drop-shadow-[0px 0px 5px #555] left-4 cursor-pointer"
        />
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={
                  currentslide === index
                    ? "rounded-lg shadow-[0px 0px 7px #666] w-full h-full"
                    : "rounded-lg shadow-[0px 0px 7px #666] w-full h-full hidden"
                }
              />
            ))
          : null}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="absolute w-8 h-8 text-white drop-shadow-[0px 0px 5px #555] right-4 cursor-pointer"
        />
        <span className="flex absolute bottom-4 ">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentslide === index
                      ? "bg-white h-[15px] w-[15px] rounded-[50%] border-none outline-none m-[0 0.2rem] cursor-pointer"
                      : "bg-white h-[15px] w-[15px] rounded-[50%] border-none outline-none m-[0 0.2rem] cursor-pointer inactive"
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
}
