import React, { useState, useEffect } from "react";

export default function Scroll({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // async function fetchData(getUrl) {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(getUrl);
  //     const data = await response.json();

  //     if (data && data.products && data.products.length > 0) {
  //       setData(data.products);
  //       setLoading(false);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     setErrorMessage(e.message);
  //   }
  // }

  useEffect(() => {
    // fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(data, scrollPercentage);

  if (errorMessage) {
    return <div>Error ! {errorMessage}</div>;
  }

  if (loading) {
    return <div>Loading Data</div>;
  }

  return (
    <div className="">
      <div className="fixed top-0 z-[1] w-full text-center bg-black ">
        <h1 className="text-white">Custom Scroll Indicator</h1>
        <div className="w-full h-[10px] bg-[#aaf900]">
          <div
            className="h-[10px] bg-[#8b02b5] w-[0%]"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
