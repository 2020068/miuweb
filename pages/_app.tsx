import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Menu from "../components/menu";
import { AppProps } from "next/app";
import "./globals.css";
import "./applycs.css";
import "./about/about.css";
import "./about/employee/employee.css";
import "./about/campus/campus.css";
import "./about/campus/CCElements/CC.css";
import "/components/carousel/embla.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearchBar = () => {
    setSearchVisible(!isSearchVisible);
  };
  return (
    <div className="app-container">
      <Header isSearchVisible={isSearchVisible} />
      <div className="menu-container">
        <Menu toggleSearchBar={toggleSearchBar} />
      </div>
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
