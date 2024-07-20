"use client";

import Preloader from "@/Components/PreLoader";
import { useEffect, useState } from "react";
import HomeComponent from "@/view/home";
import Container from "@/Components/Container";
import HeaderComponent from "@/Components/Header";

const Home = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <>
      {loader ? (
        <Preloader />
      ) : (
        <Container>
          <HeaderComponent />
          <HomeComponent />
        </Container>
      )}
    </>
  );
};

export default Home;
