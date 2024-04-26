import "./globals.css";
import "./applycs.css";
import "./about/about.css";
import "./about/employee/employee.css";
import "./about/campus/campus.css";
import "./about/campus/CCElements/CC.css";
import "/components/carousel/embla.css";
import { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
