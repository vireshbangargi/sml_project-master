"use client";
import React, { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Floter = () => {
  const [scrolling, setScrolling] = useState(false);

  const onScroll = () => {
    setScrolling(window.scrollY > 30);
  };

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div>
      {scrolling && (
        <Link
          to="hero"
          className="fixed bottom-10 right-5 animate-bounce z-50 cursor-pointer  text-green-400"
          smooth={true}
          duration={500}
        >
          <BsFillArrowUpCircleFill size={30} />
        </Link>
      )}
    </div>
  );
};

export default Floter;
