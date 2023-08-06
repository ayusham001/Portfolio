import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

export default function ScrollToTopButton({ isLightMode }) {
  const [scrollState, setScrollState] = useState(false);

  const toTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 200 ? setScrollState(true) : setScrollState(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrollState ? "block" : "hidden"
      } fixed cursor-pointer z-10 bottom-4 rounded-full right-8  p-2 ${
        isLightMode ? "text-orange-50 bg-sky-950" : "text-sky-950 bg-orange-50"
      }`}
      onClick={toTop}
    >
      <ArrowUpwardRoundedIcon
        className={`hover:transition-transform hover:ease-in-out hover:duration-400 text-xl hover:scale-150`}
      />
    </div>
  );
}
